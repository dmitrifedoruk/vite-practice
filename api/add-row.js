import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {

        const banana = request.query.banana;
        const roast = request.query.roast;

        if (!banana || !roast) throw new Error('Info required');
        await sql`INSERT INTO Coffee (Banana, Roast) VALUES (${banana}, ${roast});`;
    } catch (error) {
        return response.status(500).json({ error });
    }

    const coffee = await sql`SELECT * FROM Coffee;`;
    return response.status(200).json({ coffee });
}