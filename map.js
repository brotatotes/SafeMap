var pinNames = [
"Alex Friedman",
"Karen Hsu",
"Eric Hao",
"Suman Maroju",
"Barack Obama",
"Donald Trump",
"George Bush",
"George Washington",
"Ronald Reagan",
"Teddy Roosevelt",
"James Carter",
"Thomas Jefferson",
"Andrew Jackson",
"Abe Lincoln",
"John Kennedy",
"John Davis",
"William Jones",
"James Miller",
"Thomas Taylor",
"Peter King",
"Issac Harris",
"Robert Scot",
"Sangrin Cook",
"Marry Reagan",
"Sarah White",
"Maria Carter",
"Julia Martin",
"Emily Baker",
"Amanda Hill",
"Anna Young"
];

var pinAddrs = [
"1117 Foster Street",
"992 Main Street",
"1234 Pine Drive",
"112 First Street",
"281 Second Street",
"104 Third Street",
"933 Oak Place",
"100 Sheridan Road",
"399 Capstone Street",
"1533 Brook Avenue",
"387 Water Way",
"99 Dane Street",
"15 Money Lane",
"9 Fast Drive",
"8765 Birch Lane",
"1118 Foster Street",
"993 Main Street",
"1235 Pine Drive",
"113 First Street",
"282 Second Street",
"105 Third Street",
"934 Oak Place",
"101 Sheridan Road",
"398 Capstone Street",
"1532 Brook Avenue",
"386 Water Way",
"98 Dane Street",
"14 Money Lane",
"8 Fast Drive",
"8764 Birch Lane"
];

var pinDescs = [
"My arm got cut under a falling branch.",
"My dog ran away after the accident. My leg is broken too.",
"My house is on fire. Need help now.",
"I'm totally fine",
"My roof collapsed, but I'm safe.",
"My cat scratched me",
"I've fallen and I can't get up. I shoulda bought a life alert.",
"My brother is on fire right now",
"My dog became a cat and my cat became a hamster during the flood.",
"I'm just hungry and Dominoes is closed from the flood",
"House is flooding",
"I'm dehydrated and have no clean water",
"Half my house collapsed and I can't find my grandma",
"My popcorn caught on fire and now my kitchen is on fire",
"No damage. I'm all good.",
"My Leg got cut under a falling branch.",
"My cat ran away after the accident. My hand is broken too.",
"My apartment is on fire. Need help now.",
"I'm totally fine",
"My building collapsed, but I'm safe.",
"My dog scratched me",
"I've fallen and I can't get up. I should bought a life alert.",
"My grandma is on fire right now",
"My cat became a dog and my cat became a hamster during the flood.",
"I'm just hungry and Dominoes is closed from the flood",
"House is flooding",
"I'm dehydrated and have no clean water",
"Half my house collapsed and I can't find my grandma",
"My popcorn caught on fire and now my kitchen is on fire",
"No damage. I'm all good."
];

var pinCrises = [
"needs medical assistance",
"needs medical assistance",
"needs the fire department",
"is safe",
"experienced property damage",
"needs medical assistance",
"needs medical assistance",
"needs the fire department",
"experienced property damage",
"needs food and water",
"experienced property damage",
"needs food and water",
"experienced property damage",
"needs the fire department",
"is safe",
"needs medical assistance",
"needs medical assistance",
"needs the fire department",
"is safe",
"experienced property damage",
"needs medical assistance",
"needs medical assistance",
"needs the fire department",
"experienced property damage",
"needs food and water",
"experienced property damage",
"needs food and water",
"experienced property damage",
"needs the fire department",
"is safe"
];

var pins = []; // initialize pins (HTML elements)
var pinPopups = [];
var n = pinNames.length;
var lats = [42.028, 42.033, 42.0451, 42.0441, 42.038, 42.038, 42.032, 42.035, 42.039, 42.025, 42.027, 42.033, 42.040, 42.032, 42.035,   42.025, 42.036, 42.0454, 42.0444, 42.034, 42.035, 42.036, 42.030, 42.045, 42.044, 42.024, 42.031, 42.046, 42.035, 42.039];
var lons = [-87.702, -87.705, -87.687, -87.677, -87.692, -87.695, -87.691, -87.681, -87.691, -87.699, -87.709, -87.695, -87.700, -87.682, -87.700,  -87.701, -87.706, -87.686, -87.678, -87.691, -87.696, -87.690, -87.682, -87.690, -87.698, -87.708, -87.690, -87.701, -87.681, -87.701];

// document.getElementById("search-button").addEventListener("click", search);

function search() {
    console.clear();

    var text = document.getElementById("search-text-box").value;
    var results = [];
    var t = text.toLowerCase();
    for (var i = 0; i < n; i++) {
        var data = [pinNames[i], pinAddrs[i], pinDescs[i], pinCrises[i]];
        data = data.map((x) => t != "" && x.toLowerCase().indexOf(t) != -1);
        if (data.includes(true)) {
            results.push(i);
        }
    }

    if (results.length == 0) {
        console.log("No results found.\n")
    } else {
        if (results.length == 1) {
            console.log(results.length + " result found!\n\n");
        } else {
            console.log(results.length + " results found!\n\n");
        }
    }

    for (var i = 0; i < n; i++) {
        if (results.includes(i)) {
            pinPopups[i].setContent(getText(i));
            pinPopups[i].open(map, pins[i]);
        } else {
            if (pinPopups[i].getMap()) {
                pinPopups[i].close();
            }
        }
    }
}

function getText(i) {
    return pinNames[i] + " " + pinCrises[i] + " at " + pinAddrs[i] + ":<br/>" + pinDescs[i];
}

function initMap() {
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 42.0451, lng: -87.6877},
        mapTypeId: 'terrain'
    });

var pinColor = "FE7569";
    var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
    new google.maps.Size(29, 54),
    new google.maps.Point(0,0),
    new google.maps.Point(10, 34));
    //var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var iconBase = 'http://maps.google.com/mapfiles/ms/micons/';
    var iconBase2 = 'http:// maps.google.com/mapfiles/kml/pal4/';
    var iconBase3 = 'http:// maps.google.com/mapfiles/kml/pal3/';
    // var marker8 = new google.maps.Marker({
    //     position: {lat: 42.0441, lng: -87.685},
    //     map: map,
    //     //icon: pinImage,
    //     //animation: google.maps.Animation.DROP,
    //     //icon: iconBase + 'parking_lot_maps.png'
    //     icon: iconBase + 'orange-dot.png'
    // });




    // pins
    for (var i=0; i < n; i++) {
        pinPopups.push(new google.maps.InfoWindow())
    };

    var marker1 = new google.maps.Marker({
        position: {lat: lats[0], lng: lons[0]},
        map: map,
        // icon: iconBase + 'orange-dot.png',
         //icon: iconBase + 'firedept.png',
         icon: iconBase + 'hospitals.png',
         //icon: iconBase3 + 'icon38.png',
        //icon: iconBase2 + 'icon55.png',
    });
    var marker2 = new google.maps.Marker({
        position: {lat: lats[1], lng: lons[1]},
        map: map,
        icon: iconBase + 'hospitals.png',

    });
    var marker3 = new google.maps.Marker({
        position: {lat: lats[2], lng: lons[2]},
        map: map,
        icon: iconBase + 'firedept.png',

    });
    var marker4 = new google.maps.Marker({
        position: {lat: lats[3], lng: lons[3]},
        map: map,
        icon: iconBase + 'rangerstation.png',
    });
    var marker5 = new google.maps.Marker({
        position: {lat: lats[4], lng: lons[4]},
        map: map,
        icon: iconBase + 'landmarks-jp.png',
            //snack_bar
    });
    var marker6 = new google.maps.Marker({
        position: {lat: lats[5], lng: lons[5]},
        map: map,
        icon: iconBase + 'hospitals.png',
    });
    var marker7 = new google.maps.Marker({
        position: {lat: lats[6], lng: lons[6]},
        map: map,
        icon: iconBase + 'hospitals.png',
    });
    var marker8 = new google.maps.Marker({
        position: {lat: lats[7], lng: lons[7]},
        map: map,
        icon: iconBase + 'firedept.png',
    });
    var marker9 = new google.maps.Marker({
        position: {lat: lats[8], lng: lons[8]},
        map: map,
        icon: iconBase + 'landmarks-jp.png',
    });
    var marker10 = new google.maps.Marker({
        position: {lat: lats[9], lng: lons[9]},
        map: map,
        icon: iconBase + 'snack_bar.png',
    });
    var marker11 = new google.maps.Marker({
        position: {lat: lats[10], lng: lons[10]},
        map: map,
        icon: iconBase + 'landmarks-jp.png',
    });
    var marker12 = new google.maps.Marker({
        position: {lat: lats[11], lng: lons[11]},
        map: map,
        icon: iconBase + 'snack_bar.png',
    });
    var marker13 = new google.maps.Marker({
        position: {lat: lats[12], lng: lons[12]},
        map: map,
        icon: iconBase + 'landmarks-jp.png',
    });
    var marker14 = new google.maps.Marker({
        position: {lat: lats[13], lng: lons[13]},
        map: map,
        icon: iconBase + 'firedept.png',
    });
    var marker15 = new google.maps.Marker({
        position: {lat: lats[14], lng: lons[14]},
        map: map,
        icon: iconBase + 'rangerstation.png',
    });




    var marker16 = new google.maps.Marker({
        position: {lat: lats[15], lng: lons[15]},
        map: map,
        // icon: iconBase + 'orange-dot.png',
         //icon: iconBase + 'firedept.png',
         icon: iconBase + 'hospitals.png',
         //icon: iconBase3 + 'icon38.png',
        //icon: iconBase2 + 'icon55.png',
    });
    var marker17 = new google.maps.Marker({
        position: {lat: lats[16], lng: lons[16]},
        map: map,
        icon: iconBase + 'hospitals.png',

    });
    var marker18 = new google.maps.Marker({
        position: {lat: lats[17], lng: lons[17]},
        map: map,
        icon: iconBase + 'firedept.png',

    });
    var marker19 = new google.maps.Marker({
        position: {lat: lats[18], lng: lons[18]},
        map: map,
        icon: iconBase + 'rangerstation.png',
    });
    var marker20 = new google.maps.Marker({
        position: {lat: lats[19], lng: lons[19]},
        map: map,
        icon: iconBase + 'landmarks-jp.png',
            //snack_bar
    });
    var marker21 = new google.maps.Marker({
        position: {lat: lats[20], lng: lons[20]},
        map: map,
        icon: iconBase + 'hospitals.png',
    });
    var marker22 = new google.maps.Marker({
        position: {lat: lats[21], lng: lons[21]},
        map: map,
        icon: iconBase + 'hospitals.png',
    });
    var marker23 = new google.maps.Marker({
        position: {lat: lats[22], lng: lons[22]},
        map: map,
        icon: iconBase + 'firedept.png',
    });
    var marker24 = new google.maps.Marker({
        position: {lat: lats[23], lng: lons[23]},
        map: map,
        icon: iconBase + 'landmarks-jp.png',
    });
    var marker25 = new google.maps.Marker({
        position: {lat: lats[24], lng: lons[24]},
        map: map,
        icon: iconBase + 'snack_bar.png',
    });
    var marker26 = new google.maps.Marker({
        position: {lat: lats[25], lng: lons[25]},
        map: map,
        icon: iconBase + 'landmarks-jp.png',
    });
    var marker27 = new google.maps.Marker({
        position: {lat: lats[26], lng: lons[26]},
        map: map,
        icon: iconBase + 'snack_bar.png',
    });
    var marker28 = new google.maps.Marker({
        position: {lat: lats[27], lng: lons[27]},
        map: map,
        icon: iconBase + 'landmarks-jp.png',
    });
    var marker29 = new google.maps.Marker({
        position: {lat: lats[28], lng: lons[28]},
        map: map,
        icon: iconBase + 'firedept.png',
    });
    var marker30 = new google.maps.Marker({
        position: {lat: lats[29], lng: lons[29]},
        map: map,
        icon: iconBase + 'rangerstation.png',
    });



    pins = [marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11, marker12, marker13, marker14, marker15,  marker16, marker17, marker18, marker19, marker20, marker21, marker22, marker23, marker24, marker25, marker26, marker27, marker28, marker29, marker30];

    pins[0].addListener('click', function() {
        if (pinPopups[0].getMap()) {
            pinPopups[0].close();
        } else {
            pinPopups[0].setContent(getText(0));
            pinPopups[0].setContent(pinPopups[0].getContent());
            pinPopups[0].open(map, pins[0]);
        }
    });
    pins[1].addListener('click', function() {
        if (pinPopups[1].getMap()) {
            pinPopups[1].close();
        } else {
            pinPopups[1].setContent(getText(1));
            pinPopups[1].setContent(pinPopups[1].getContent());
            pinPopups[1].open(map, pins[1]);
        }
    });
    pins[2].addListener('click', function() {
        if (pinPopups[2].getMap()) {
            pinPopups[2].close();
        } else {
            pinPopups[2].setContent(getText(2));
            pinPopups[2].setContent(pinPopups[2].getContent());
            pinPopups[2].open(map, pins[2]);
        }
    });
    pins[3].addListener('click', function() {
        if (pinPopups[3].getMap()) {
            pinPopups[3].close();
        } else {
            pinPopups[3].setContent(getText(3));
            pinPopups[3].setContent(pinPopups[3].getContent());
            pinPopups[3].open(map, pins[3]);
        }
    });
    pins[4].addListener('click', function() {
        if (pinPopups[4].getMap()) {
            pinPopups[4].close();
        } else {
            pinPopups[4].setContent(getText(4));
            pinPopups[4].setContent(pinPopups[4].getContent());
            pinPopups[4].open(map, pins[4]);
        }
    });
    pins[5].addListener('click', function() {
        if (pinPopups[5].getMap()) {
            pinPopups[5].close();
        } else {
            pinPopups[5].setContent(getText(5));
            pinPopups[5].setContent(pinPopups[5].getContent());
            pinPopups[5].open(map, pins[5]);
        }
    });
    pins[6].addListener('click', function() {
        if (pinPopups[6].getMap()) {
            pinPopups[6].close();
        } else {
            pinPopups[6].setContent(getText(6));
            pinPopups[6].setContent(pinPopups[6].getContent());
            pinPopups[6].open(map, pins[6]);
        }
    });
    pins[7].addListener('click', function() {
        if (pinPopups[7].getMap()) {
            pinPopups[7].close();
        } else {
            pinPopups[7].setContent(getText(7));
            pinPopups[7].setContent(pinPopups[7].getContent());
            pinPopups[7].open(map, pins[7]);
        }
    });
    pins[8].addListener('click', function() {
        if (pinPopups[8].getMap()) {
            pinPopups[8].close();
        } else {
            pinPopups[8].setContent(getText(8));
            pinPopups[8].setContent(pinPopups[8].getContent());
            pinPopups[8].open(map, pins[8]);
        }
    });
    pins[9].addListener('click', function() {
        if (pinPopups[9].getMap()) {
            pinPopups[9].close();
        } else {
            pinPopups[9].setContent(getText(9));
            pinPopups[9].setContent(pinPopups[9].getContent());
            pinPopups[9].open(map, pins[9]);
        }
    });
    pins[10].addListener('click', function() {
        if (pinPopups[10].getMap()) {
            pinPopups[10].close();
        } else {
            pinPopups[10].setContent(getText(10));
            pinPopups[10].setContent(pinPopups[10].getContent());
            pinPopups[10].open(map, pins[10]);
        }
    });
    pins[11].addListener('click', function() {
        if (pinPopups[11].getMap()) {
            pinPopups[11].close();
        } else {
            pinPopups[11].setContent(getText(11));
            pinPopups[11].setContent(pinPopups[11].getContent());
            pinPopups[11].open(map, pins[11]);
        }
    });
    pins[12].addListener('click', function() {
        if (pinPopups[12].getMap()) {
            pinPopups[12].close();
        } else {
            pinPopups[12].setContent(getText(12));
            pinPopups[12].setContent(pinPopups[12].getContent());
            pinPopups[12].open(map, pins[12]);
        }
    });
    pins[13].addListener('click', function() {
        if (pinPopups[13].getMap()) {
            pinPopups[13].close();
        } else {
            pinPopups[13].setContent(getText(13));
            pinPopups[13].setContent(pinPopups[13].getContent());
            pinPopups[13].open(map, pins[13]);
        }
    });
    pins[14].addListener('click', function() {
        if (pinPopups[14].getMap()) {
            pinPopups[14].close();
        } else {
            pinPopups[14].setContent(getText(14));
            pinPopups[14].setContent(pinPopups[14].getContent());
            pinPopups[14].open(map, pins[14]);
        }
    });




    pins[15].addListener('click', function() {
        if (pinPopups[15].getMap()) {
            pinPopups[15].close();
        } else {
            pinPopups[15].setContent(getText(15));
            pinPopups[15].setContent(pinPopups[15].getContent());
            pinPopups[15].open(map, pins[15]);
        }
    });
    pins[16].addListener('click', function() {
        if (pinPopups[16].getMap()) {
            pinPopups[16].close();
        } else {
            pinPopups[16].setContent(getText(16));
            pinPopups[16].setContent(pinPopups[16].getContent());
            pinPopups[16].open(map, pins[16]);
        }
    });
    pins[17].addListener('click', function() {
        if (pinPopups[17].getMap()) {
            pinPopups[17].close();
        } else {
            pinPopups[17].setContent(getText(17));
            pinPopups[17].setContent(pinPopups[17].getContent());
            pinPopups[17].open(map, pins[17]);
        }
    });
    pins[18].addListener('click', function() {
        if (pinPopups[18].getMap()) {
            pinPopups[18].close();
        } else {
            pinPopups[18].setContent(getText(18));
            pinPopups[18].setContent(pinPopups[18].getContent());
            pinPopups[18].open(map, pins[18]);
        }
    });
    pins[19].addListener('click', function() {
        if (pinPopups[19].getMap()) {
            pinPopups[19].close();
        } else {
            pinPopups[19].setContent(getText(19));
            pinPopups[19].setContent(pinPopups[19].getContent());
            pinPopups[19].open(map, pins[19]);
        }
    });
    pins[20].addListener('click', function() {
        if (pinPopups[20].getMap()) {
            pinPopups[20].close();
        } else {
            pinPopups[20].setContent(getText(20));
            pinPopups[20].setContent(pinPopups[20].getContent());
            pinPopups[20].open(map, pins[20]);
        }
    });
    pins[21].addListener('click', function() {
        if (pinPopups[21].getMap()) {
            pinPopups[21].close();
        } else {
            pinPopups[21].setContent(getText(21));
            pinPopups[21].setContent(pinPopups[21].getContent());
            pinPopups[21].open(map, pins[21]);
        }
    });
    pins[22].addListener('click', function() {
        if (pinPopups[22].getMap()) {
            pinPopups[22].close();
        } else {
            pinPopups[22].setContent(getText(22));
            pinPopups[22].setContent(pinPopups[22].getContent());
            pinPopups[22].open(map, pins[22]);
        }
    });
    pins[23].addListener('click', function() {
        if (pinPopups[23].getMap()) {
            pinPopups[23].close();
        } else {
            pinPopups[23].setContent(getText(23));
            pinPopups[23].setContent(pinPopups[23].getContent());
            pinPopups[23].open(map, pins[23]);
        }
    });
    pins[24].addListener('click', function() {
        if (pinPopups[24].getMap()) {
            pinPopups[24].close();
        } else {
            pinPopups[24].setContent(getText(24));
            pinPopups[24].setContent(pinPopups[24].getContent());
            pinPopups[24].open(map, pins[24]);
        }
    });
    pins[25].addListener('click', function() {
        if (pinPopups[25].getMap()) {
            pinPopups[25].close();
        } else {
            pinPopups[25].setContent(getText(25));
            pinPopups[25].setContent(pinPopups[25].getContent());
            pinPopups[25].open(map, pins[25]);
        }
    });
    pins[26].addListener('click', function() {
        if (pinPopups[26].getMap()) {
            pinPopups[26].close();
        } else {
            pinPopups[26].setContent(getText(26));
            pinPopups[26].setContent(pinPopups[26].getContent());
            pinPopups[26].open(map, pins[26]);
        }
    });
    pins[27].addListener('click', function() {
        if (pinPopups[27].getMap()) {
            pinPopups[27].close();
        } else {
            pinPopups[27].setContent(getText(27));
            pinPopups[27].setContent(pinPopups[27].getContent());
            pinPopups[27].open(map, pins[27]);
        }
    });
    pins[28].addListener('click', function() {
        if (pinPopups[28].getMap()) {
            pinPopups[28].close();
        } else {
            pinPopups[28].setContent(getText(28));
            pinPopups[28].setContent(pinPopups[28].getContent());
            pinPopups[28].open(map, pins[28]);
        }
    });
    pins[29].addListener('click', function() {
        if (pinPopups[29].getMap()) {
            pinPopups[29].close();
        } else {
            pinPopups[29].setContent(getText(29));
            pinPopups[29].setContent(pinPopups[29].getContent());
            pinPopups[29].open(map, pins[29]);
        }
    });


	var legend = document.getElementById('legend');

	 var div = document.createElement('div');
	 div.innerHTML = '<img src="' + 'http://maps.google.com/mapfiles/ms/micons/firedept.png' + '"> ' + 'Fire Accident';
	 legend.appendChild(div);

	 var div = document.createElement('div');
	 div.innerHTML = '<img src="' + 'http://maps.google.com/mapfiles/ms/micons/hospitals.png' + '"> ' + 'Medical Emergency';
     legend.appendChild(div);

	 var div = document.createElement('div');
	 div.innerHTML = '<img src="' + 'http://maps.google.com/mapfiles/ms/micons/landmarks-jp.png' + '"> ' + 'House Collapse';
	 legend.appendChild(div);

	 var div = document.createElement('div');
	 div.innerHTML = '<img src="' + 'http://maps.google.com/mapfiles/ms/micons/snack_bar.png' + '"> ' + 'Food-Water Shortage';
     legend.appendChild(div);

	 var div = document.createElement('div');
	 div.innerHTML = '<img src="' + 'http://maps.google.com/mapfiles/ms/micons/rangerstation.png' + '"> ' + 'Safe';
     legend.appendChild(div);
 /*       for (var key in icons) {
          var type = icons[key];
          var name = type.name;
          var icon = type.icon;
          var div = document.createElement('div');
          div.innerHTML = '<img src="' + icon + '"> ' + name;
          legend.appendChild(div);

        }*/

        map.controls[google.maps.ControlPosition.RIGHT_TOP].push(legend);


    // heatmap
    heatmap = new google.maps.visualization.HeatmapLayer({
        data: getPoints(),
        map: map
    });
    heatmap2 = new google.maps.visualization.HeatmapLayer({
        data: []
    })

    heatmap.set('radius', 100);
    heatmap.setMap(map);



        //     var legend = document.getElementById('legend');
        // //for (var key in icons) {
        //   // var type = icons[key];
        //   // var name = type.name;
        //   // // var icon = type.icon;
        //   // // var div = document.createElement('div');
        //   // div.innerHTML = '<img src="' + icon + '"> ' + name;
        //   // legend.appendChild(div);
        // //}

        // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}

function getPoints() {
    points = []
    points.push([lats[0], lons[0]])
    points.push([lats[1], lons[1]])
    points.push([lats[2], lons[2]])
    points.push([lats[3], lons[3]])
    points.push([lats[4], lons[4]])
    points.push([lats[5], lons[5]])
    points.push([lats[6], lons[6]])
    points.push([lats[7], lons[7]])
    points.push([lats[8], lons[8]])
    points.push([lats[9], lons[9]])
    points.push([lats[10], lons[10]])
    points.push([lats[11], lons[11]])
    points.push([lats[12], lons[12]])
    points.push([lats[13], lons[13]])
    points.push([lats[14], lons[14]])
    points.push([lats[15], lons[15]])
    points.push([lats[16], lons[16]])
    points.push([lats[17], lons[17]])
    points.push([lats[18], lons[18]])
    points.push([lats[19], lons[19]])
    points.push([lats[20], lons[20]])
    points.push([lats[21], lons[21]])
    points.push([lats[22], lons[22]])
    points.push([lats[23], lons[23]])
    points.push([lats[24], lons[24]])
    points.push([lats[25], lons[25]])
    points.push([lats[26], lons[26]])
    points.push([lats[27], lons[27]])
    points.push([lats[29], lons[28]])
    points.push([lats[29], lons[29]])


    return points.map((x) => new google.maps.LatLng(x[0], x[1]));
}
