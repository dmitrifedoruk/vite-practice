export async function GET(request) {

    const api_url = `https://api.dictionaryapi.dev/api/v2/entries/en/${process.env.WORD}`;

    const response = await fetch(api_url);

    let data = await response.json();



    // const myObject = {
    //     data : `https://api.dictionaryapi.dev/api/v2/entries/en/${process.env.WORD}`
    // }




    return new Response(JSON.stringify(data));
}