
// wait for html to load before running init:
window.onload = init;

function init() {
    var l = document.getElementById("list");
    list.innerHTML = "";
    list.innerHTML += '<ul>';

    for (var i = 0; i < n; i++) {
        list.innerHTML += li(getText(i));
    }

    list.innerHTML += '</ul>';
}

function updateList(results) {
    var l = document.getElementById("list");
    list.innerHTML = "";
    list.innerHTML += '<ul>';

    results.forEach(i => {
        list.innerHTML += li(getText(i));
    });

    list.innerHTML += '</ul>';
}

function li(text) {
    return '<div class="listitembox"><li class="listitem">' + text + '</li></div>';
}

function searchList() {
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

    updateList(results);

}
