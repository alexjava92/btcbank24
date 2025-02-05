import React from 'react';
import {
    FaBitcoin, FaShieldAlt, FaUserSecret, FaBolt, FaTelegramPlane, FaExchangeAlt, FaStepForward, FaSmile
} from 'react-icons/fa';
import HeroSection from "@/componets/pages/hero-section/HeroSection";
import CustomContentBlock from "@/componets/pages/custom-content-block/CustomContentBlock";
import CallToAction from "@/componets/pages/call-to-action/CallToAction";
import CustomerReviews from "@/componets/pages/customer-reviews/CustomerReviews";
import InfoBlock from "@/componets/pages/info-block/InfoBlock";
import stylesBlock from '../../componets/pages/custom-content-block/CustomContentBlock.module.css';
import styles from "@/app/obmen-bitcoin/ObmenBitcoin.module.css";
import globalStyles from "@/styles/GlobalStyles.module.css";
import Instruction from "@/componets/instruction/Instruction";
import FAQ from "@/componets/pages/faq/FAQ";
import TableOfContents from "@/componets/pages/table-of-contents/TableOfContentsProps";
import {generateMetadata} from "@/app/utils/seo/seo";
import {seoConfig} from "@/app/utils/seo/seoConfig";
import SeoSchema from "@/app/utils/seo/SeoSchema";


export const metadata = generateMetadata({
    ...seoConfig.obmenBitcoin
});



export default function ExchangePage() {
    return (
        <div className={globalStyles.contentWrapper}>
            <SeoSchema
                pageTitle={seoConfig.obmenBitcoin.title}
                pageDescription={seoConfig.obmenBitcoin.description}
                pageUrl={seoConfig.obmenBitcoin.url}
                breadcrumbs={seoConfig.obmenBitcoin.breadcrumbs}
            />

            <section id="exchange" className="scroll">
                <HeroSection
                    title={
                        <>
                            Обмен Биткоинов на Рубли через Telegram
                            — <span>Твой Крипто-Путь без Лишних Препятствий</span>
                        </>
                    }
                    subtitle="Вы когда-нибудь задумывались, что обмен биткоинов на рубли – это как алхимия современного мира? Вы просто отправляете цифровое золото и получаете привычные, но всё ещё загадочные рубли. Все это — без сложных ритуалов регистрации, без AML/KYC проверок и лишних вопросов. Добро пожаловать в наш BTC обменник, где магия происходит быстро и анонимно."
                    buttonText="Перейти в Telegram"
                    buttonUrl="https://t.me/Btcbank24com_v2_bot?start=srcWebsiteObmenBitcoin"
                    imageSrc="/images/obmen-bitcoin/obmen-bitkoinov-na-rubli.jpg"
                    imageAlt="Обмен биткоинов на рубли"
                />
            </section>
            <div className={styles.containerFlex}>
                <TableOfContents items={[
                    {id: 'exchange', title: 'Обмен Биткоинов на Рубли через Телеграм'},
                    {id: 'advantages', title: 'Основные преимущества обменника'},
                    {id: 'safety', title: 'Почему Telegram — это удобно и безопасно'},
                    {
                        id: 'how-to-exchange',
                        title: 'Как обменять Биткоины на Рубли',
                        subItems: [
                            {id: 'step-1', title: 'Шаг 1: Вход в Telegram-бот'},
                            {id: 'step-2', title: 'Шаг 2: Начать обмен — нажимаем кнопку «Новый обмен»'},
                            {id: 'step-3', title: 'Шаг 3: Выбор отдаваемой валюты — Bitcoin'},
                            {id: 'step-4', title: 'Шаг 4: Выбор получаемой валюты — CARD'},
                            {id: 'step-5', title: 'Шаг 5: Указываем сумму Bitcoin'},
                            {id: 'step-6', title: 'Шаг 6: Указываем реквизиты для получения рублей'},
                            {id: 'step-7', title: 'Шаг 7: Проверка реквизитов и подтверждение'},
                            {id: 'step-8', title: 'Шаг 8: Бот создаёт адрес для перевода Bitcoin'},
                            {id: 'step-9', title: 'Шаг 9: Ожидание и проверка заявки'},
                            {id: 'step-10', title: 'Шаг 10: Обмен завершён успешно'}
                        ]
                    },
                    {id: 'faq', title: 'Часто задаваемые вопросы'},
                    {id: 'reviews', title: 'Отзывы клиентов'},
                    {id: 'start-now', title: 'Готовы начать обмен?'},
                ]} title="Содержание статьи:"/>
            </div>
            <section id="advantages" className="scroll">
                <CustomContentBlock
                    title="Почему наш обменник Bitcoin в Telegram — это Zen?"
                    items={[
                        {
                            icon: <FaBitcoin className={stylesBlock.icon}/>,
                            text: "Надежность, проверенная цифровыми самураями\n" +
                                "Мы на рынке уже более 7 лет. Мы видели взлёты и падения, знаем, когда биткоин восходит, и когда рубль ищет своё дно."
                        },
                        {
                            icon: <FaShieldAlt className={stylesBlock.icon}/>,
                            text: "Простота использования — всё, как в дзен-медитации\n" +
                                "В нашем обменнике Bitcoin не нужно долго думать. Просто переходите в Telegram, нажимаете пару кнопок и обмениваете свои BTC, как если бы наливали чашку чая."
                        },
                        {
                            icon: <FaUserSecret className={stylesBlock.icon}/>,
                            text: "Анонимность на грани фантастики\n" +
                                "Мы не спрашиваем паспорт, не требуем селфи и не просим вписывать имя любимого кота в анкету. Наша задача — моментальный и безопасный обмен биткоинов на рубли без лишних движений. Только вы и цифры."
                        },
                        {
                            icon: <FaBolt className={stylesBlock.icon}/>, text: "Скорость — как миг прозрения\n" +
                                "Переводы обрабатываются мгновенно, а курс фиксируется в момент заявки. Вы не успеете моргнуть, а деньги уже у вас на счету."
                        },
                    ]}
                />
            </section>
            <section id="safety" className="scroll">
                <InfoBlock>
                    <h2>Почему Telegram — лучший обменник Bitcoin?</h2>
                    <br/>
                    <ul>
                        <li><strong>Без лишних формальностей</strong> — заходите, меняете, уходите. Всё без долгих
                            процедур
                            и нервотрёпки.
                        </li>
                        <li><strong>Гибкость и мобильность</strong> — работаете с криптой, где бы вы ни находились.
                            Телефон
                            в кармане — и весь мир у вас под рукой.
                        </li>
                        <li><strong>Моментальные уведомления</strong> — никаких переживаний, всё видно сразу в чате.
                        </li>
                        <li><strong>Шифрование и безопасность</strong> — данные защищены на уровне цифрового дзена.</li>
                    </ul>
                </InfoBlock>
            </section>

            <section id="how-to-exchange" className="scroll">
                <Instruction title="Как обменять биткоин на рубли?" steps={[
                    {
                        id: 'step-1',
                        title: 'Шаг 1: Вход в Telegram-бот',
                        description: 'Погружаемся в виртуальную реальность финансов — открываем наш Telegram-бот, жмем кнопку «Старт» и чувствуем, как цифровая магия обволакивает разум. Всё просто, будто бы сама сеть решила провести вас за руку.',
                        image: '/images/obmen-bitcoin/obmennik-bitcoin.jpg',
                        alt: 'обменник биткоин',
                        className: 'scroll'
                    },
                    {
                        id: 'step-2',
                        title: 'Шаг 2: Начать обмен — нажимаем кнопку «Новый обмен»',
                        description: 'Вы на пороге перемен. Одно нажатие — и ваш капитал начинает путь из блокчейна в реальный мир.',
                        image: '/images/obmen-bitcoin/obmen-bitkoin.jpg',
                        alt: 'обмен биткоин',
                        className: 'scroll'
                    },
                    {
                        id: 'step-3',
                        title: 'Шаг 3: Выбор отдаваемой валюты — Bitcoin',
                        description: 'Биткоин — вечный странник в цифровом пространстве, выбираем его как средство отправления. Да, он будет скучать, но впереди ждёт новое приключение.',
                        image: '/images/obmen-bitcoin/obmenyat-bitkoiny.jpg',
                        alt: 'обменять биткоины',
                        className: 'scroll'
                    },
                    {
                        id: 'step-4',
                        title: 'Шаг 4: Выбор получаемой валюты — CARD',
                        description: 'Рубли — это не просто деньги, это возможность. Выбираем CARD и открываем дверь в безналичный рай.',
                        image: '/images/obmen-bitcoin/btc-obmennik.jpg',
                        alt: 'btc обменник',
                        className: 'scroll'
                    },
                    {
                        id: 'step-5',
                        title: 'Шаг 5: Указываем сумму Bitcoin',
                        description: 'Сколько готовы отпустить в этот путь? Введите сумму в BTC или доверьтесь боту — нажмите «Ввести RUB», введите, например, 10 000, и машина расчета выдаст вам точное количество сатоши, как истинный кибер-оракул.',
                        image: '/images/obmen-bitcoin/obmen-bitkoin-na-rubli.jpg',
                        alt: 'обмен биткоин на рубли',
                        className: 'scroll'
                    },
                    {
                        id: 'step-6',
                        title: 'Шаг 6: Указываем реквизиты для получения рублей',
                        description: 'Детали решают всё. Лучше указать номер СБП с банком, но и карта сгодится — главное, чтобы вы были готовы к финансовому перерождению.',
                        image: '/images/obmen-bitcoin/obmen-bitcoin.jpg',
                        alt: 'обмен биткоин',
                        className: 'scroll'
                    },
                    {
                        id: 'step-7',
                        title: 'Шаг 7: Проверка реквизитов и подтверждение',
                        description: 'Медитация на цифры: проверяем, осознаем и принимаем. Если вдруг прозрение подсказывает, что что-то не так — исправляем и движемся дальше.',
                        image: '/images/obmen-bitcoin/obmen-btk.jpg',
                        alt: 'обмен бтк',
                        className: 'scroll'
                    },
                    {
                        id: 'step-8',
                        title: 'Шаг 8: Бот создаёт адрес для перевода Bitcoin',
                        description: 'Приходит момент истины: отправляем BTC на сгенерированный адрес и жмём «Оплатил». Всё, что остаётся — это ожидание, наполненное таинственным трепетом блокчейн-подтверждений.',
                        image: '/images/obmen-bitcoin/obmen-btc.jpg',
                        alt: 'обмен btc',
                        className: 'scroll'
                    },
                    {
                        id: 'step-9',
                        title: 'Шаг 9: Ожидание и проверка заявки',
                        description: 'Вселенная обмена уже запущена, оператор следит за потоком транзакций, проверяет поступления, сверяет цифры. Если возникнут вопросы — получите сигнал. Напоминаем: подтверждение сети — дело важное, ждём два блока и финансы начнут движение к вам.',
                        image: '/images/obmen-bitcoin/obmennik-bitcoin-btcbank24.jpg',
                        alt: 'обменник биткоин btcbank24',
                        className: 'scroll'
                    },
                    {
                        id: 'step-10',
                        title: 'Шаг 10: Обмен завершён успешно',
                        description: 'Миссия выполнена, деньги там, где вы их ждали. Уведомление о завершении операции — как награда за терпение и доверие. Всё гениальное — просто.',
                        image: '/images/obmen-bitcoin/obmen-bitcoin-na-rubli-btcbank24.jpg',
                        alt: 'обмен биткоин на рубли btcbank24',
                        className: 'scroll'
                    },
                ]}/>
            </section>

            <section id="faq" className="scroll">
                <FAQ title={"Часто задаваемые вопросы?"} items={[
                    {
                        question: 'Как долго идет обмен биткоин на рубли?',
                        answer: 'Как только транзакция получает 2 подтверждения в сети, заявка передается на выплату, занимает 5 - 10 минут.',
                    },
                    {
                        question: 'Какие комиссии?',
                        answer: 'Мы удерживаем минимальные комиссии 1%, следуя пути финансовой гармонии.',
                    },
                    {
                        question: 'Можно ли обменять биткоины без регистрации?',
                        answer: 'Конечно, никаких регистраций и верификаций, просто Telegram и ваши BTC.',
                    },
                    {
                        question: 'Почему нет AML/KYC проверок?',
                        answer: 'Мы уважаем вашу анонимность и считаем, что каждый заслуживает финансовой свободы.',
                    },
                ]}/>
            </section>

            <section id="reviews" className="scroll">
                <CustomerReviews />
            </section>

            <section id="start-now" className="scroll">
                <CallToAction
                    heading="Готовы начать обмен?"
                    text="Не откладывайте на потом то, что можно сделать сейчас. Нажмите на кнопку ниже, и начните обмен биткоинов на рубли уже сегодня. Мы здесь, чтобы сделать ваш крипто-путь проще и удобнее."
                    buttonText="Начать обмен"
                    buttonLink="https://t.me/Btcbank24com_v2_bot?=srcWebsiteObmenBitcoinCTA"
                    imageSrc="/images/home/crypto-transform.png"
                    imageAlt="начать обмен биткоин на рубли"
                />
            </section>
        </div>
    );
}
