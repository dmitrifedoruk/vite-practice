export async function GET(request) {

    const api_string = {
        data: "hamburger"
    }

    // const myOptions = { status: 200, statusText: "SuperSmashingGreat!"};

    return new Response(api_string);
}