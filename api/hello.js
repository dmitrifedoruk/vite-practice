export async function GET(request) {


    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${process.env.WORD}`);

    return new Response(JSON.stringify(response));
}