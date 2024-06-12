import './style.css'
import bottleLogo from '/message-in-a-bottle.svg'
import dragonLogo from '/dragon1.svg'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
  <img src="${dragonLogo}" class="logo" alt="dragon logo" />
    <h1>Hello!</h1>
    
    <div class="card">
      <label for="textInput">A word, please:&nbsp;</label>
      <input id="wordInput" />
      <button id="wordButton" type="submit">Submit</button>
    </div>
    

    <h2 id="heading"></h2>
    
    <div class="card" id="topCard">
<!--      <button id="counter" type="button"></button>-->

    </div>
    

    
    
    <p id="demo">Fetch a file to change this text.</p>
    
    <p id="demo2"></p>
  </div>
`




let length = 1;

let data = "";

const input = import.meta.env.API_KEY;


async function getData(input) {

    const api_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${input}`;

    const response = await fetch(api_url);

    data = await response.json();

    return data;

}

// data = getData("artifice").then();

data = getData(input).then();

console.log(data);




async function getWord() {



    const input = document.getElementById("wordInput").value;

    // document.getElementById("heading").innerHTML = input.charAt(0).toUpperCase() + input.slice(1);

    // Parsing it to JSON format
    const data = await getData(input);

    document.getElementById("heading").innerHTML = data[0]["word"];

    // length = data[0]["meanings"][0]["definitions"].length;
    length = data[0]["meanings"][0]["definitions"].length;

    // setupCounter(document.querySelector('#counter'),length);

    document.getElementById("topCard").replaceChildren();

    data[0]["meanings"].forEach((element) => {
        addElement(element);
        console.log(element["partOfSpeech"]);
    });

    //addElement(data[0]["meanings"][0]);
    // console.log(data[0]["meanings"][0]["partOfSpeech"]);

    // document.getElementById("counter").addEventListener("click", function() {
    //     let count = parseInt(document.getElementById("amount").innerHTML);
    //
    //     const definition = data[0]["meanings"][0]["definitions"][count-1];
    //     document.getElementById("demo").innerHTML = definition["definition"];
    //
    //     if(definition.hasOwnProperty('example'))
    //     {
    //         document.getElementById("demo2").innerHTML = '"'+definition["example"]+'"';
    //     }
    //     else{
    //         document.getElementById("demo2").innerHTML = '';
    //     }
    //
    //     //document.getElementById("demo").innerHTML = data[0]["meanings"][0]["definitions"][count-1]["definition"];
    // }, false);

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


function addElement(item) {
    // create a new div element
    const newDiv = document.createElement("div");

    newDiv.classList.add("meaningColumn");

    const newP = document.createElement("p");

    newP.classList.add("partOfSpeech");

    // and give it some content
    const newContent = document.createTextNode(item["partOfSpeech"]);

    // add the text node to the newly created div
    newP.appendChild(newContent);

    newDiv.appendChild(newP);

    document.getElementById("topCard").appendChild(newDiv);

    // add the newly created element and its content into the DOM
    // const currentDiv = document.getElementById("div1");
    // document.body.insertBefore(newDiv, currentDiv);
}






document.getElementById("wordButton").addEventListener("click", getWord, false);

document.getElementById("wordInput").addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("wordButton").click();
    }
});

document.getElementById("wordButton").addEventListener("click", getWord, false);


// setupCounter(document.querySelector('#counter'),length);

// getData("hamburger").then();











