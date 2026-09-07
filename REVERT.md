# Change log for the `fig-region-of-integration` fix — 2026-09-06

Everything Claude changed on 2026-09-06, and how to undo each piece.
**Nothing was deleted or overwritten in place except the two source files listed
below, and byte-for-byte copies of them (plus the untouched `publication.ptx`)
are in `_revert-backup-2026-09-06/`.**

---

## What was wrong

The figure in `source/sec-ch01-01-VectorsIn2D.ptx` read:

```xml
<image source="/images/GIF/L1 AnimatedExample" width="50%">
```

Three separate faults in that one attribute:

1. **No file extension.** PreTeXt has nothing to resolve, so no image is emitted
   in either format. This alone breaks the figure everywhere.
2. **Leading `/`.** Makes the path absolute. In HTML that resolves against the
   site root (which is why it can appear to work when hosted); LaTeX looks for a
   literal `/images/...` on disk and fails.
   The external assets root is declared in `source/docinfo.ptx` as
   `<directories external="../assets"/>`, so `@source` must be relative to
   `assets/` — i.e. `images/GIF/...` with no leading slash.
3. **Space in the filename.** Harmless in HTML; a fight with LuaLaTeX's
   `\includegraphics` in the PDF build.

And the fourth, structural problem: **a GIF cannot go into a PDF at all.**
LaTeX has no GIF reader, so the same `@source` cannot serve both targets. That
is what the `@component` split below is for.

---

## Change 1 — assets: added space-free copies (NON-destructive)

In `assets/images/GIF/`, these were **copied** (originals left in place):

| original (kept) | new copy |
|---|---|
| `L1 AnimatedExample.gif`  | `L1-AnimatedExample.gif` |
| `L1 AnimatedExample.jpg`  | `L1-AnimatedExample.jpg` |
| `L1 AnimatedExample.webm` | `L1-AnimatedExample.webm` |

The `.webm` copy is not referenced by anything; it is there only in case you
take the `<video>` route described at the bottom.

**To revert:** delete the three hyphenated files.

```bash
rm "assets/images/GIF/L1-AnimatedExample.gif" "assets/images/GIF/L1-AnimatedExample.jpg" "assets/images/GIF/L1-AnimatedExample.webm"
```

Once you are happy the build works you can go the other way instead: delete the
three *spaced* originals, since nothing references them any more.

---

## Change 2 — `source/sec-ch01-01-VectorsIn2D.ptx` (lines 9-24 originally)

The single `<figure>` became **two** figures, one per output format, each marked
with `@component`. The `<caption>`, `<shortdescription>` and `<description>`
are identical in both; only `@xml:id`, `@component` and the image file differ.

| | web figure | print figure |
|---|---|---|
| `@xml:id`    | `fig-region-of-integration` | `fig-region-of-integration-print` |
| `@component` | `web` | `print` |
| `@source`    | `images/GIF/L1-AnimatedExample.gif` | `images/GIF/L1-AnimatedExample.jpg` |

Two elements may not share an `xml:id` even when only one survives the build, so
the print copy got its own. Nothing currently cross-references this figure
(checked), so the two ids cost you nothing today — but if you ever add an
`<xref>`, `ref="fig-region-of-integration"` will have no target in the PDF
build. Wrap the referring sentence in `@component` too, or accept two ids.

**To revert:**

```bash
cp "_revert-backup-2026-09-06/source/sec-ch01-01-VectorsIn2D.ptx" source/
```

---

## Change 3 — new file `publication/publication-web.ptx`
## Change 4 — new file `publication/publication-print.ptx`

`@component` does nothing on its own. A publication file has to say which
components are in the version it builds:

```xml
<source>
  <directories generated="../generated-assets" />
  <version include="web" />
</source>
```

…and `include="print"` in the other. Elements with **no** `@component` are in
every version, so only the two marked figures are affected.

The existing `publication/publication.ptx` was **not touched**. It is 99%
commented-out reference material — its only live setting was the
`generated-assets` directory, which is reproduced verbatim in both new files.
It remains as your options reference. Note that PreTeXt publication files have
no include mechanism, so any *future* real setting you add has to go into both
new files, not into `publication.ptx`.

**To revert:** delete both new files.

```bash
rm publication/publication-web.ptx publication/publication-print.ptx
```

---

## Change 5 — `project.ptx`

```diff
   <targets>
-    <target name="web" format="html" />
-    <target name="print" format="pdf" />
+    <target name="web" format="html" publication="publication-web.ptx" />
+    <target name="print" format="pdf" publication="publication-print.ptx" />
   </targets>
```

`@publication` resolves relative to the project's `publication` directory, so
the bare filename is correct. Omitting `@publication` entirely (the old state)
means no `<version include>` applies and *both* figures get built — which is
what the current print build does.

**To revert:**

```bash
cp "_revert-backup-2026-09-06/project.ptx" .
```

---

## Full revert, all five changes at once

```bash
cp "_revert-backup-2026-09-06/project.ptx" . && cp "_revert-backup-2026-09-06/source/sec-ch01-01-VectorsIn2D.ptx" source/ && rm -f publication/publication-web.ptx publication/publication-print.ptx "assets/images/GIF/L1-AnimatedExample.gif" "assets/images/GIF/L1-AnimatedExample.jpg" "assets/images/GIF/L1-AnimatedExample.webm" && rm -rf _revert-backup-2026-09-06 REVERT.md
```

(`_revert-backup-2026-09-06/publication/publication.ptx` is a backup of a file
that was never modified — kept only so the backup folder is a complete snapshot
of the publication directory as it stood.)

---

## What was and was not verified

Verified locally:

- all `.ptx` files parse as well-formed XML;
- both referenced image files exist at the resolved paths under `assets/`;
- no duplicate `xml:id` anywhere in `source/`.

**Not verified: the actual build.** The PreTeXt CLI is not installed on this
Windows machine — this is a devcontainer project (`.devcontainer/`), and
`pretext` lives in the container. Run it there:

```bash
pretext build web && pretext build print
```

Expect the GIF in `output/web` and the JPG in `output/print`. If `pretext build`
complains, `logs/schema-errors.log` is the file to read.

---

## Two things noticed but deliberately left alone

**1. Every other image in the book has the same leading-slash bug.** 17 more of
them — 9 in `sec-ch01-01`, 8 in `sec-ch01-02` — e.g.
`source/sec-ch01-01-VectorsIn2D.ptx:110` — `<image source="/images/Example 1.1.png">`.
Most also contain spaces. They will fail in the PDF build for exactly the
reasons above. Only the one figure you asked about was changed. Say the word and
the rest can follow the same pattern.

**2. `logs/schema-errors.log` shows 23 pre-existing schema errors** unrelated to
this figure — `<interactive>` used as a direct child of `<figure>` (8 places), a
`<figure>` missing its `<caption>`, and two `<md>` elements containing bare text
instead of `<mrow>`. These predate this change.

---

## Alternative worth considering: one `<video>` instead of two figures

`assets/images/GIF/L1-AnimatedExample.webm` and `.jpg` already exist, which
means you could drop the whole component/publication apparatus and write one
element that works in both formats:

```xml
<figure xml:id="fig-region-of-integration">
    <caption>The region <m>D</m> of integration.</caption>
    <video source="images/GIF/L1-AnimatedExample.webm"
           preview="images/GIF/L1-AnimatedExample.jpg" width="50%">
        <description>
            <p>...same text...</p>
        </description>
    </video>
</figure>
```

HTML gets a player, the PDF gets the `@preview` still. No second publication
file, no second `xml:id`, and readers get a pause control that an animated GIF
cannot offer. Changes 3, 4 and 5 would all be unnecessary. The trade-off is that
a video reads as a video rather than as an inline animation, and `<video>` and
`<image>` differ in how they handle `<shortdescription>`.

Your `output/web/` directory shows this route was tried before — the previously
built HTML for this figure contains a `<video>` tag — so you may already know
whether you liked it.
