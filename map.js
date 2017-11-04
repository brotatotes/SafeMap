var pinNames = ["Joe Shmoe", "Bob Smith", "Lucy Goosey"]
var pinAddrs = ["1117 Foster Street", "992 Main Street", "1234 Pine Dr."]
var pinDescs = ["My arm got cut under a falling branch.", "My dog ran away after the accident. My leg is broken too.", "My house is on fire. Need help now."]
var pinCrises = ["Earthquake", "Earthquake", "Fire"]
var pins = [] // initialize pins (HTML elements)
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

        results.forEach((i) => {
            // do something with pins in HTML
            console.log(pinNames[i] + " experiencing " + pinCrises[i] + " at " + pinAddrs[i] + ":");
            console.log(pinDescs[i]);
            console.log("\n");
        })
    }
}
