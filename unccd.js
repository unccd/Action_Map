/*
            although ammap has methos like getAreaCenterLatitude and getAreaCenterLongitude,
            they are not suitable in quite a lot of cases as the center of some countries
            is even outside the country itself (like US, because of Alaska and Hawaii)
            That's why wehave the coordinates stored here
          */



var map;

var dataProvider = {
  mapVar: AmCharts.maps.worldLow,
  images: [],
  areas: []
};



AmCharts.theme = AmCharts.themes.light;
AmCharts.hideCredits=true;

// build map
AmCharts.ready(function() {
  map = new AmCharts.AmMap();

  map.addTitle("UNCCD Actions", 18, "white");
  map.areasSettings = {
    unlistedAreasColor: "#FFFFFF",
    unlistedAreasAlpha: 0.1
  };

  map.imagesSettings = {
    balloonText: "<span style='font-size:14px;'><b>[[title]]</b>: [[value]]</span>",
    alpha: 0.6
  }



  for (var i = 0; i < morganeData.length; i++) {
    var dataItem = morganeData[i];
    var itemTitle = morganeData[i].name;
    var id = dataItem.code;

    var filename = dataItem.cat1 + dataItem.cat2 + dataItem.cat3 + dataItem.cat4 + dataItem.cat5 + dataItem.cat6 + dataItem.cat7;
    //filename="000001";
    var img="./img/"+filename+".png";
    //console.log("filename: " + img);
    var description="";
    if(dataItem.cat1 == "1") description+=" Drought Initiative,";
    if(dataItem.cat2 == "1") description+=" LDN Transformative projects,";
    if(dataItem.cat3 == "1") description+=" 3S,";
    if(dataItem.cat4 == "1") description+=" Greening Dryland Partnerships,";
    if(dataItem.cat5 == "1") description+=" Gender,";
    if(dataItem.cat6 == "1") description+=" LDN Med,";
    if(dataItem.cat7 == "1") description+=" 'Great Green Wall, ";


    dataProvider.images.push({
      title: itemTitle,
      balloonText: "[[title]]: [[description]]",
      description: description,
      longitude: latlong[id].longitude,
      latitude: latlong[id].latitude,
      imageURL: img,
      height: 20,
      width: 20,
      flag: "cat"
    });

  }

  dataProvider.images.push({
    id: "cat1",
    title: "Drought Initiative",
    description: "<a href=https://unccd.sharepoint.com/GM/DI/SitePages/Home.aspx>Drought Initiative</a>: Parties at COP 13 requested the secretariat and other UNCCD institutions and bodies to implement a drought initiative in the next biennium which proposes concrete action on drought preparedness systems to boost the resilience of people, communities and ecosystems against droughts. In 2018, 44 countries from all regions of the world are part of this initiative.",
    left: 800,
    bottom: 15,
    type: "circle",
    color: COL_CAT1,
    width: 30,
    selectable: true,
    outlineColor: "white",
    outlineThickness: 0
  });


  dataProvider.images.push({
    id: "cat2",
    title: "LDN Transformative Projects and Programmes",
    description: "<a href=https://unccd.sharepoint.com/GM/LDNISP/TPP/SitePages/Home.aspx>LDN Transformative Projects and Programmes</a>: Moving towards LDN implementation to achieve SDGs 15.3. and/or LDN targets, the GM is currently supporting countries to design LDN Transformative Projects and Programmes (TPP). The TPP team provides direct assistance to develop project ideas into project concept note / initial proposals that can be used as the basis of full fledge project proposals, to be mainly submitted to GCF, GEF and Adaptation Fund.",
    left: 850,
    bottom: 15,
    type: "circle",
    color: COL_CAT2,
    width: 30,
    selectable: true,
    outlineColor: "white",
    outlineThickness: 0
  });

  dataProvider.images.push({
    id: "cat3",
    title: "3S Initiative",
    description: "<a href=https://unccd.sharepoint.com/ERPA/3Sinitiative/SitePages/Home.aspx>3S Initiative</a>: The 3S initiative aims at stabilizing “at risk” areas by creating land-based green jobs for the most vulnerable populations through investments in large scale on land rehabilitation and sustainable land management. The Initiative aims to create 2 million jobs and to rehabilitate 10 million hectares in Africa by 2025.",
    left: 900,
    bottom: 15,
    type: "circle",
    color: COL_CAT3,
    width: 30,
    selectable: true,
    outlineColor: "white",
    outlineThickness: 0
  });

  dataProvider.images.push({
    id: "cat4",
    title: "Greening Drylands Partnership",
    description: "<a href=http://english.forest.go.kr/newkfsweb/html/EngHtmlPage.do?pg=/esh/intl/UI_KFS_0302_010100.html&mn=ENG_14_03_02>Greening Drylands Partnership</a>: Under the Changwon Initiative, the Greening Drylands Partnership (GDP) Project aims to provide support to developing countries to promote action programmes for reversing desertification, land degradation and drought (DLDD), reforestation and forest rehabilitation in degraded lands.",
    left: 950,
    bottom: 15,
    type: "circle",
    color: COL_CAT4,
    width: 30,
    selectable: true,
    outlineColor: "white",
    outlineThickness: 0
  });

  dataProvider.images.push({
    id: "cat5",
    title: "Gender",
    description: "<a href=https://unccd.sharepoint.com/GM/LDNISP/TPP/SitePages/Home.aspx>Gender</a>: UN Women / IUCN are currently providing support to mainstream gender in several projects proposals, part of the LDN TPP. This includes capacity building / finalizing writing project concept note workshop and the provision of a help desk to support gender mainstreaming.",
    left: 1000,
    bottom: 15,
    type: "circle",
    color: COL_CAT5,
    width: 30,
    selectable: true,
    outlineColor: "white",
    outlineThickness: 0
  });

  dataProvider.images.push({
    id: "cat6",
    title: "LDN-TSP",
    description: "<a href=https://unccd.sharepoint.com/GM/LDNTSP/SitePages/Home.aspx>LDN-TSP</a>: The UNCCD is supporting interested countries in the national LDN target setting process, including the definition of national baselines, targets and associated measures to achieve LDN by 2030 through the LDN Target Setting Programme (TSP). Currently, there are 119 countries participating in the LDN TSP.",
    left: 1050,
    bottom: 15,
    type: "circle",
    color: COL_CAT6,
    width: 30,
    selectable: true,
    outlineColor: "white",
    outlineThickness: 0
  });

  dataProvider.images.push({
    id: "cat7",
    title: "'Great Green Wall",
    description: "<a href=https://unccd.sharepoint.com/GM/GreatGreenWall/SitePages/Home.aspx>Great Green Wall</a>: Launched in 2007, the GGW initiative aims to restore Africa’s degraded landscapes and in the process transform millions of lives in one of the world’s poorest regions, the Sahel. The GGW is already boosting food security and resilience to climate change, whilst creating thousands of jobs for the many communities who live along its path, especially women and young people. Moreover, it promises to be a compelling solution to the many urgent threats that plague the people of this region – notably drought, famine, conflict and migration.",
    left: 1100,
    bottom: 15,
    type: "circle",
    color: COL_CAT7,
    width: 30,
    selectable: true,
    outlineColor: "white",
    outlineThickness: 0
  });

  map.dataProvider = dataProvider;



  console.log("Listeners before:" +  map.listeners);
  //map.addListener("click", handleClick);
  map.addListener("clickMapObject", handleClick);
  map.addListener("zoomCompleted", updateCustomMarkers);
  //map.addListener("rollOverMapObject", showBaloon);
  //map.addListener("rollOutMapObject", hideBaloon);

  console.log("Listeners after:" +  map.listeners);

//        $("a[title='JavaScript charts']").remove();
  map.write("mapdiv");

});

var CAT1_CLICKED=false;
var CAT2_CLICKED=false;
var CAT3_CLICKED=false;
var CAT4_CLICKED=false;
var CAT5_CLICKED=false;
var CAT6_CLICKED=false;
var CAT7_CLICKED=false;


function closeDescriptionBox(){
  var descriptionBox = document.getElementById('description');
  descriptionBox.style.display = "none";
}

function handleClick(event) {
   console.log(event);
   console.log("Id:" + event.mapObject.id);

   var descriptionBox = document.getElementById('description');
   var descriptionBoxInner = document.getElementById('description_inner');


   map.rollOverMapObject(event.mapObject);

   //map.clickMapObject(event.mapObject);


   switch(event.mapObject.id){
    case "cat1":
      CAT1_CLICKED= !CAT1_CLICKED;
      console.log("CAT1_CLICKED:" + CAT1_CLICKED);
      dataProvider.areas = [];
      break;
    case "cat2":
      CAT2_CLICKED= !CAT2_CLICKED;
      console.log("CAT1_CLICKED:" + CAT1_CLICKED);
      dataProvider.areas = [];
      break;

    case "cat3":
      console.log("cat3");
      CAT3_CLICKED= !CAT3_CLICKED;
      dataProvider.areas = [];
      break;

    case "cat4":
      console.log("cat4");
      CAT4_CLICKED= !CAT4_CLICKED;
      dataProvider.areas = [];
      break;

    case "cat5":
      console.log("cat5");
      CAT5_CLICKED= !CAT5_CLICKED;
      dataProvider.areas = [];
      break;

    case "cat6":
      console.log("cat6");
      CAT6_CLICKED= !CAT6_CLICKED;
      dataProvider.areas = [];
      break;

    case "cat7":
      console.log("cat7");
      CAT7_CLICKED= !CAT7_CLICKED;
      dataProvider.areas = [];
      break;
    default:
      return;

   }

   descriptionBoxInner.innerHTML = event.mapObject.description;
   descriptionBox.style.display = "block";
   //descriptionBox.style.backgroundColor = "white";

   //Select coresponding button(s) as selected
   for (var x = 0; x < map.dataProvider.images.length; x++) {
     var image = map.dataProvider.images[x];
     console.log("image:" + image.id);
     if(image.type != "circle" ) continue;
     if(CAT1_CLICKED && (image.id == "cat1")){
       image.outlineThickness=5;
       console.log("set cat1 to 5");
     }else{
       if(image.id == "cat1"){
         console.log("set cat1 to 0");
         image.outlineThickness=0;
       }
     }
     if(CAT2_CLICKED && image.id == "cat2"){
       image.outlineThickness=5;
       console.log("set cat2 to 5");
     }else{
       if(image.id == "cat2"){
         console.log("set cat2 to 0");
         image.outlineThickness=0;
       }
     }
     if(CAT3_CLICKED && image.id == "cat3"){
       image.outlineThickness=5;
     }else{
       if(image.id == "cat3"){
         image.outlineThickness=0;
       }
     }
     if(CAT4_CLICKED && image.id == "cat4"){
       image.outlineThickness=5;
     }else{
       if(image.id == "cat4"){
         image.outlineThickness=0;
       }
     }
     if(CAT5_CLICKED && image.id == "cat5"){
         image.outlineThickness=5;

     }else{
       if(image.id == "cat5"){
         image.outlineThickness=0;
       }
     }
     if(CAT6_CLICKED && image.id == "cat6"){
       image.outlineThickness=5;
     }else{
       if(image.id == "cat6"){
         image.outlineThickness=0;
       }
     }
     if(CAT7_CLICKED && image.id == "cat7"){
       image.outlineThickness=5;
     }else{
       if(image.id == "cat7"){
         image.outlineThickness=0;
       }
     }

   }


   //chose region selection color
   var color="white";
   var counter = 0;
   if(CAT1_CLICKED){
     counter ++; color=COL_CAT1;
   }
   if(CAT2_CLICKED){
     counter ++; color=COL_CAT2;
   }
   if(CAT3_CLICKED){
     counter ++; color=COL_CAT3;
   }
   if(CAT4_CLICKED){
     counter ++; color=COL_CAT4;
   }
   if(CAT5_CLICKED){
     counter ++; color=COL_CAT5;
   }
   if(CAT6_CLICKED){
     counter ++; color=COL_CAT6;
   }
   if(CAT7_CLICKED){
     counter ++; color=COL_CAT7;
   }
   if(counter > 1) color="white";
   dataProvider.areas = [];
   console.log("counter: "+counter);
   console.log("color: "+color);
   if(counter > 0){
     for (var i = 0; i < morganeData.length; i++) {
       var dataItem = morganeData[i];
       counter = 0
       if((CAT1_CLICKED) && (dataItem.cat1 > 0)){
         counter ++; color=COL_CAT1;
       }
       if((CAT2_CLICKED) && (dataItem.cat2 > 0)){
         counter ++; color=COL_CAT2;
       }
       if((CAT3_CLICKED) && (dataItem.cat3 > 0)){
         counter ++; color=COL_CAT3;
       }
       if((CAT4_CLICKED)&& (dataItem.cat4 > 0)){
         counter ++; color=COL_CAT4;
       }
       if((CAT5_CLICKED)&& (dataItem.cat5 > 0)){
         counter ++; color=COL_CAT5;
       }
       if((CAT6_CLICKED)&& (dataItem.cat6 > 0)){
         counter ++; color=COL_CAT6;
       }
       if((CAT7_CLICKED)&& (dataItem.cat7 > 0)){
         counter ++; color=COL_CAT7;
       }
       if(counter > 1) color="white";
       if(counter > 0){
         dataProvider.areas.push({
                id: dataItem.code,
                color: color
              });
       }
      //  if(((!CAT1_CLICKED) || (dataItem.cat1 > 0) )&&
      //     ((!CAT2_CLICKED) || (dataItem.cat2 > 0) )&&
      //     ((!CAT3_CLICKED) || (dataItem.cat3 > 0) )&&
      //     ((!CAT4_CLICKED) || (dataItem.cat4 > 0) )&&
      //     ((!CAT5_CLICKED) || (dataItem.cat5 > 0) )&&
      //     ((!CAT6_CLICKED) || (dataItem.cat6 > 0) )&&
      //     ((!CAT7_CLICKED) || (dataItem.cat7 > 0) )){
      //       dataProvider.areas.push({
      //         id: dataItem.code,
      //         color: color
      //       });
      //   }
      }
   }




   //write the map
   map.dataProvider = dataProvider;
   map.write("mapdiv");

}
