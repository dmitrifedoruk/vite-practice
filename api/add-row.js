import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {

        const size = request.query.size;
        const roast = request.query.roast;

        if (!size || !roast) throw new Error('Info required');
        await sql`INSERT INTO Coffee (Size, Roast) VALUES (${size}, ${roast});`;
    } catch (error) {
        return response.status(500).json({ error });
    }

    const pets = await sql`SELECT * FROM Coffee;`;
    return response.status(200).json({ coffee });
}