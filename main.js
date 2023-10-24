import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    
    <div class="card">
      <label for="textInput">A word, please:&nbsp;</label>
      <input id="wordInput" />
      <button id="wordButton" type="submit">Submit</button>
    </div>
    
    
    <p id="demo">Fetch a file to change this text.</p>
  </div>
`





// async function getText(file) {
//     let myObject = await fetch(file);
//     let myText = await myObject.text();
//     document.getElementById("demo").innerHTML = myText;
// }
//
// getText("fetch_info.txt").then();

const lat = 39.5839498;
const lon = -77.045579;
const key = "0dbdaf1b523dd3671daa3bc385773929";

//saved data for debugging to reduce api calls
//const api_url = "public/sample_101723_2030.json";
//const api_url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${key}`;

//const api_url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/39.5839498%2C-77.045579?unitGroup=us&key=VVCSRQSK44Z6RCJPELNYULFZ6&contentType=json";






//const api_url = "https://api.dictionaryapi.dev/api/v2/entries/en/hamburger";


//template for api calls
// async function getUser() {
//
//     // Making an API call (request)
//     // and getting the response back
//     const response = await fetch(api_url);
//
//     // Parsing it to JSON format
//     const data = await response.json();
//     //console.log(data['current']['temp']);
//     console.log(data[0]["word"]);
//
//     //const fahrenheit = ((data['current']['temp'] - 273.15) * 1.8) + 32;
//
//     //document.getElementById("demo").innerHTML = fahrenheit.toFixed(1).toLocaleString() + "&#176;F";
//
//     document.getElementById("demo").innerHTML = data[0]["meanings"][0]["definitions"][0]["definition"];
//
// }

let length = 1;


async function getUser() {

    const input = document.getElementById("wordInput").value;

    const api_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

    // Making an API call (request)
    // and getting the response back
    const response = await fetch(api_url);

    // Parsing it to JSON format
    const data = await response.json();
    //console.log(data['current']['temp']);
    length = data[0]["meanings"][0]["definitions"].length;

    setupCounter(document.querySelector('#counter'),length);

    console.log(document.getElementById("amount").innerHTML);

    document.getElementById("counter").addEventListener("click", function() {
        let count = parseInt(document.getElementById("amount").innerHTML);
        document.getElementById("demo").innerHTML = data[0]["meanings"][0]["definitions"][count-1]["definition"];
    }, false);



    //const fahrenheit = ((data['current']['temp'] - 273.15) * 1.8) + 32;

    //document.getElementById("demo").innerHTML = fahrenheit.toFixed(1).toLocaleString() + "&#176;F";

    document.getElementById("demo").innerHTML = data[0]["meanings"][0]["definitions"][0]["definition"];

}

document.getElementById("wordButton").addEventListener("click", getUser, false);

document.getElementById("wordInput").addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("wordButton").click();
    }
});

document.getElementById("wordButton").addEventListener("click", getUser, false);

console.log(length);


setupCounter(document.querySelector('#counter'),length);


// Calling the function
//getUser();










