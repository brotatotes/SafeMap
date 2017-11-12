var pinNames = [
"Alex Friedman", 
"Karen Hsu", 
"Eric Hao", 
"Suman Maroju", 
"Barack Obama", 
"Donald Trump", 
"George Bush", 
"George Washington", 
"Ronald Raegan", 
"Teddy Roosevelt", 
"James Carter", 
"Thomas Jefferson", 
"Andrew Jackson", 
"Abe Lincoln", 
"John Kennedy"
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
"8765 Birch Lane"];

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
"is safe"
];

var pins = []; // initialize pins (HTML elements)
var pinPopups = [];
var n = pinNames.length;
console.log(n);
var lats = [42.028, 42.033, 42.0451, 42.0441, 42.038, 42.038, 42.032, 42.035, 42.039, 42.025, 42.027, 42.033, 42.040, 42.032, 42.035];
var lons = [-87.702, -87.705, -87.687, -87.677, -87.692, -87.695, -87.691, -87.681, -87.691, -87.699, -87.709, -87.695, -87.700, -87.682, -87.700];

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
            console.log(results.length + " result found!\n\n");
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

    // pins
    for (var i=0; i < n; i++) {
        pinPopups.push(new google.maps.InfoWindow())
    };

    var marker1 = new google.maps.Marker({
        position: {lat: lats[0], lng: lons[0]},
        map: map,
    });
    var marker2 = new google.maps.Marker({
        position: {lat: lats[1], lng: lons[1]},
        map: map,
    });
    var marker3 = new google.maps.Marker({
        position: {lat: lats[2], lng: lons[2]},
        map: map,
    });
    var marker4 = new google.maps.Marker({
        position: {lat: lats[3], lng: lons[3]},
        map: map,
    });
    var marker5 = new google.maps.Marker({
        position: {lat: lats[4], lng: lons[4]},
        map: map,
    });
    var marker6 = new google.maps.Marker({
        position: {lat: lats[5], lng: lons[5]},
        map: map,
    });
    var marker7 = new google.maps.Marker({
        position: {lat: lats[6], lng: lons[6]},
        map: map,
    });
    var marker8 = new google.maps.Marker({
        position: {lat: lats[7], lng: lons[7]},
        map: map,
    });
    var marker9 = new google.maps.Marker({
        position: {lat: lats[8], lng: lons[8]},
        map: map,
    });
    var marker10 = new google.maps.Marker({
        position: {lat: lats[9], lng: lons[9]},
        map: map,
    });
    var marker11 = new google.maps.Marker({
        position: {lat: lats[10], lng: lons[10]},
        map: map,
    });
    var marker12 = new google.maps.Marker({
        position: {lat: lats[11], lng: lons[11]},
        map: map,
    });
    var marker13 = new google.maps.Marker({
        position: {lat: lats[12], lng: lons[12]},
        map: map,
    });
    var marker14 = new google.maps.Marker({
        position: {lat: lats[13], lng: lons[13]},
        map: map,
    });
    var marker15 = new google.maps.Marker({
        position: {lat: lats[14], lng: lons[14]},
        map: map,
    });
    
    pins = [marker1, marker2, marker3, marker4, marker5, marker6, marker7, marker8, marker9, marker10, marker11, marker12, marker13, marker14, marker15];

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


    return points.map((x) => new google.maps.LatLng(x[0], x[1]));
}