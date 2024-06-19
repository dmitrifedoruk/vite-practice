export async function GET(request) {

    const myHeaders = new Headers();

    myHeaders.append("Content-Type", "text/xml");
    myHeaders.get("Content-Type"); // should return 'text/xml'

    const myOptions = { status: 200, statusText: "SuperSmashingGreat!"};


    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hamburger`);
    // let data = "";
    // data = await response.json();

    return new Response(response.then(), myOptions);
}