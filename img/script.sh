#!/bin/bash

for i in 0 1
do
    for j in 0 1
    do
        for k in 0 1
        do
            for l in 0 1
            do
                for m in 0 1
                do
                    for n in 0 1
                    do
                        for o in 0 1
                        do
                            echo create $i $j $k $l $m $n $o
                            python createSVG.py $i $j $k $l $m $n $o
                        done
                    done
                done
            done
        done
    done
done
                        
