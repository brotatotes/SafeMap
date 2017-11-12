var sliderText =
[ "I don't require any assistance",
  "I may need assistance in the next 24 hours",
  "I require assistance in the next 12 hours",
  "I require assistance in the next 6 hours",
  "I require assistance in the next 2 hours",
  "I require immediate assistance"
]


function updateSlider(value) {
    var slider = document.getElementById("steplist");
    var sliderTip = document.getElementById("sliderTip");
    sliderTip.innerHTML = sliderText[value];
}


function toastNotification() {
    var x = document.getElementById("snackbar")
    x.className = "show";
    setTimeout(function(){
        x.className = x.className.replace("show", "");
        window.location.href = "home.html";
    }, 2000);
}
