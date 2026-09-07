# Change log: image rename + sections 1.3, 1.4, 2.1 (2026-09-06)

Everything Claude changed in this job, and how to undo each piece.
**Nothing was deleted.** The only pre-existing files edited or replaced are the
five listed in parts 2 and 3 below, and byte-for-byte copies of each are in
`_revert-backup-2026-09-06-rename-ch02/source/`.

This is separate from the earlier `REVERT.md` / `_revert-backup-2026-09-06/`
(the `@component` web/print split). Neither undo touches the other.

---

## One-shot undo

```bash
bash "_revert-backup-2026-09-06-rename-ch02/revert.sh"
```

Renames the 60 images back, restores the five edited/replaced source files
(including your hand-written dot-product stub), deletes the files Claude
created. Safe to run twice. **Do not use `git checkout` / `git restore` on the
image files instead**: the working tree already holds modified versions of most
images (see `REVERT.md`), and git would bring back the committed versions, not
the ones that were on disk this morning.

---

## Part 1: image renames (`assets/images/`, 60 files)

Rule applied to every file whose name contained a space or a parenthesis:
each run of spaces / parentheses becomes one `-`, runs of dashes collapse to
one, and a dash left at the end of the stem is dropped. Nothing else in the
name changes (underscores, dots, case, extension).

| pattern | example |
|---|---|
| `Example 1.1.png` | `Example-1.1.png` |
| `…g-1(1).png` | `…g-1-1.png` |
| `…g-5 (1).png` | `…g-5-1.png` |
| `…g-1(1)-1.png` | `…g-1-1-1.png` |
| `Area under a curve _ Desmos_000366.png` | `Area-under-a-curve-_-Desmos_000366.png` |
| `Screenshot 2025-11-04 154946-1.png` | `Screenshot-2025-11-04-154946-1.png` |

**Two collisions** (the plain rule would have produced a name that already
existed):

| old | new | why |
|---|---|---|
| `2025_08_01_578ccdf8ba98801b0a3bg-1(1).jpg` | `2025_08_01_578ccdf8ba98801b0a3bg-1-1-dup.jpg` | `…-1-1.jpg` already exists and is **byte-identical**; the `-dup` copy is redundant and can be deleted |
| `2025_08_04_3d11211490a50caa278ag-2(1).png` | `2025_08_04_3d11211490a50caa278ag-2-1-b.png` | `…-2-1.png` already exists and is a **different picture** (the line segment of section 2.1; the `-b` file is the helix) |

The complete old → new list is `_revert-backup-2026-09-06-rename-ch02/rename-manifest.tsv`.
`assets/images/GIF/` was already clean and was not touched.

Git now shows the 60 old paths as deleted and the 60 new ones as untracked;
that is expected. Stage them together (`git add -A assets/images`) and git
will record them as renames.

**To revert only this part:** run the script, or by hand `mv` each `new_name`
in the manifest back to its `old_name`.

## Part 2: references updated (`source/`, 10 attributes in 2 files)

| file | attributes changed |
|---|---|
| `source/sec-ch01-01-VectorsIn2D.ptx` | 8 (`Example 1.1`, `1.2`, `1.3`, `1.4`, `1.6`, `1.8-1`, `1.8-2`, `1.10`) |
| `source/sec-ch01-02-VectorsIn3D.ptx` | 2 (`Note 2.1`, `Example 2.1`) |

Only the file name inside `source="…"` changed; the `/images/` prefix and
everything else in those files is as it was. After the change every
`source="…images/…"` in `source/*.ptx` resolves to a file under `assets/`.

Not updated on purpose (historical copies / build output that still mention
the old names): `_revert-backup-2026-09-06/source/sec-ch01-01-VectorsIn2D.ptx`,
`REVERT.md`, `logs/schema-assembled-source.xml`.

**Later the same day**, `sec-ch01-02-VectorsIn3D.ptx` changed twice more: you
gave Note 2.1 a real Desmos graph (`mf8ycttl9c`) and started the point
`(6, 4.5, 8)` figure on a compressed `c~…` CalcPlot3D string; Claude then
replaced that figure's interactive with the long-form CalcPlot3D scene you
supplied (attribute + link, caption no longer PENDING, house `variant="controls"
width="90%" aspect="3:2"` template). The backup copy predates all of that, so
the one-shot revert would drop your Note 2.1 graph id too. The file as it was
just before Claude's figure edit is kept as
`_revert-backup-2026-09-06-rename-ch02/source/sec-ch01-02-VectorsIn3D.before-point-figure.ptx`.

**To revert only this part:** copy the two files back from
`_revert-backup-2026-09-06-rename-ch02/source/` (for `sec-ch01-02`, prefer the
`.before-point-figure` copy if you want to keep your own edits).

## Part 3: sections 1.3, 1.4 and 2.1 from lecture files 3, 4, 5

Final layout (after your restructure instruction later the same day):

| file | status | from |
|---|---|---|
| `source/sec-ch01-03-DotProduct.ptx` | **replaced** — was your hand-written stub (definition + one remark + CalcPlot3D figure); now the full conversion, with the stub's three blocks and ids (`fig-ch01-03-vectors-plane`, `interactive-ch01-03-vectors-plane`) as its first three blocks | `3. The Dot Product - Solutions.tex` |
| `source/sec-ch01-04-CrossProduct.ptx` | new | `4. The Cross Product - Solutions.tex` |
| `source/ch-02-VectorValuedFunctions.ptx` | new chapter wrapper; title "2. Vector-Valued Functions" and its one-sentence introduction are Claude's wording | — |
| `source/sec-ch02-01-VectorValuedFunctions.ptx` | new | `5. Vector-Valued Functions - Solutions.tex` |

Edited files (backups in `_revert-backup-2026-09-06-rename-ch02/source/`):

- `source/ch-01-IntroToVectors.ptx`: one added `xi:include` for section 1.4
  (1.3 was already included) plus a comment.
- `source/main.ptx`: one added `xi:include` for chapter 2 plus a comment.
- `source/sec-ch01-03-DotProduct.ptx`: the stub, backed up before it was
  replaced.

Every section file opens with a numbered `FLAGGED FOR YOUR DECISION` comment
listing each judgement call (PENDING interactives, merged "Continuation of"
examples, renamed image files, typeset descriptions to review, source typos
preserved, and so on). Section ids follow the file names (`ch01-03`,
`ch01-04`, `ch02-01`); example ids keep the lecture numbering
(`example-ch01-03-ex-3-5`).

First-draft names that no longer exist, in case an old build log or comment
mentions them: `sec-ch02-01-DotProduct.ptx`, `sec-ch02-02-CrossProduct.ptx`,
`sec-ch02-03-VectorValuedFunctions.ptx`, `ch-02-VectorProductsAndFunctions.ptx`
(the first draft put all three sections into chapter 2).

**To revert only this part:** delete the three new files and restore
`main.ptx`, `ch-01-IntroToVectors.ptx` and `sec-ch01-03-DotProduct.ptx` from
the backup folder.
