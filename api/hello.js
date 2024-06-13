export async function GET(request) {


    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${process.env.WORD}`);

    let data = "";

    data = await response;

    const definition = await data[0]["meanings"][0]["definitions"][0]["definition"];



    return new Response(definition);
}