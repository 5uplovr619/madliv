document.getElementById("btn").addEventListener("click", madlib);

function madlib() {

    let place = document.getElementById("place").value;
    let weather = document.getElementById("weather").value;
    let name = document.getElementById("friend").value;
    let verb = document.getElementById("action").value;
    let time = document.getElementById("tod").value;

    let libby = `today i went to ${place} and the weather was so ${weather} and while i was at ${place} i saw my good friend ${name} and we started to ${verb} all the way until ${time}`
    document.getElementById("madlib").innerHTML = libby;
}