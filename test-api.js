import axios from 'axios';

const TEST_URL = 'https://www.coinbase.com/graphql/query?&operationName=PricesV2Query&extensions=%7B%22persistedQuery%22%3A%7B%22version%22%3A1%2C%22sha256Hash%22%3A%229514fab7d40b386c7c3366d93502d397e3978d06e418dbca6458c7198f36fae2%22%7D%7D&variables=%7B%22currency%22%3A%22RUB%22%2C%22supportedLocale%22%3A%22ru%22%2C%22killMarketHealth%22%3Afalse%2C%22assetQuery%22%3A%22%22%2C%22country%22%3A%22US%22%2C%22countryCode%22%3A%22US%22%2C%22filter%22%3A%22ALL%22%2C%22limit%22%3A30%2C%22order%22%3A%22ASC%22%2C%22resolution%22%3A%22DAY%22%2C%22sort%22%3A%22RANK%22%2C%22page%22%3A1%2C%22skipCharts%22%3Afalse%2C%22selectedHourPrices%22%3Afalse%2C%22selectedDayPrices%22%3Atrue%2C%22selectedWeekPrices%22%3Afalse%2C%22selectedMonthPrices%22%3Afalse%2C%22selectedYearPrices%22%3Afalse%7D';

const fetchCoinbaseData = async () => {
    try {
        console.log('--- Выполняем запрос к Coinbase ---');
        const response = await axios.get(TEST_URL);

        console.log('--- Ответ от Coinbase ---');
        console.log(JSON.stringify(response.data, null, 2)); // Форматированный вывод ответа
    } catch (error) {
        console.error('Ошибка при выполнении запроса:', error.message);
    }
};

fetchCoinbaseData();
