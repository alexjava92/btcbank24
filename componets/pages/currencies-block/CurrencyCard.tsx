import React from 'react';
import styles from './CurrenciesBlock.module.css';
import { formatNumber } from '@/app/utils/format-number/formatNumber';

interface CurrencyCardProps {
    name: string;
    rate?: string;
}

const ICONS: Record<string, string> = {
    BTC: '/icons/btc.svg',
    LTC: '/icons/ltc.svg',
    XMR: '/icons/xmr.svg',
    USDT: '/icons/usdt.svg',
    RUB: '/icons/rub.svg'
};

const CURRENCY_NAMES: Record<string, string> = {
    BTC: 'Bitcoin',
    LTC: 'Litecoin',
    XMR: 'Monero',
    USDT: 'Tether',
    RUB: 'Ruble'
};

const CURRENCY_DESCRIPTIONS: Record<string, string> = {
    BTC: 'Золото цифрового мира.',
    LTC: 'Быстрый и лёгкий, как утренний ветер.',
    XMR: 'Ваш невидимый плащ в криптомире.',
    USDT: 'Стабильный и надёжный, как ваш внутренний дзен.',
    RUB: 'Привычный рубль, который готов к трансформации.'
};

const CurrencyCard: React.FC<CurrencyCardProps> = ({ name, rate }) => (
    <div className={styles.currencyCard}>
        <img src={ICONS[name]} alt={CURRENCY_NAMES[name]} className={styles.icon} />
        <h3 className={styles.cardTitle}>{name} ({CURRENCY_NAMES[name]})</h3>
        <p className={styles.cardDescription}>{CURRENCY_DESCRIPTIONS[name]}</p>
        <p className={styles.currencyRate}>
            {rate ? `${formatNumber(rate)}` : '—'}
        </p>
    </div>
);

export default CurrencyCard;
