//Vraag toestemming om locatie en print uit 


//API KEY: 8d8ae780c690c3afc002ee7aef0ffece

var x = document.getElementById("naamStad");




var currentPosition = (function() {

    if (document.readyState === "interactive" || "complete") {

        navigator.geolocation.getCurrentPosition(function(position) {
            x.innerHTML= "Latitude: " +position.coords.latitude + "<br> Longtitude:  " + position.coords.longitude;
        })

    } else {
        console.log("hij doet het niet");
    }
})();



//var lon = Math.floor(position.coords.longitude);
//var lat = Math.floor(position.coords.latitude);



//// haal info binnen van API



fetch('http://api.openweathermap.org/data/2.5/weather?lat=51.2172221&lon=4.430070199999999&appid=8d8ae780c690c3afc002ee7aef0ffece').then(function(res){
    return res.json();
}).then(function(json){
    
    var tempFahr= json.main.temp;
    console.log(json);
    console.log(json.name);
    
});








