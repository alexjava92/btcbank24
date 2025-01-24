import React from 'react';
import styles from './CurrenciesBlock.module.css';

const CurrenciesBlock: React.FC = () => {
    return (
        <section className={styles.currenciesSection}>
            <h2 className={styles.currenciesTitle}>Доступные валюты</h2>
            <div className={styles.currenciesGrid}>
                <div className={styles.currencyCard}>
                    <img
                        src="/icons/btc.svg"
                        alt="Bitcoin"
                        className={styles.icon}
                    />
                    <h3 className={styles.cardTitle}>BTC (Bitcoin)</h3>
                    <p className={styles.cardDescription}>Золото цифрового мира.</p>
                </div>
                <div className={styles.currencyCard}>
                    <img
                        src="/icons/ltc.svg"
                        alt="Litecoin"
                        className={styles.icon}
                    />
                    <h3 className={styles.cardTitle}>LTC (Litecoin)</h3>
                    <p className={styles.cardDescription}>Быстрый и лёгкий, как утренний ветер.</p>
                </div>
                <div className={styles.currencyCard}>
                    <img
                        src="/icons/xmr.svg"
                        alt="Monero"
                        className={styles.icon}
                    />
                    <h3 className={styles.cardTitle}>XMR (Monero)</h3>
                    <p className={styles.cardDescription}>Ваш невидимый плащ в криптомире.</p>
                </div>
                <div className={styles.currencyCard}>
                    <img
                        src="/icons/usdt.svg"
                        alt="Tether"
                        className={styles.icon}
                    />
                    <h3 className={styles.cardTitle}>USDT (Tether)</h3>
                    <p className={styles.cardDescription}>Стабильный и надёжный, как ваш внутренний дзен.</p>
                </div>
                <div className={styles.currencyCard}>
                    <img
                        src="/icons/rub.svg"
                        alt="Ruble"
                        className={styles.icon}
                    />
                    <h3 className={styles.cardTitle}>RUB</h3>
                    <p className={styles.cardDescription}>Привычный рубль, который готов к трансформации.</p>
                </div>
            </div>
        </section>
    );
};

export default CurrenciesBlock;
