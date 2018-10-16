# UNCCD Action Map
This is an interactive map summarizing actions taken by UNCCS in different countries. 

## Setup
The map reads data from unccd.js file. To create it, run `script.sh` with selected CSV file:
`./script.sh data.csv`


`data.csv` can be easily imported to Excel for modification. Just import the file to Excel, perform the modifications and export it back to the CSV format. Be careful while adding new country names as they must be provided in a specific format (i.e., Dominican Republic -> Dominican Rep.)

Not that the script will stop if it encounters a country that it does not recognize. Currently supported countries can be found in `js/morgane_data.js`.




