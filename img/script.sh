#!/bin/bash

flag=0
filename="/dev/null"
while read line
do
    if [ $flag == 1 ]
    then
        echo "</svg>" >> $filename
        filename="${line}.svg"
        echo filename="${filename}"
        flag=0
        echo "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"-1 -1 2 2\">" > $filename
        continue
    fi
    
    echo $line | grep "Sum" > /dev/null
    if [ $? == 0 ]
    then
        flag=1 
        continue    
    fi

    echo $line | grep "path" > /dev/null
    if [ $? == 0 ]
    then
        echo $line "</path>" >> $filename
    fi
    
done < $1
