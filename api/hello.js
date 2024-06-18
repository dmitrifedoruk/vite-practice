export async function GET(request) {

    const api_string = {
        data: process.env.WORD
    }

    // const myOptions = { status: 200, statusText: "SuperSmashingGreat!"};

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${api_string}`);

    let data = "";

    data = await response;

    return new Response(JSON.stringify(response));
}