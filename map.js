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
    return pinNames[i] + " experiencing " + pinCrises[i] + " at " + pinAddrs[i] + ":<br/>" + pinDescs[i];
}

var citymap = {
  chicago: {
    center: {lat: 41.878, lng: -87.629},
    population: 2714856
  },
  newyork: {
    center: {lat: 40.714, lng: -74.005},
    population: 8405837
  },
  losangeles: {
    center: {lat: 34.052, lng: -118.243},
    population: 3857799
  },
  vancouver: {
    center: {lat: 49.25, lng: -123.1},
    population: 603502
  }
};

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

    pins = [marker1, marker2, marker3];

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
    points.push([42.028, -87.702])
    points.push([42.032, -87.705])
    points.push([42.0451, -87.6877])
	points.push([42.018, -87.602])
    points.push([42.012, -87.505])
    points.push([42.0351, -87.6577])
    return points.map((x) => new google.maps.LatLng(x[0], x[1]));
}
