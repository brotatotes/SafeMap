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
            if (pinPopups[i]) {
                pinPopups[i].close();
            }
        }
    }
}

function getText(i) {
    return '<div>' + pinNames[i] + " experiencing " + pinCrises[i] + " at " + pinAddrs[i] + ":<br/>" + pinDescs[i] + '</div>';
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

    pinPopups = [new google.maps.InfoWindow(), new google.maps.InfoWindow(), new google.maps.InfoWindow()];

    var marker1 = new google.maps.Marker({
        position: {lat: 42.0451, lng: -87.6877},
        map: map,
    });

    var marker2 = new google.maps.Marker({
        position: {lat: 42.03, lng: -87.7},
        map: map,
    });

    var marker3 = new google.maps.Marker({
        position: {lat: 42.028, lng: -87.707},
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
  }

/**
 * @fileoverview This demo is used for MarkerClusterer. It will show 100 markers
 * using MarkerClusterer and count the time to show the difference between using
 * MarkerClusterer and without MarkerClusterer.
 * @author Luke Mahe (v2 author: Xiaoxi Wu)
 */

function $(element) {
  return document.getElementById(element);
}

var speedTest = {};

speedTest.pics = null;
speedTest.map = null;
speedTest.markerClusterer = null;
speedTest.markers = [];
speedTest.infoWindow = null;

speedTest.init = function() {
  var latlng = new google.maps.LatLng(42.045597,1-88.688568);
  var options = {
    'zoom': 8,
    'center': latlng,
    'mapTypeId': google.maps.MapTypeId.ROADMAP
  };

  speedTest.map = new google.maps.Map($('map'), options);
  speedTest.pics = data.photos;

  var useGmm = document.getElementById('usegmm');
  google.maps.event.addDomListener(useGmm, 'click', speedTest.change);

  var numMarkers = document.getElementById('nummarkers');
  google.maps.event.addDomListener(numMarkers, 'change', speedTest.change);

  speedTest.infoWindow = new google.maps.InfoWindow();

  speedTest.showMarkers();
};

speedTest.showMarkers = function() {
  speedTest.markers = [];

  var type = 1;
  if ($('usegmm').checked) {
    type = 0;
  }

  if (speedTest.markerClusterer) {
    speedTest.markerClusterer.clearMarkers();
  }

  var panel = $('markerlist');
  panel.innerHTML = '';
  var numMarkers = $('nummarkers').value;

  for (var i = 0; i < numMarkers; i++) {
    var titleText = speedTest.pics[i].photo_title;
    if (titleText == '') {
      titleText = 'No title';
    }

    var item = document.createElement('DIV');
    var title = document.createElement('A');
    title.href = '#';
    title.className = 'title';
    title.innerHTML = titleText;

    item.appendChild(title);
    panel.appendChild(item);


    var latLng = new google.maps.LatLng(speedTest.pics[i].latitude,
        speedTest.pics[i].longitude);

    var imageUrl = 'http://chart.apis.google.com/chart?cht=mm&chs=24x32&chco=' +
        'FFFFFF,008CFF,000000&ext=.png';
    var markerImage = new google.maps.MarkerImage(imageUrl,
        new google.maps.Size(24, 32));

    var marker = new google.maps.Marker({
      'position': latLng,
      'icon': markerImage
    });

    var fn = speedTest.markerClickFunction(speedTest.pics[i], latLng);
    google.maps.event.addListener(marker, 'click', fn);
    google.maps.event.addDomListener(title, 'click', fn);
    speedTest.markers.push(marker);
  }

  window.setTimeout(speedTest.time, 0);
};

speedTest.markerClickFunction = function(pic, latlng) {
  return function(e) {
    e.cancelBubble = true;
    e.returnValue = false;
    if (e.stopPropagation) {
      e.stopPropagation();
      e.preventDefault();
    }
    var title = pic.photo_title;
    var url = pic.photo_url;
    var fileurl = pic.photo_file_url;

    var infoHtml = '<div class="info"><h3>' + title +
      '</h3><div class="info-body">' +
      '<a href="' + url + '" target="_blank"><img src="' +
      fileurl + '" class="info-img"/></a></div>' +
      '<a href="http://www.panoramio.com/" target="_blank">' +
      '<img src="http://maps.google.com/intl/en_ALL/mapfiles/' +
      'iw_panoramio.png"/></a><br/>' +
      '<a href="' + pic.owner_url + '" target="_blank">' + pic.owner_name +
      '</a></div></div>';

    speedTest.infoWindow.setContent(infoHtml);
    speedTest.infoWindow.setPosition(latlng);
    speedTest.infoWindow.open(speedTest.map);
  };
};

speedTest.clear = function() {
  $('timetaken').innerHTML = 'cleaning...';
  for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
    marker.setMap(null);
  }
};

speedTest.change = function() {
  speedTest.clear();
  speedTest.showMarkers();
};

speedTest.time = function() {
  $('timetaken').innerHTML = 'timing...';
  var start = new Date();
  if ($('usegmm').checked) {
    speedTest.markerClusterer = new MarkerClusterer(speedTest.map, speedTest.markers);
  } else {
    for (var i = 0, marker; marker = speedTest.markers[i]; i++) {
      marker.setMap(speedTest.map);
    }
  }

  var end = new Date();
  $('timetaken').innerHTML = end - start;
};
