import { sql } from '@vercel/postgres';
import {VercelRequest} from "@vercel/node";
import {VercelResponse} from "@vercel/node";

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    try {
        const result =
            await sql`CREATE TABLE Pets ( Name varchar(255), Owner varchar(255) );`;
        return response.status(200).json({ result });
    } catch (error) {
        return response.status(500).json({ error });
    }
}