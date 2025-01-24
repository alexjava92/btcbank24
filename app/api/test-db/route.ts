import { NextResponse } from 'next/server';
import { cryptoQueries } from '@/lib/queries';

export async function GET() {
    try {
        console.log('--- Тест: добавление криптовалюты ---');
        const newCrypto = await cryptoQueries.addCrypto('Bitcoin', 42000, 'BTC');
        console.log('Добавлено:', newCrypto);

        console.log('--- Тест: получение всех криптовалют ---');
        const allCryptos = await cryptoQueries.getAllCryptos();
        console.log('Все записи:', allCryptos);

        console.log('--- Тест: обновление курса криптовалюты ---');
        const updatedCrypto = await cryptoQueries.updateCryptoRate(newCrypto.id, 43000);
        console.log('Обновлено:', updatedCrypto);

        console.log('--- Тест: удаление криптовалюты ---');
        const deleteResult = await cryptoQueries.deleteCrypto(newCrypto.id);
        console.log(
            deleteResult !== null && deleteResult > 0
                ? 'Удаление успешно'
                : 'Ошибка удаления'
        );

        return NextResponse.json({ message: 'Тест завершён успешно' }, { status: 200 });
    } catch (error) {
        console.error('Ошибка работы с базой данных:', error);
        return NextResponse.json({ error: 'Ошибка тестирования' }, { status: 500 });
    }
}
