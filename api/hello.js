export function GET(request) {

    const api_string = {
        data: process.env.WORD
    }

    // const myOptions = { status: 200, statusText: "SuperSmashingGreat!"};

    const response = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${api_string}`);

    let data = "";

    data = response;

    return new Response(JSON.stringify(response));
}