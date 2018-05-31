#!/bin/bash

for file in *.svg
do
    filename=`basename $file svg`
    convert -background none -density 1000 $file ${filename}png
    inkscape -z $file -e ${filename}png -D -d 1000
done
    
