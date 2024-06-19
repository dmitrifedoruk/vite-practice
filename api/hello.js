export async function GET(lat,lon) {

    // const lat = 39.5839498;
    // const lon = -77.045579;

    const api_url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}`;

    const response = await fetch(api_url);

    let data = await response.json();



    // const myObject = {
    //     data : `https://api.dictionaryapi.dev/api/v2/entries/en/${process.env.WORD}`
    // }




    return new Response(JSON.stringify(data));
}