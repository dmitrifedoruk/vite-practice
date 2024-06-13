export async function GET(request) {

    const api_string = {
        data: process.env.WORD
    }

    const myOptions = { status: 200, statusText: "SuperSmashingGreat!"};

    return new Response(JSON.stringify(api_string), myOptions);
}