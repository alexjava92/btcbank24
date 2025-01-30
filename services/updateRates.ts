import { fetchRates } from './fetchRates';
import {cryptoQueries} from "@lib/queries/crypto";


export async function updateRates() {
    try {
        const rates = await fetchRates();
        console.log('Обновляем курсы в базе данных...');

        for (const rate of rates) {
            try {
                await cryptoQueries.addCrypto(rate.symbol, parseFloat(rate.price), rate.currency);
                console.log(`✅ Курс ${rate.symbol} обновлён: ${rate.price} RUB`);
            } catch (error: any) {
                console.error(`❌ Ошибка при обновлении ${rate.symbol}: ${error.message}`);
            }
        }

        console.log('✅ Курсы успешно обновлены в БД');
    } catch (error) {
        console.error('❌ Ошибка при обновлении курсов:', error);
    }
}
