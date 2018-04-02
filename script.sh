#!/bin/bash

echo "var morganeData = [{"

COUNTER=0

while read line 
do
    #echo Got line: $line
    country=`echo $line | cut -d ',' -f 1`
    country=${country}
    if [[ -z "${country}" ]]
    then
        #echo "not country: $country"
        continue
    else
        let COUNTER+=1
        #echo "country: $country"
        code=`grep "$country"  morgane_data.js -B1 | head -n 1 | cut -d '"' -f 4`
        #echo "code: $code"
        if [[ -z $code ]]
        then
            echo "Couldn't find the code -aborting"
            break
        fi
        echo "\"code\": \"$code\"," 
        echo "\"name\": \"$country\"," 


    fi
    for i in {1..6}
    do
        let j=$i+1
        category=`echo $line | cut -d ',' -f $j`
        #echo "category: $category"
        if [[ -z "${category// }" ]]
        then
            #echo "cat${i}:0"
            echo "\"cat${i}\": \"0\"," 
        else
            #echo "cat${i}:1"
            echo "\"cat${i}\": \"1\"," 
        fi
    done

    echo "}, {"
done <$1
echo "}];"

(>&2 echo "Found $COUNTER countries - success")




    
