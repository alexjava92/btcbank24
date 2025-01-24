import { query } from '../db';

// Получение всех записей
export const getAllCryptos = async () => {
    const result = await query('SELECT * FROM cryptocurrencies');
    return result.rows;
};

// Добавление новой криптовалюты
export const addCrypto = async (name: string, rate: number, symbol: string) => {
    const result = await query(
        'INSERT INTO cryptocurrencies (name, rate, symbol) VALUES ($1, $2, $3) RETURNING *',
        [name, rate, symbol]
    );
    return result.rows[0];
};

// Обновление курса криптовалюты
export const updateCryptoRate = async (id: number, rate: number) => {
    const result = await query(
        'UPDATE cryptocurrencies SET rate = $1 WHERE id = $2 RETURNING *',
        [rate, id]
    );
    return result.rows[0];
};

// Удаление криптовалюты
export const deleteCrypto = async (id: number) => {
    const result = await query('DELETE FROM cryptocurrencies WHERE id = $1', [id]);
    return result.rowCount;
};

export const cryptoQueries = {
    getAllCryptos,
    addCrypto,
    updateCryptoRate,
    deleteCrypto,
};