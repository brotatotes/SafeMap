var pinNames = ["Joe Shmoe", "Bob Smith", "Lucy Goosey"]
var pinAddrs = ["1117 Foster Street", "992 Main Street", "1234 Pine Dr."]
var pinDescs = ["My arm got cut under a falling branch.", "My dog ran away after the accident. My leg is broken too.", "My house is on fire. Need help now."]
var pinCrises = ["Earthquake", "Earthquake", "Fire"]
var pins = [] // initialize pins (HTML elements)
var pinPopups = [];
var n = 3

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
    return pinNames[i] + " experiencing " + pinCrises[i] + " at " + pinAddrs[i] + ":<br/>" + pinDescs[i];
}



function initMap() {
    // Create the map.
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: {lat: 42.0451, lng: -87.6877},
        mapTypeId: 'terrain'
    });

    // pins

    pinPopups = [new google.maps.InfoWindow(), new google.maps.InfoWindow(), new google.maps.InfoWindow()];

    var marker1 = new google.maps.Marker({
        position: {lat: 42.028, lng: -87.702},
        map: map,
    });

    var marker2 = new google.maps.Marker({
        position: {lat: 42.032, lng: -87.705},
        map: map,
    });

    var marker3 = new google.maps.Marker({
        position: {lat: 42.0451, lng: -87.6877},
        map: map,
    });
    var marker4 = new google.maps.Marker({
        position: {lat: 42.0441, lng: -87.6777},
        map: map,
    });




    var marker5 = new google.maps.Marker({
        position: {lat: 42.038, lng: -87.692},
        map: map,
    });

    var marker6 = new google.maps.Marker({
        position: {lat: 42.042, lng: -87.695},
        map: map,
    });

    var marker7 = new google.maps.Marker({
        position: {lat: 42.042, lng: -87.685},
        map: map,
    });
    var marker8 = new google.maps.Marker({
        position: {lat: 42.0441, lng: -87.685},
        map: map,
    });



    var marker9 = new google.maps.Marker({
        position: {lat: 42.032, lng: -87.695},
        map: map,
    });

    var marker10 = new google.maps.Marker({
        position: {lat: 42.032, lng: -87.691},
        map: map,
    });

    var marker11 = new google.maps.Marker({
        position: {lat: 42.035, lng: -87.682},
        map: map,
    });
    var marker12 = new google.maps.Marker({
        position: {lat: 42.040, lng: -87.675},
        map: map,
    });



    pins = [marker1, marker2, marker3,marker4, marker5, marker6, marker7,marker8,marker9, marker10, marker11,marker12];

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
    // for (var i = 0; i < 50; i++) {
    //     points.push(new google.maps.LatLng(42 + i/10, -87.2 + i/10));
    // }
    points.push([42.038, -87.692])
    points.push([42.042, -87.695])
    points.push([42.042, -87.685])
    points.push([42.046, -87.685])
    points.push([42.032, -87.695])
    points.push([42.032, -87.691])
    points.push([42.035, -87.682])
    points.push([42.040, -87.675])
    points.push([42.028, -87.702])
    points.push([42.032, -87.705])
    points.push([42.0451, -87.6877])
    points.push([42.0441, -87.6777])

    return points.map((x) => new google.maps.LatLng(x[0], x[1]));
}
