let amb_lat = 35.9561055;
let amb_lon = -83.9268597;
let good_lat = 35.956142;
let good_long = -83.926859;
let r2 = (good_lat - amb_lat) ** 2 + (good_long - amb_lon) ** 2;

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(testPosition, showError);
  } else {
    let x = document.getElementById("demo");
    x.innerHTML = "I can't say 🙊";
  }
}

function showPosition(position) {
  let x = document.getElementById("demo");
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function testPosition(pos, allowed = r2) {
  let x = document.getElementById("demo");
  if (((pos.coords.latitude - amb_lat) ** 2 + (pos.coords.longitude - amb_lon) ** 2) < allowed * 2) {
    x.innerHTML = "Yes";
    document.getElementById("body").style["background-color"] = "green";
  } else {
    x.innerHTML = "No";
    document.getElementById("body").style["background-color"] = "red";
  }
}

function showError(error) {
  let x = document.getElementById("demo");
  x.innerHTML = "I can't say 🙊";
}
