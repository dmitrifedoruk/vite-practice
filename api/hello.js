export async function GET(request) {

    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/hamburger`);
    let data = "";
    data = await response.json();

    return new Response(data);
}