'use client';

import React, { useEffect, useState } from 'react';
import styles from './CurrenciesBlock.module.css';
import { formatNumber } from '@/app/utils/format-number/formatNumber';
import CurrencyCard from './CurrencyCard';

interface Crypto {
    name: string;
    rate: string;
}

const CurrenciesBlock: React.FC = () => {
    const [cryptos, setCryptos] = useState<Record<string, string>>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCryptos = async () => {
            try {
                const response = await fetch('/api/cryptos');
                if (!response.ok) throw new Error('Ошибка загрузки курсов валют');

                const data: Crypto[] = await response.json();
                const rates = data.reduce((acc: Record<string, string>, crypto) => {
                    acc[crypto.name] = crypto.rate;
                    return acc;
                }, {});

                setCryptos(rates);
            } catch (err) {
                setError('Ошибка загрузки курсов валют');
            } finally {
                setLoading(false);
            }
        };
        fetchCryptos();
    }, []);

    return (
        <section className={styles.currenciesSection}>
            <h2 className={styles.currenciesTitle}>Доступные валюты</h2>
            {loading && <p>Загрузка данных...</p>}
            {error && <p className={styles.error}>{error}</p>}
            {!loading && !error && (
                <div className={styles.currenciesGrid}>
                    {['BTC', 'LTC', 'XMR', 'USDT', 'RUB'].map((currency) => (
                        <CurrencyCard key={currency} name={currency} rate={cryptos[currency]} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default CurrenciesBlock;
