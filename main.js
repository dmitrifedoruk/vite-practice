import './style.css'
import bottleLogo from '/message-in-a-bottle.svg'
import dragonLogo from '/dragon1.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <img src="${dragonLogo}" class="logo" alt="dragon logo" />
<!--    <h1>Hello!</h1>-->
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    
    <div class="card">
      <label for="textInput">A word, please:&nbsp;</label>
      <input id="wordInput" />
      <button id="wordButton" type="submit">Submit</button>
    </div>

<!--      <form action="/api/hello" method="POST">-->
<!--        <label for="query">Search</label>-->
<!--        <input type="text" id="query" name="query" />-->
<!--        <button>Submit</button>-->
<!--      </form>-->
    
    
    <p id="demo" class="fade-in-text"></p>
    <p id="demo1"></p>
    <p id="demo2"></p>
  </div>
`




let length = 1;

let data = "";


async function getData(input) {

    const api_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

    const response = await fetch(api_url);

    let data = "";

    data = await response.json();

    return data;

}

data = getData("artifice").then();

console.log(data);




async function getUser() {

    const input = document.getElementById("wordInput").value;

    // Parsing it to JSON format
    const data = await getData(input);

    length = data[0]["meanings"][0]["definitions"].length;

    setupCounter(document.querySelector('#counter'),length);


    document.getElementById("counter").addEventListener("click", function() {
        let count = parseInt(document.getElementById("amount").innerHTML);

        const definition = data[0]["meanings"][0]["definitions"][count-1];
        document.getElementById("demo").innerHTML = definition["definition"];

        if(definition.hasOwnProperty('example'))
        {
            document.getElementById("demo2").innerHTML = '"'+definition["example"]+'"';
        }
        else{
            document.getElementById("demo2").innerHTML = '';
        }

        //document.getElementById("demo").innerHTML = data[0]["meanings"][0]["definitions"][count-1]["definition"];
    }, false);

    const definition = await data[0]["meanings"][0]["definitions"][0];
    document.getElementById("demo").innerHTML = definition["definition"];

    if(definition.hasOwnProperty('example'))
    {
        document.getElementById("demo2").innerHTML = '"'+definition["example"]+'"';
    }
    else{
        document.getElementById("demo2").innerHTML = '';
    }


}








document.getElementById("wordInput").addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("wordButton").click();
    }
});

document.getElementById("wordButton").addEventListener("click", submitLocation, false);


setupCounter(document.querySelector('#counter'),length);

//getData("hamburger").then();


async function getText(lat,lon) {

    // const lat = 39.5839498;
    // const lon = -77.045579;

    let myObject = await fetch(`/api/hello?lat=${lat}&lon=${lon}`);

    console.log("things are happening");

    data = await myObject.json();

    const fahrenheit = ((data['current']['temp'] - 273.15) * 1.8) + 32;

    // document.getElementById("demo").classList.toggle("fade-in-text");



    document.getElementById("demo").innerHTML = fahrenheit.toFixed(1).toLocaleString() + "&#176;F";

    const weather = data['current']['weather'][0]['description'];

    document.getElementById("demo1").innerHTML = weather;

    const date = new Date();

    document.getElementById("demo2").innerHTML = new Intl.DateTimeFormat('en-GB', {
        dateStyle: 'full',
        timeStyle: 'long',
        timeZone: data['timezone'],
    }).format(date);

    //////////////////

    // const definition = await data[0]["meanings"][0]["definitions"][0];
    // document.getElementById("demo").innerHTML = definition["definition"];

    // let myText = data["latitude"];
    // document.getElementById("demo").innerHTML = myText;
    //
    // let myText2 = data["longitude"];
    // document.getElementById("demo2").innerHTML = myText2;
}


async function submitLocation(){

    const input = document.getElementById("wordInput").value;

    const lat = input.split(',')[0];
    const lon = input.split(',')[1];

    await getText(lat,lon);

}


const lat = 39.5839498;
const lon = -77.045579;

getText(lat,lon);








