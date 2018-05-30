#!/bin/bash

for file in *.svg
do
    filename=`basename $file svg`
    convert -background none -density 500 $file ${filename}png
done
    
