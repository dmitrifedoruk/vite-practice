export async function GET(request) {




    return new Response(`https://api.dictionaryapi.dev/api/v2/entries/en/${process.env.WORD}`);
}