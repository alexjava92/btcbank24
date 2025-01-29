import pg from 'pg';
import 'dotenv/config'; // Загружаем переменные окружения

const { Pool } = pg;

// Логируем переменные для проверки
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", typeof process.env.DB_PASSWORD, process.env.DB_PASSWORD ? "✅ Загружен" : "❌ НЕ загружен");
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PORT:", process.env.DB_PORT);

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
});

export const query = async (text: string, params?: any[]) => {
    const client = await pool.connect();
    try {
        const result = await client.query(text, params);
        return result;
    } catch (error) {
        console.error('Database query error:', error);
        throw error;
    } finally {
        client.release();
    }
};

export { pool };
