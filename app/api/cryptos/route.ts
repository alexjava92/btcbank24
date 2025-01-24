import { NextRequest, NextResponse } from 'next/server';
import { cryptoQueries } from '../../../lib/queries/index';

export async function GET() {
    try {
        const cryptos = await cryptoQueries.getAllCryptos();
        return NextResponse.json(cryptos, { status: 200 });
    } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
        return NextResponse.json({ error: 'Failed to fetch cryptocurrencies' }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const { name, rate, symbol } = await req.json();
        const newCrypto = await cryptoQueries.addCrypto(name, rate, symbol);
        return NextResponse.json(newCrypto, { status: 201 });
    } catch (error) {
        console.error('Error adding cryptocurrency:', error);
        return NextResponse.json({ error: 'Failed to add cryptocurrency' }, { status: 500 });
    }
}

export async function PUT(req: NextRequest) {
    try {
        const { id, rate } = await req.json();
        const updatedCrypto = await cryptoQueries.updateCryptoRate(id, rate);
        return updatedCrypto
            ? NextResponse.json(updatedCrypto, { status: 200 })
            : NextResponse.json({ error: 'Cryptocurrency not found' }, { status: 404 });
    } catch (error) {
        console.error('Error updating cryptocurrency:', error);
        return NextResponse.json({ error: 'Failed to update cryptocurrency' }, { status: 500 });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();
        const deletedCount = await cryptoQueries.deleteCrypto(id);
        return deletedCount
            ? NextResponse.json({ message: 'Cryptocurrency deleted successfully' }, { status: 200 })
            : NextResponse.json({ error: 'Cryptocurrency not found' }, { status: 404 });
    } catch (error) {
        console.error('Error deleting cryptocurrency:', error);
        return NextResponse.json({ error: 'Failed to delete cryptocurrency' }, { status: 500 });
    }
}
