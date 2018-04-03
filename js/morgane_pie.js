function getCoordinatesForPercent(percent) {
  const x = Math.cos(2 * Math.PI * percent);
  const y = Math.sin(2 * Math.PI * percent);
  return [x, y];
}

var COL_CAT1="orange";
var COL_CAT2="yellow";
var COL_CAT3="red";
var COL_CAT4="green";
var COL_CAT5="fuchsia";
var COL_CAT6="blue";

function createPie(dataItem){


  var sum = parseInt(dataItem.cat1) + parseInt(dataItem.cat2) + parseInt(dataItem.cat3) + parseInt(dataItem.cat4) + parseInt(dataItem.cat5) + parseInt(dataItem.cat6);
  var name = dataItem.cat1 + dataItem.cat2 + dataItem.cat3 + dataItem.cat4 + dataItem.cat5 + dataItem.cat6;
  console.log("Sum: " + sum);
  console.log(name);
  //for
  const slices = [
    { percent: parseInt(dataItem.cat1)/sum, color: COL_CAT1 },
    { percent: parseInt(dataItem.cat2)/sum, color: COL_CAT2 },
    { percent: parseInt(dataItem.cat3)/sum, color: COL_CAT3 },
    { percent: parseInt(dataItem.cat4)/sum, color: COL_CAT4 },
    { percent: parseInt(dataItem.cat5)/sum, color: COL_CAT5 },
    { percent: parseInt(dataItem.cat6)/sum, color: COL_CAT6 },
  ];

  let cumulativePercent = 0;



  slices.forEach(slice => {
  // destructuring assignment sets the two variables at once
  const [startX, startY] = getCoordinatesForPercent(cumulativePercent);

  // each slice starts where the last slice ended, so keep a cumulative percent
  cumulativePercent += slice.percent;

  const [endX, endY] = getCoordinatesForPercent(cumulativePercent);

  // if the slice is more than 50%, take the large arc (the long way around)
  const largeArcFlag = slice.percent > .5 ? 1 : 0;

	// create an array and join it just for code readability
  const pathData = [
    `M ${startX} ${startY}`, // Move
    `A 1 1 0 ${largeArcFlag} 1 ${endX} ${endY}`, // Arc
    `L 0 0`, // Line
  ].join(' ');
  ;


    const pathEl = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    pathEl.setAttribute('d', pathData);
    pathEl.setAttribute('fill', slice.color);
    console.log(pathEl);
    return pathEl;

  });
}





/**
 * Creates and positions custom markers (pie charts)
 */
 var previousZoom=1;
function updateCustomMarkers(event) {
  // get map object
  //return;

  // go through all of the images
  for (var x = 0; x < map.dataProvider.images.length; x++) {

    // get MapImage object
    var image = map.dataProvider.images[x];

    // Is it a Pie?
    if (image.flag === undefined) {
      continue;
    }else{
      console.log("Got a pie: " + image.title);
      console.log("zoom level: " + map.zoomLevel());
      var multi = 1;
      if(map.zoomLevel() > 1){
        multi = (map.zoomLevel() * 0.333) + 0.666;
      }
      map.dataProvider.images[x].width = multi*20;
      map.dataProvider.images[x].height = multi*20;
      console.log("Changing scale to: " + multi);
/*
      image.externalElement = createCustomMarker( image );

      var xy = map.coordinatesToStageXY(image.longitude, image.latitude);
      image.externalElement.style.top = xy.y + 'px';
      image.externalElement.style.left = xy.x + 'px';*/

      image.validate();
    }

  }
}

function createCustomMarker( image ) {
  // create holder
  console.log("createCustomMarker")
  var holder = document.createElement( 'div' );
  holder.className = 'svg';
  holder.title = image.title;
  holder.style.position = 'absolute';

  holder.appendChild = createPie();

  // append the marker to the map container
  image.chart.chartDiv.appendChild( holder );

  return holder;
}
