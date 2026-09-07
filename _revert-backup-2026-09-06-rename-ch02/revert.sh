#!/usr/bin/env bash
# Undo everything Claude did on 2026-09-06 for the image rename + sections 1.3/1.4/2.1 job.
# Works in Git Bash on Windows and in the Codespace. Run it from anywhere:
#   bash "_revert-backup-2026-09-06-rename-ch02/revert.sh"
# It is safe to run twice (steps that are already undone are skipped).
set -euo pipefail
HERE="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT="$(dirname "$HERE")"
cd "$ROOT"

echo "1/3 renaming images back (assets/images) from rename-manifest.tsv"
tail -n +2 "$HERE/rename-manifest.tsv" | while IFS=$'\t' read -r old new note; do
  if [ -e "assets/images/$new" ] && [ ! -e "assets/images/$old" ]; then
    mv -n "assets/images/$new" "assets/images/$old"
  else
    echo "   skip: $new (already reverted or missing)"
  fi
done

echo "2/3 restoring the five edited/replaced source files from byte-for-byte backups"
echo "    (sec-ch01-03-DotProduct.ptx goes back to your hand-written stub)"
echo "    NOTE: sec-ch01-02-VectorsIn3D.ptx also loses YOUR later edits of 2026-09-06 (Note 2.1 graph"
echo "    mf8ycttl9c, the point-(6,4.5,8) CalcPlot3D figure); they are kept in"
echo "    sec-ch01-02-VectorsIn3D.before-point-figure.ptx next to this script if you want them back."
for f in main.ptx ch-01-IntroToVectors.ptx sec-ch01-01-VectorsIn2D.ptx sec-ch01-02-VectorsIn3D.ptx sec-ch01-03-DotProduct.ptx; do
  cp "$HERE/source/$f" "source/$f"
done

echo "3/3 removing the files Claude created (final names and the earlier draft names)"
rm -f source/ch-02-VectorValuedFunctions.ptx \
      source/sec-ch01-04-CrossProduct.ptx \
      source/sec-ch02-01-VectorValuedFunctions.ptx \
      source/ch-02-VectorProductsAndFunctions.ptx \
      source/sec-ch02-01-DotProduct.ptx \
      source/sec-ch02-02-CrossProduct.ptx \
      source/sec-ch02-03-VectorValuedFunctions.ptx

echo "done. REVERT-2026-09-06-rename-ch02.md and this backup folder are left in place; delete them by hand."
