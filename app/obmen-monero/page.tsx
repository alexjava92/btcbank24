import React from 'react';
import {
    FaBitcoin,
    FaShieldAlt,
    FaUserSecret,
    FaBolt,
    FaTelegramPlane,
    FaExchangeAlt,
    FaStepForward,
    FaSmile,
    FaCogs,
    FaUsers, FaRocket, FaMoneyBillWave
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
import CustomContentBlockH2H3 from "@/componets/pages/custom-content-block-h2-h3/CustomContentBlockH2H3";


export const metadata = generateMetadata({
    ...seoConfig.exchangeXmr
});



export default function ExchangePage() {
    return (
        <div className={globalStyles.contentWrapper}>
            <SeoSchema
                pageTitle={seoConfig.exchangeXmr.title}
                pageDescription={seoConfig.exchangeXmr.description}
                pageUrl={seoConfig.exchangeXmr.url}
                breadcrumbs={seoConfig.exchangeXmr.breadcrumbs}
            />

            <section id="intro" className="scroll">
                <HeroSection
                    title={
                        <>
                            Купить, обменять и продать
                            — <span>Monero (XMR) быстро и безопасно</span>
                        </>
                    }
                    subtitle="В недрах цифровой вселенной, где время словно замедляется под ритмы хаоса и порядка, рождается возможность преобразования – купить, обменять или продать Monero, как тайный ключ к заветным мирам. Здесь, в этом виртуальном храме анонимности, каждое нажатие кнопки превращается в ритуал, а операции с криптой – в современную алхимию без бюрократических заклятий."
                    buttonText="Начать обмен"
                    buttonUrl="https://t.me/Btcbank24com_v2_bot?start=srcWebsiteObmenMonero"
                    imageSrc="/images/obmen-bitcoin/obmen-bitkoinov-na-rubli.jpg"
                    imageAlt="Обменять монеро"
                />
            </section>
            <div className={styles.containerFlex}>
                <TableOfContents
                    title="Содержание статьи:"
                    items={[
                        {
                            id: 'intro',
                            title: 'Купить, обменять и продать Monero (XMR) быстро и безопасно'
                        },
                        {
                            id: 'why-monero',
                            title: 'Почему выбирают Monero (XMR)?',
                            /*subItems: [
                                { id: 'anonymity', title: 'Анонимность и конфиденциальность' },
                                { id: 'tech-features', title: 'Технологические особенности' },
                                { id: 'user-benefits', title: 'Преимущества для пользователей' }
                            ]*/
                        },
                        {
                            id: 'buy-monero',
                            title: 'Как купить Monero (XMR) за рубли – пошаговая инструкция',
                            subItems: [
                                { id: 'buy-step-1', title: 'Шаг 1. Вход в Telegram-бот' },
                                { id: 'buy-step-2', title: 'Шаг 2. Начать обмен — нажимаем кнопку «Новый обмен»' },
                                { id: 'buy-step-3', title: 'Шаг 3. Выбор отдаваемой валюты — CARD он же RUB' },
                                { id: 'buy-step-4', title: 'Шаг 4. Выбор получаемой валюты — Monero (XMR)' },
                                { id: 'buy-step-5', title: 'Шаг 5. Указываем сумму Monero' },
                                { id: 'buy-step-6', title: 'Шаг 6. Указываем адрес для получения Monero' },
                                { id: 'buy-step-7', title: 'Шаг 7. Проверка реквизитов и подтверждение' },
                                { id: 'buy-step-8', title: 'Шаг 8. Выбираем удобный способ оплаты' },
                                { id: 'buy-step-9', title: 'Шаг 9. Совершаем оплату' },
                                { id: 'buy-step-10', title: 'Шаг 10. Уведомление оператору – обмен близок к завершению' },
                                { id: 'buy-step-11', title: 'Шаг 11. Обмен успешно завершён' }

                            ]
                        },
                        {
                            id: 'exchange-monero',
                            title: 'Как обменять Monero – мгновенный обмен на рубли по актуальному курсу',
                        },
                        {
                            id: 'sell-monero',
                            title: 'Продать Monero (XMR) – выгодные условия и быстрая продажа',
                            subItems: [
                                { id: 'sell-step-1', title: 'Шаг 1. Вход в Telegram-бот' },
                                { id: 'sell-step-2', title: 'Шаг 2. Начать обмен — нажимаем кнопку «Новый обмен»' },
                                { id: 'sell-step-3', title: 'Шаг 3. Выбор отдаваемой валюты — Monero (XMR)' },
                                { id: 'sell-step-4', title: 'Шаг 4. Выбор получаемой валюты — CARD он же RUB' },
                                { id: 'sell-step-5', title: 'Шаг 5. Указываем сумму продажи' },
                                { id: 'sell-step-6', title: 'Шаг 6. Указываем реквизиты для получения RUB' },
                                { id: 'sell-step-7', title: 'Шаг 7. Проверка реквизитов и подтверждение' },
                                { id: 'sell-step-8', title: 'Шаг 8. Совершаем перевод Monero' },
                                { id: 'sell-step-9', title: 'Шаг 9. Уведомление оператору – обмен близок к завершению' },
                                { id: 'sell-step-10', title: 'Шаг 10. Обмен успешно завершён' }
                            ]
                        },
                        {
                            id: 'advantages',
                            title: 'Преимущества работы с нашим обменником Monero'
                        },
                        {
                            id: 'faq',
                            title: 'Часто задаваемые вопросы по Monero',
                        },
                        {
                            id: 'reviews',
                            title: 'Отзывы клиентов о работе с Monero'
                        },
                        {
                            id: 'cta',
                            title: 'Готовы начать?'
                        }
                    ]}
                />

            </div>
            <section id="why-monero" className="scroll">

                <CustomContentBlockH2H3 title="Почему выбирают Monero (XMR)?"
                                        descriptions="Представьте себе город, где улицы вымощены тайнами, а прохожие – хранители древних секретов. Monero – это не просто криптовалюта, а философия, скрытая за числовыми потоками и кодовыми заклинаниями. Здесь каждый бит данных дышит анонимностью, словно путник, растворившийся в бескрайних просторах цифрового космоса."
                                        items={[
                    {
                        icon: <FaUserSecret />,
                        subtitle: 'Анонимность и конфиденциальность',
                        text: 'Monero – это виртуальный плащ-невидимка, дарующий свободу от оков внешнего контроля. Ваши транзакции скрыты, как отголоски древних мифов, оставляя лишь загадку для тех, кто пытается постичь истину.',
                    },
                    {
                        icon: <FaCogs />,
                        subtitle: 'Технологические особенности',
                        text: 'Секреты Monero заключены в кольцевых подписях и скрытых адресах – технология, способная превратить обычное число в таинственный символ вечного обновления. Каждая транзакция – как ритуал, подтверждающий существование неизменного закона перемен.',
                    },
                    {
                        icon: <FaUsers />,
                        subtitle: 'Преимущества для пользователей',
                        text: 'В условиях стремительного цифрового потока, где мир становится всё более прозрачным, Monero предлагает убежище для тех, кто ценит приватность. Это идеальный выбор для тех, кто хочет купить Monero без лишних вопросов и сохранить свою свободу в этом хаотичном мире.',
                    },
                ]} />


            </section>


            <section id="buy-monero" className="scroll">
                <Instruction title="Как купить Monero (XMR) за рубли – пошаговая инструкция." steps={[
                    {
                        id: 'buy-step-1',
                        title: 'Шаг 1: Вход в Telegram-бот',
                        description: 'Откройте врата цифровой реальности, где вас ждёт Telegram-бот – проводник в мире Monero. Как только вы нажмёте кнопку «Старт», магия начнёт проникать в ваши транзакции.',
                        image: '/images/obmen-bitcoin/obmennik-bitcoin.jpg',
                        alt: 'Купить монеро за рубли',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-2',
                        title: 'Шаг 2: Начать обмен — нажимаем кнопку «Новый обмен»',
                        description: 'Вы на пороге перемен. Одно нажатие — и ваш капитал начинает путь из рублей в мир блокчейна.',
                        image: '/images/obmen-bitcoin/obmen-bitkoin.jpg',
                        alt: 'купить монеро',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-3',
                        title: 'Шаг 3: Выбор отдаваемой валюты — CARD он же RUB',
                        description: 'Выберите опцию CARD, словно выбирая путь истинного пробуждения. Интерфейс интуитивен, как древние символы, дарующие ключ к богатствам цифровой ауры.',
                        image: '/images/obmen-monero/kupit-monero.jpg',
                        alt: 'обменять биткоины',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-4',
                        title: 'Шаг 4: Выбор получаемой валюты — Monero (XMR)',
                        description: 'Монеро — это не просто деньги, это возможность. Выбираем Monero и открываем дверь в анонимный рай.',
                        image: '/images/obmen-monero/kupit-monero-za-rubli.jpg',
                        alt: 'купить xmr',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-5',
                        title: 'Шаг 5: Указываем сумму Monero',
                        description: 'Введите сумму в монеро, определите, сколько готовы отдать за частичку цифрового мистицизма. Алгоритмы сервиса, как мудрые оракулы, мгновенно рассчитают курс и покажут истинное значение обмена.',
                        image: '/images/obmen-monero/kupit-xmr.jpg',
                        alt: 'указываем сумму в монеро',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-6',
                        title: 'Шаг 6: Указываем адрес для получения Monero',
                        description: 'На этом этапе, словно в тихой медитации над кодом, введите адрес вашего кошелька Monero. В этом цифровом пространстве каждое действие приобретает оттенок неизбежного перехода между мирами, где точность имеет значение, а малейшая ошибка способна изменить ход событий.',
                        image: '/images/obmen-monero/kupit-monero-ukazivaev-adres.jpg',
                        alt: 'указываем кошелек монеро',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-7',
                        title: 'Шаг 7: Проверка реквизитов и подтверждение',
                        description: 'На этом этапе, словно в тихом созерцании цифровых символов, проверяем курс обмена, адрес и сумму. Если что-то не сходится с внутренним ритмом, исправляем неточности и продолжаем путь вперёд.',
                        image: '/images/obmen-monero/kupit-monero-podtverjdenie.jpg',
                        alt: 'проверяем суммы курс адрес',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-8',
                        title: 'Шаг 8: Выбираем удобный способ оплаты',
                        description: 'На этом этапе, словно распутывая тонкие нити цифровой судьбы, выбираем способ оплаты, например СБП.',
                        image: '/images/obmen-monero/kupit-monero-sposob-oplati.jpg',
                        alt: 'выбираем способ оплаты',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-9',
                        title: 'Шаг 9: Совершаем оплату',
                        description: 'На этом этапе, следуя цифровой ритуальности, осуществляем платеж по предоставленным реквизитам. Нажмите кнопку «Оплатил», чтобы зафиксировать этот шаг, словно подтверждая переход в новую фазу вашего финансового путешествия.',
                        image: '/images/obmen-monero/kupit-xmr-oplata-obmena.jpg',
                        alt: 'оплата заявки на обмен',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-10',
                        title: 'Шаг 10: Уведомление оператору – обмен близок к завершению',
                        description: 'После нажатия кнопки «Оплатил» оператор получает сигнал и начинает финальную проверку вашего платежа. Скоро вы получите сообщение о том, что обмен успешно завершён.',
                        image: '/images/obmen-monero/kupit-xmr-uvedomlenie.jpg',
                        alt: 'уведомление оператору',
                        className: 'scroll'
                    },
                    {
                        id: 'buy-step-11',
                        title: 'Шаг 11: Обмен успешно завершён',
                        description: 'Платёж принят. Ваши монеты отправлены на указанный адрес, и в ближайшее время вы увидите их зачисление, подтверждающее завершение этого цифрового путешествия.',
                        image: '/images/obmen-monero/kupit-monero-obmen-zavershon.jpg',
                        alt: 'обмен завершен успешно',
                        className: 'scroll'
                    },
                ]}/>
            </section>

            <section id="exchange-monero" className="scroll">
            <CustomContentBlock
                title="Как обменять Monero – мгновенный обмен на рубли по актуальному курсу"
                items={[
                    {
                        icon: <FaExchangeAlt className={stylesBlock.icon}/>,
                        text: "В мире цифровой алхимии покупка и продажа Monero сливаются в единое целое – процесс обмена, где каждое действие превращается в ритуал трансформации. Если вы задаётесь вопросом, где обменять monero на рубли, наш сервис предлагает мгновенную и выгодную операцию, в которой курс фиксируется в реальном времени, а ваша криптовалюта быстро и безопасно обменивается на рубли."
                    },
                    {
                        icon: <FaRocket className={stylesBlock.icon} />,
                        text: (
                            <>
                                Наш процесс обмена Monero – это не просто механическая транзакция, а цифровой ритуал, где{' '}
                                <a href="#buy-monero">покупка</a> и <a href="#sell-monero">продажа</a> сливаются воедино. Вы выбираете
                                опцию «обменять монеро на рубли», и система мгновенно рассчитывает оптимальный курс, превращая ваш
                                Monero в рубли, словно по мановению волшебной палочки. Весь процесс происходит без лишних проверок,
                                задержек и бюрократических формальностей – только вы и мгновенная, прозрачная конвертация.
                            </>
                        )
                    },
                    {
                        icon: <FaMoneyBillWave  className={stylesBlock.icon}/>,
                        text: "Таким образом, если вам нужно обменять монеро, вы получаете возможность оперативно переключаться между цифровым активом и его реальным эквивалентом. Наш сервис гарантирует, что обмен проходит быстро, надежно и с максимальной выгодой для вас."
                    },

                ]}
            />
            </section>

            <section id="sell-monero" className="scroll">
                <Instruction title="Продать Monero (XMR) – выгодные условия и быстрая продажа" steps={[
                    {
                        id: 'sell-step-1',
                        title: 'Шаг 1: Вход в Telegram-бот',
                        description: 'Войдите в систему, где время и пространство сливаются в единое целое. Telegram-бот ждёт вас, чтобы провести ритуал продажи.',
                        image: '/images/obmen-bitcoin/obmennik-bitcoin.jpg',
                        alt: 'обменять монеро вход в телеграмм бот',
                        className: 'scroll'
                    },
                    {
                        id: 'sell-step-2',
                        title: 'Шаг 2: Начать обмен — нажимаем кнопку «Новый обмен»',
                        description: 'Вы стоите на пороге перемен. Одно нажатие запускает процесс обмена, переводя ваш Monero из мира блокчейна в новую финансовую реальность. Это первый шаг на пути к переменам, где каждое действие приближает вас к желаемому результату.',
                        image: '/images/obmen-bitcoin/obmen-bitkoin.jpg',
                        alt: 'обмен монеро начинаем обмен',
                        className: 'scroll'
                    },
                    {
                        id: 'sell-step-3',
                        title: 'Шаг 3: Выбор отдаваемой валюты — Monero (XMR)',
                        description: 'На этом этапе выбираем валюту, которую отдаем, и это — Monero (XMR). Пусть этот выбор станет тихим началом вашего пути через мир цифровых трансформаций, где каждое решение несет свою скрытую глубину.',
                        image: '/images/obmen-monero/sell-monero/obmen-monero.jpg',
                        alt: 'Обменять монеро выбираем отдаваемую валюту',
                        className: 'scroll'
                    },
                    {
                        id: 'sell-step-4',
                        title: 'Шаг 4: Выбор получаемой валюты — CARD он же RUB',
                        description: 'Выбираем валюту, которую хотим получить, открывая ворота в новую финансовую реальность. Пусть этот выбор станет тихим предвестником перемен, где каждое решение отражает глубину цифрового пробуждения.',
                        image: '/images/obmen-monero/sell-monero/obmenat-monero.jpg',
                        alt: 'обменять xmr выбираем валюту которую хотите получить',
                        className: 'scroll'
                    },
                    {
                        id: 'sell-step-5',
                        title: 'Шаг 5: Указываем сумму продажи',
                        description: 'Введите сумму обмена в Monero или RUB, задавая меру вашего цифрового перехода.',
                        image: '/images/obmen-monero/sell-monero/obmen-xmr.jpg',
                        alt: 'обмен xmr указываем сумму обмена',
                        className: 'scroll'
                    },
                    {
                        id: 'sell-step-6',
                        title: 'Шаг 6: Указываем реквизиты для получения RUB',
                        description: 'Укажите реквизиты для получения рублей. Рекомендуется вводить СБП-номер с указанием банка.',
                        image: '/images/obmen-monero/sell-monero/prodat-monero.jpg',
                        alt: 'продать монеро указываем реквизиты получения рублей',
                        className: 'scroll'
                    },
                    {
                        id: 'sell-step-7',
                        title: 'Шаг 7: Проверка реквизитов и подтверждение',
                        description: 'На этом этапе, словно в тихом созерцании цифровых символов, проверяем курс обмена, адрес и сумму. Если что-то не сходится, исправляем неточности и продолжаем путь вперёд.',
                        image: '/images/obmen-monero/sell-monero/prodat-xmr.jpg',
                        alt: 'продать xmr проверка данных и подтверждение',
                        className: 'scroll'
                    },
                    {
                        id: 'sell-step-8',
                        title: 'Шаг 8: Совершаем перевод Monero',
                        description: 'Бот формирует адрес для перевода. Переведите указанную сумму на выданный адрес XMR, и нажимаем кнопку "Оплатил" завершая очередной этап цифрового преображения.',
                        image: '/images/obmen-monero/sell-monero/prodaja-monero-za-rubli.jpg',
                        alt: 'продать монеро за рубли, совершаем перевод',
                        className: 'scroll'
                    },
                    {
                        id: 'sell-step-9',
                        title: 'Шаг 9: Уведомление оператору – обмен близок к завершению',
                        description: 'После нажатия кнопки «Оплатил» оператор получает сигнал и начинает финальную проверку вашего платежа. Скоро вы получите сообщение о том, что обмен успешно завершён.',
                        image: '/images/obmen-monero/sell-monero/kupit-obmenat-monero-xmr.jpg',
                        alt: 'продажа xmr уведомление оператору',
                        className: 'scroll'
                    },
                    {
                        id: 'sell-step-10',
                        title: 'Шаг 10: Обмен успешно завершён',
                        description: 'Платёж принят. Ваши монеты отправлены на указанный адрес, и в ближайшее время вы увидите их зачисление, подтверждающее завершение этого цифрового путешествия.',
                        image: '/images/obmen-monero/sell-monero/prodaja-monero-uspeshno.jpg',
                        alt: 'продажа монеро обмен завершен успешно',
                        className: 'scroll'
                    },
                ]}/>
            </section>

            <section id="advantages" className="scroll">
                <InfoBlock>
                    <h2>Преимущества работы с нашим обменником Monero</h2>
                    <br />
                    <p>
                        Наш сервис – это не просто обменник. Это цифровой храм, где каждое действие пропитано древней мудростью и современными технологиями. Почему выбирают нас?
                    </p>
                    <ul>
                        <li>
                            <strong>Надежность и опыт</strong> — Уже более 7 лет мы сопровождаем тех, кто решил купить монеро или продать монеро, оставаясь на страже анонимности и безопасности.
                        </li>
                        <li>
                            <strong>Анонимность</strong> — Отсутствие регистрации и сложных проверок – как древний обряд, который позволяет сохранить вашу истинную сущность.
                        </li>
                        <li>
                            <strong>Скорость</strong> — Мгновенные операции и уведомления – цифровой поток, где каждая секунда на вес золота.
                        </li>
                        <li>
                            <strong>Простота использования</strong> — Интуитивно понятный интерфейс, где даже новичок найдет свой путь в лабиринте криптовалют.
                        </li>
                        <li>
                            <strong>Выгодные курсы</strong> — Постоянно обновляемые обменные курсы, которые дарят максимальную выгоду каждому участнику ритуала обмена.
                        </li>
                    </ul>
                </InfoBlock>

            </section>

            <section id="faq" className="scroll">
                <FAQ title={"Часто задаваемые вопросы?"} items={[
                    {
                        question: 'Как купить Monero без регистрации?',
                        answer: 'Наш сервис позволяет купить монеро без лишних формальностей – никаких AML/KYC, только простота и анонимность.',
                    },
                    {
                        question: 'Какие комиссии при покупке, обмене и продаже Monero?',
                        answer: 'Мы предлагаем выгодные условия – комиссии минимальны, а курс обмена всегда актуален, чтобы каждая операция была для вас честным обменом энергии.',
                    },
                    {
                        question: 'Сколько времени занимает обмен Monero?',
                        answer: 'Обмен происходит мгновенно, как вспышка осознания – практически моментально, сразу после подтверждения транзакции.',
                    },
                    {
                        question: 'Безопасно ли работать с вашим сервисом?',
                        answer: 'Безопасность – наш главный приоритет. Мы обеспечиваем полную анонимность и защиту ваших данных на каждом этапе операции.',
                    },
                    {
                        question: 'Какие способы оплаты доступны для операций с Monero?',
                        answer: 'Вы можете купить монеро или продать монеро за рубли через удобные платёжные методы – от СБП до оплаты с банковской карты. Всё настроено для вашего максимального комфорта.',
                    },
                ]}/>
            </section>

            <section id="reviews" className="scroll">
                <CustomerReviews />
            </section>

            <section id="cta" className="scroll">
                <CallToAction
                    heading="Готовы начать обмен?"
                    text="Не откладывайте момент, когда цифровая реальность зовёт вас в свои объятия. Если вы хотите купить, обменять или продать Monero, сейчас самое время сделать первый шаг на пути к свободе и анонимности."
                    buttonText="Начать обмен"
                    buttonLink="https://t.me/Btcbank24com_v2_bot?=srcWebsiteObmenMoneroCTA"
                    imageSrc="/images/obmen-monero/monero.webp"
                    imageAlt="обменять монеро"
                />
            </section>
        </div>
    );
}
