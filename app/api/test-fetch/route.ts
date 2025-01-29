import { NextResponse } from 'next/server';
import axios from 'axios';

const BASE_URL = 'https://www.coinbase.com/api/v2/assets/prices/';
const TARGET_CURRENCIES = ['bitcoin', 'litecoin', 'monero', 'tether'];

export async function GET() {
    try {
        console.log('--- Запрос данных о курсах валют с Coinbase ---');

        // Выполняем запросы к API для каждой валюты
        const responses = await Promise.all(
            TARGET_CURRENCIES.map(currency =>
                axios.get(`${BASE_URL}${currency}?base=RUB`, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0',
                        'Accept': 'application/json',
                    },
                })
            )
        );

        // Формируем массив курсов валют
        const rates = responses.map(response => {
            const data = response.data?.data;
            const price = parseFloat(data.prices.latest).toFixed(2); // Округляем до 2 знаков

            return {
                symbol: data.base, // Берем символ валюты из "base"
                price, // Округленный курс
                currency: data.currency, // RUB
            };
        });

        console.log('--- Отфильтрованные данные ---', rates);

        return NextResponse.json(rates, { status: 200 });
    } catch (error: any) {
        console.error('Ошибка при получении курсов:', error.message);

        return NextResponse.json(
            { error: 'Не удалось получить курсы валют', details: error.message },
            { status: 500 }
        );
    }
}
