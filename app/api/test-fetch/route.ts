import { NextResponse } from 'next/server';
import axios from 'axios';

const TEST_URL_PAGE_1 =
    'https://www.coinbase.com/graphql/query?&operationName=ExploreQuery&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%220eb61ba28c6cab187ff457f8a78b864af3dff46b401f4975c2a1331ca96fc4e5%22%7D%7D&variables=%7B%22currency%22%3A%22RUB%22%2C%22btcUUID%22%3A%225b71fc48-3dd3-540c-809b-f8c94d0e68b5%22%2C%22ethUUID%22%3A%22d85dce9b-5b73-5c3c-8978-522ce1d1c1b4%22%2C%22country%22%3A%22US%22%2C%22countryCode%22%3A%22US%22%2C%22supportedLocale%22%3A%22ru%22%2C%22filter%22%3A%22ALL%22%2C%22limit%22%3A50%2C%22order%22%3A%22ASC%22%2C%22resolution%22%3A%22DAY%22%2C%22sort%22%3A%22RANK%22%2C%22page%22%3A1%2C%22skipSparklines%22%3Afalse%2C%22selectedHourPrices%22%3Afalse%2C%22selectedDayPrices%22%3Atrue%2C%22selectedWeekPrices%22%3Afalse%2C%22selectedMonthPrices%22%3Afalse%2C%22selectedYearPrices%22%3Afalse%7D';

const TEST_URL_PAGE_2 =
    'https://www.coinbase.com/graphql/query?&operationName=PricesV2Query&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%229514fab7d40b386c7c3366d93502d397e3978d06e418dbca6458c7198f36fae2%22%7D%7D&variables=%7B%22currency%22%3A%22RUB%22%2C%22supportedLocale%22%3A%22ru%22%2C%22killMarketHealth%22%3Afalse%2C%22assetQuery%22%3A%22%22%2C%22country%22%3A%22US%22%2C%22countryCode%22%3A%22US%22%2C%22filter%22%3A%22ALL%22%2C%22limit%22%3A30%2C%22order%22%3A%22ASC%22%2C%22resolution%22%3A%22DAY%22%2C%22sort%22%3A%22RANK%22%2C%22page%22%3A2%2C%22skipCharts%22%3Afalse%2C%22selectedHourPrices%22%3Afalse%2C%22selectedDayPrices%22%3Atrue%2C%22selectedWeekPrices%22%3Afalse%2C%22selectedMonthPrices%22%3Afalse%2C%22selectedYearPrices%22%3Afalse%7D';

export async function GET() {
    try {
        console.log('--- Выполняем запросы к Coinbase через axios ---');

        // Запросы к обеим страницам
        const [responsePage1, responsePage2] = await Promise.all([
            axios.get(TEST_URL_PAGE_1, {
                headers: {
                    'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }),
            axios.get(TEST_URL_PAGE_2, {
                headers: {
                    'User-Agent':
                        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            }),
        ]);

        // Извлечение данных из обеих страниц
        const dataPage1 = responsePage1.data?.data?.genericSearchAssets?.edges || [];
        const dataPage2 = responsePage2.data?.data?.genericSearchAssets?.edges || [];

        // Объединение данных
        const allAssets = [...dataPage1, ...dataPage2];

        console.log('allAssets', allAssets)

        // Нужные символы валют
        const targetSymbols = ['BTC', 'LTC', 'XMR', 'USDT'];

        // Фильтрация и обработка данных
        const filteredAssets = allAssets
            .map((item: any) => item.node)
            .filter((node: any) => targetSymbols.includes(node.symbol))
            .map((node: any) => ({
                symbol: node.symbol,
                name: node.name,
                price: node.latestPrice?.price,
                currency: node.latestPrice?.quoteCurrency,
            }));

        console.log('--- Отфильтрованные данные ---');
        console.log(filteredAssets);

        // Возвращаем отфильтрованные данные
        return NextResponse.json(filteredAssets, { status: 200 });
    } catch (error: any) {
        console.error('Ошибка при выполнении запроса:', error.message);

        // Возвращаем ошибку клиенту
        return NextResponse.json(
            { error: 'Не удалось получить данные от Coinbase', details: error.message },
            { status: 500 }
        );
    }
}
