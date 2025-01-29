import axios from 'axios';

const BASE_URL = 'https://www.coinbase.com/api/v2/assets/prices/';
const TARGET_CURRENCIES = ['bitcoin', 'litecoin', 'monero', 'tether'];

export async function fetchRates() {
    try {
        console.log('--- Запрос данных о курсах валют с Coinbase ---');

        // Запрашиваем курсы всех нужных валют
        const responses = await Promise.all(
            TARGET_CURRENCIES.map(currency =>
                axios.get(`${BASE_URL}${currency}?base=RUB`, {
                    headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' },
                })
            )
        );

        // Обрабатываем полученные данные
        return responses.map(response => {
            const data = response.data?.data;
            return {
                symbol: data.base, // Символ (BTC, LTC)
                price: parseFloat(data.prices.latest).toFixed(2), // Округляем до 2 знаков
                currency: data.currency, // RUB
                updatedAt: new Date().toISOString(), // Дата обновления
            };
        });
    } catch (error: any) {
        console.error('Ошибка при получении курсов:', error.message);
        throw new Error('Не удалось получить курсы валют');
    }
}
