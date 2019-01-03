#!/bin/sh
INDIR=$1
OUTDIR=$2

files=$(ls $INDIR)
for file in $files
do
  name=$(echo "$file" | cut -f 1 -d '.')
  gs -o "$OUTDIR$name.png" -sDEVICE=pngalpha -dLastPage=1 "$INDIR$file"
done
