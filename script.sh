#!/bin/bash

output="data.js"

echo "var morganeData = [{" > $output

COUNTER=0

while read line 
do
    country=`echo $line | cut -d ',' -f 1` >> $output

    country=${country}
    if [[ -z "${country}" ]]
    then
        continue
    else
        let COUNTER+=1
        code=`grep "$country"  ./js/morgane_data.js -B1 | head -n 1 | cut -d '"' -f 4`
        if [[ -z $code ]]
        then
            echo "Couldn't find the code -aborting"
            break
        fi
        echo "\"code\": \"$code\","  >> $output
        echo "\"name\": \"$country\","  >> $output



    fi
    for i in {1..6}
    do
        let j=$i+1
        category=`echo $line | cut -d ',' -f $j` >> $output
        #echo "category: $category"
        if [[ -z "${category// }" ]]
        then
            #echo "cat${i}:0"
            echo "\"cat${i}\": \"0\","  >> $output
        else
            #echo "cat${i}:1"
            echo "\"cat${i}\": \"1\","  >> $output
        fi
    done

    echo "}, {" >> $output

done <$1

sed -i '$ d' $output
echo "}];" >> $output


(>&2 echo "Found $COUNTER countries - success")




    
