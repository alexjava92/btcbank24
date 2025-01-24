'use client';

import React, { useState } from 'react';
import styles from './ReferralCalculator.module.css';
import InfoBlock from '@/componets/pages/info-block/InfoBlock';
import Button from '@/componets/pages/button/Button';

const ReferralCalculator: React.FC = () => {
    const [referrals, setReferrals] = useState<number>(1);
    const [exchangeAmount, setExchangeAmount] = useState<number>(2300);

    const getCommissionRate = (count: number): number => {
        if (count >= 150) return 2.5;
        if (count >= 130) return 2.4;
        if (count >= 110) return 2.3;
        if (count >= 90) return 2.2;
        if (count >= 70) return 2.1;
        if (count >= 50) return 2.0;
        if (count >= 40) return 1.8;
        if (count >= 30) return 1.6;
        if (count >= 20) return 1.4;
        if (count >= 10) return 1.2;
        return 1.0;
    };

    const commissionRate = getCommissionRate(referrals);
    const earnings = ((exchangeAmount * commissionRate) / 100) * referrals;

    return (
        <>
            <h1 style={{ textAlign: 'center', marginBottom: '5rem' }}>
                Реферальная система <span>BtcBank24</span>
            </h1>
            <InfoBlock >
                <p className="infoText">
                    В эпоху цифровых иллюзий каждый охотник жаждет наживы. Ты — охотник, и тебе нужно зайти в{' '}
                    <a href="https://t.me/Btcbank24com_v2_bot?start=srcWebsiteRef" target="_blank" rel="noopener noreferrer">
                        укромное место
                    </a>, выбрать там <strong>👤Профиль</strong>, затем раздел <strong>Реферальная программа</strong> и
                    скопировать свою уникальную ссылку для приглашения других странников.
                </p>
                <br />
                <p className="infoText">
                    Теперь, когда у тебя есть реферальная ссылка, используй её с умом. Поделись ею с друзьями,
                    размести в соцсетях или на тематических форумах, где собираются искатели финансовых возможностей.
                    Каждый приглашённый тобой человек — это шаг к новым горизонтам, ведь за каждую сделку реферала
                    ты получишь процент от его обменов.
                </p>
                <br />
                <p className="infoText">
                    Чем больше рефералов — тем выше твои награды. Следи за их активностью в разделе
                    <strong>👤Профиль</strong> &rarr; <strong>Реферальная программа</strong>, чтобы понимать,
                    насколько эффективно работает твоя стратегия привлечения. Помни, что в этом мире выигрывает
                    тот, кто мыслит нестандартно и действует решительно.
                </p>
            </InfoBlock>

            <div className={styles.calculatorContainer}>
                <h2 className={styles.title}>Рассчитайте свой заработок</h2>
                <div className={styles.sliderContainer}>
                    <label className={styles.label}>
                        Количество рефералов:{' '}
                        <span className={styles.earningsHighlight}>{referrals}</span>
                    </label>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={referrals}
                        onChange={(e) => setReferrals(Number(e.target.value))}
                        className={styles.slider}
                        list="tickmarks"
                    />
                    <datalist id="tickmarks">
                        <option value="0" label="0"></option>
                        <option value="25" label="25"></option>
                        <option value="50" label="50"></option>
                        <option value="75" label="75"></option>
                        <option value="100" label="100"></option>
                        <option value="125" label="125"></option>
                        <option value="150" label="150"></option>
                        <option value="175" label="175"></option>
                        <option value="200" label="200"></option>
                    </datalist>
                </div>
                <div className={styles.sliderContainer}>
                    <label className={styles.label}>
                        Сумма обмена:{' '}
                        <span className={styles.earningsHighlight}>{exchangeAmount}</span> RUB
                    </label>
                    <input
                        type="range"
                        min="2300"
                        max="100000"
                        step="100"
                        value={exchangeAmount}
                        onChange={(e) => setExchangeAmount(Number(e.target.value))}
                        className={styles.slider}
                    />
                </div>
                <div className={styles.resultContainer}>
                    <h3 className={styles.resultText}>
                        Ваш заработок:{' '}
                        <span className={styles.earningsHighlight}>{earnings.toFixed(2)}</span> RUB
                    </h3>
                    <p className={styles.percentageText}>
                        Процентная ставка:{' '}
                        <span className={styles.earningsHighlight}>{commissionRate}%</span>
                    </p>
                </div>
                <Button
                    size="large"
                    variant="primary"
                    onClick={() => {
                        setReferrals(0);
                        setExchangeAmount(2300);
                    }}
                >
                    Сбросить
                </Button>
            </div>
        </>
    );
};

export default ReferralCalculator;
