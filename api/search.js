import { sql } from '@vercel/postgres';

export default async function handler(request, response) {
    try {

        const banana = request.query.banana;

        if (!banana) throw new Error('Info required');
        const coffee = await sql`SELECT * FROM Coffee WHERE Banana=${banana};`;
        return response.status(200).json({ coffee });
    } catch (error) {
        return response.status(500).json({ error });
    }

}