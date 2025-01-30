import { updateRates } from './services/updateRates';

console.log('✅ Система обновления курсов запущена...');

setInterval(async () => {
    console.log('⏳ Запрос новых курсов...');
    await updateRates();
}, 60 * 1000); // Каждые 30 секунд
