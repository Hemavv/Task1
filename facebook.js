//Getting API Key//
var weather = new XMLHttpRequest();
weather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=Bangalore&APPID=9255cdccfab1422f15ed5016615fc92b&units=metric", false);
weather.send(null);
var r = JSON.parse(weather.response);
var weather = r.name;
var temp = r.main.temp + "&#8451;";
var wind = "Wind:" + r.wind.deg + "km/h" + "\n";
var humid = "Humidity:" + r.main.humidity + "&#37";
var lat = "Latitude:" + r.coord.lat + "&deg";
var log = "Longitude:" + r.coord.lon + "&deg";
document.getElementById("weather").innerHTML = weather;
document.getElementById("temp").innerHTML = temp;
document.getElementById("wind").innerHTML = wind;
document.getElementById("humid").innerHTML = humid;
document.getElementById("lat").innerHTML = lat;
document.getElementById("log").innerHTML = log;

//Validations for FirstName//
function checkforfirstname() {
    var see = new Array();
    var a = document.getElementById("firstname").value;
    if (a == "") {
        document.getElementById('username').innerHTML = "Field Empty";
    } else if ((a.length < 8) || (a.length > 26)) {

        document.getElementById('username').innerHTML = "Name should have min 8 characters and max 26 characters";
        return false;
    } else if (!isNaN(a)) {

        document.getElementById('username').innerHTML = "Only characters are allowed ";

    } else {
        document.getElementById('username').innerHTML = "";
    }
}
//Validations for LastName//
/* function checkforlastname() {
    var a = document.getElementById("lastname").value;
    if (a == "") {
        document.getElementById('username1').innerHTML = "";
    } else if ((a.length < 8) || (a.length > 26)) {
        document.getElementById('username1').innerHTML = "Name should have min 8 characters and max 26 characters";
        return false;
    } else if (!isNaN(a)) {
        document.getElementById('username1').innerHTML = "Only characters are allowed ";
    } else {
        document.getElementById('username1').innerHTML = "";
    }
} */

//Email and Confirm Email Validation//
function confirmmail() {
    var a = document.getElementById("email").value;
    var b = document.getElementById("crosscheck").value;
    if (b == "") {
        document.getElementById("con").innerHTML = "";
    } else if (a != b) {
        document.getElementById("con").innerHTML = "Email MisMatch";
    } else {
        document.getElementById("con").innerHTML = "";
    }
}
//Email Validation//
function validateemail() {
    var a = document.getElementById("email").value;
    if (a == "") {
        document.getElementById('mails').innerHTML = "";
    } else if (a.indexOf('@') <= 0) {
        document.getElementById("mails").innerHTML = "Invalid email id";
    } else if ((a.charAt(a.length - 4) != '.') && (a.charAt(a.length - 3) != '.')) {

        document.getElementById("mails").innerHTML = "Give Proper format";
    } else {
        document.getElementById('mails').innerHTML = "";
    }
}
//Phone number Validation//
function phonenumber() {
    var a = document.getElementById("Phoneno").value;
    if (a == "") {
        document.getElementById('phones').innerHTML = "";
        return false;
    } else if (a.length != 10) {
        document.getElementById('phones').innerHTML = "Enter  10 Digits";
        return false;
    } else if ((a.charAt(0) != 9) && (a.charAt(0) != 8) && (a.charAt(0) != 7)) {
        document.getElementById('phones').innerHTML = "Input digits starting from 7,8 or 9";
        return false;
    } else {
        document.getElementById('phones').innerHTML = "Success";
        return false;
    }
}