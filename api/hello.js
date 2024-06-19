export async function GET(request) {

    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(result => result.json());
}