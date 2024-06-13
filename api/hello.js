export async function GET(request) {

    const api_string = process.env.WORD;

    const myOptions = { status: 200, statusText: "SuperSmashingGreat!"};

    return new Response(api_string, myOptions);
}