import React from 'react';
import {
    FaBalanceScale,
    FaBitcoin,
    FaBolt, FaExchangeAlt,
    FaHandHoldingUsd, FaHeadset, FaPercent, FaRocket,
    FaShieldAlt, FaSmile, FaStepForward, FaTelegramPlane, FaUserGraduate,
    FaUserSecret
} from 'react-icons/fa';
import HeroSection from "@/componets/pages/hero-section/HeroSection";
import FeatureCard from "@/componets/pages/feature-card/FeatureCard";
import CurrenciesBlock from "@/componets/pages/currencies-block/CurrenciesBlock.tsx";
import CustomContentBlock from "@/componets/pages/custom-content-block/CustomContentBlock";
import styles from './HomePage.module.css';
import stylesBlock from '../componets/pages/custom-content-block/CustomContentBlock.module.css';
import HowItWorksBlock from "@/componets/pages/howIt-works-block/HowItWorksBlock";
import CallToAction from "@/componets/pages/call-to-action/CallToAction";
import CustomerReviews from "@/componets/pages/customer-reviews/CustomerReviews";
import {generateMetadata} from "@/app/utils/seo/seo";
import SeoSchema from "@/app/utils/seo/SeoSchema";
import {seoConfig} from "@/app/utils/seo/seoConfig";
import Script from "next/script";


export const metadata = generateMetadata({
    ...seoConfig.home
});

export default function HomePage() {


    return (
        <>
            <Script>
                <SeoSchema
                    pageTitle={seoConfig.home.title}
                    pageDescription={seoConfig.home.description}
                    pageUrl={seoConfig.home.url}
                    breadcrumbs={seoConfig.home.breadcrumbs}
                />
            </Script>



            <HeroSection
                title={
                    <>
                        Обменник криптовалют в Telegram — <span>ваш проводник в цифровой дзен</span>
                    </>
                }
                subtitle="Задумывались, где в этом мире безграничных цифровых джунглей найти безопасное и быстрое место для обмена криптовалют? Добро пожаловать. Мы — не просто обменник в Телеграмме. Мы — ваши спутники на пути к финансовой гармонии."
                buttonText="Начать обмен"
                buttonUrl="https://t.me/Btcbank24com_v2_bot?start=srcWebsiteHomePage"
                imageSrc="/images/home/obmennik-v-telegramme.jpg"
                imageAlt="обменник в телеграмме"
            />

            <CustomContentBlock
                title="Почему выбирают нас?"
                items={[
                    {
                        icon: <FaBitcoin className={stylesBlock.icon}/>,
                        text: "Опыт, проверенный временем. За это время мы видели всё — от бурных взлетов BTC до тихих шепотов мем-монет. Ваши сделки защищены, как дзен монаха."
                    },
                    {
                        icon: <FaShieldAlt className={stylesBlock.icon}/>,
                        text: "Безопасность на уровне Мона Лизы. Все транзакции проходят через зашифрованные каналы. Никто, кроме вас, не узнает, что ваш BTC превратился в USDT."
                    },
                    {
                        icon: <FaUserSecret className={stylesBlock.icon}/>,
                        text: "Анонимность в чистом виде. Никаких лишних вопросов. Только вы, ваш бот и цифры, которые превращаются в рубли или крипту."
                    },
                    {
                        icon: <FaBolt className={stylesBlock.icon}/>,
                        text: "Скорость света. Ваши деньги идут быстро, как послание дзен-мастера. Никаких задержек, только поток."
                    }
                ]}
            />

            <CurrenciesBlock/>

            <div>
                <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>Уникальные особенности
                    нашего обменника</h2>
            </div>
            <section className={styles.featuresSection}>
                <FeatureCard
                    icon={<FaHeadset/>}
                    title="Клиентская поддержка с 8:00 до 23:00"
                    description="Мы всегда на связи в рабочие часы. Утро или вечер — вы получите помощь от нашего заботливого саппорта, готового решить любые вопросы."
                />
                <FeatureCard
                    icon={<FaBalanceScale/>}
                    title="Прозрачность сделок"
                    description="Все операции проходят с полным контролем. Вы видите каждый этап, а результаты всегда предсказуемы."
                />
                <FeatureCard
                    icon={<FaHandHoldingUsd/>}
                    title="Простота использования"
                    description="Интерфейс нашего бота интуитивно понятен. Даже если вы впервые работаете с криптовалютой, всё будет легко и понятно."
                />
                <FeatureCard
                    icon={<FaPercent/>}
                    title="Минимальные комиссии"
                    description="В мире криптовалют, где каждый процент — это шаг на пути к финансовому дзену, мы помогаем двигаться легко и уверенно."
                />
                <FeatureCard
                    icon={<FaBolt/>}
                    title="Молниеносные транзакции"
                    description="Быстрее, чем вспышка просветления, ваши средства проходят через блокчейн и оказываются в нужном месте. Ожидание? Оно осталось в прошлом."
                />
                <FeatureCard
                    icon={<FaUserSecret/>}
                    title="Полная анонимность"
                    description="Никаких анкет, селфи и паролей от детства. Только ваш кошелек и поток цифрового бытия. Всё по-настоящему конфиденциально."
                />
            </section>
            <div style={{marginBottom: '10rem'}}></div>


            <HowItWorksBlock
                title="Как это работает?"
                steps={
                    [
                        {icon: <FaTelegramPlane/>, text: "Шаг 1. Заходите в наш бот-обменник в Telegram."},
                        {icon: <FaExchangeAlt/>, text: "Шаг 2. Выбираете валюты, которые хотите обменять."},
                        {icon: <FaStepForward/>, text: "Шаг 3. Следуете простым шагам в интерфейсе."},
                        {
                            icon: <FaSmile/>,
                            text: "Шаг 4. Улыбаетесь, потому что ваш обмен прошёл быстрее, чем приготовление чая."
                        },
                    ]
                }
            />

            <CustomContentBlock
                title="Почему Telegram — это круто?"
                items={[
                    {
                        icon: <FaTelegramPlane className={stylesBlock.icon}/>,
                        text: "Потому что это не просто мессенджер. Это ваша личная крепость. Наш бот работает внутри этой крепости, обеспечивая вашу конфиденциальность и защищённость. Никаких приложений, никаких скачиваний — только Telegram и ваш внутренний дзен."
                    },

                ]}
            />

            <HowItWorksBlock
                title="Для кого мы работаем?"
                steps={[
                    {icon: <FaUserGraduate/>, text: "Молодёжь, которая хочет поймать волну крипты;"},
                    {icon: <FaBitcoin/>, text: "Взрослые, которые понимают, что за биткойном — будущее;"},
                    {icon: <FaRocket/>, text: "Любители скорости и анонимности;"},
                    {icon: <FaShieldAlt/>, text: "Все, кто ценит надёжность и простоту."},
                ]}
            />

            <CustomContentBlock
                title="Лучшие обменники в Telegram? Вы уже нашли нас"
                items={[
                    {
                        icon: <FaTelegramPlane className={stylesBlock.icon}/>,
                        text: "Когда слова \"обмен крипты в Телеграме\" звучат как песня, знайте: это про нас. Мы здесь, чтобы сделать ваш путь к финансовой свободе максимально лёгким, безопасным и быстрым."
                    },

                ]}
            />

            <CustomerReviews reviews={[
                {
                    id: 1,
                    author: "Анна С.",
                    rating: 5,
                    text: "Отличный обменник! Быстро и надежно. Рекомендую всем, кто ценит удобство и скорость."
                },
                {
                    id: 2,
                    author: "Иван П.",
                    rating: 4,
                    text: "Хороший опыт, но есть небольшие замечания. В целом, обмен проходит без проблем."
                },
                {
                    id: 3,
                    author: "Елена М.",
                    rating: 5,
                    text: "Превосходный обменник криптовалют! Лучший сервис, которым я пользовалась."
                },
                {
                    id: 4,
                    author: "Сергей К.",
                    rating: 4,
                    text: "Удобный и быстрый обмен. Есть что улучшить, но сервис уже на высоком уровне."
                },
                {
                    id: 5,
                    author: "Ольга В.",
                    rating: 5,
                    text: "Лучший обменник, которым я пользовалась! Все транзакции проходят быстро и без проблем."
                },
                {
                    id: 6,
                    author: "Дмитрий Л.",
                    rating: 4,
                    text: "Хороший обмен, но хотелось бы больше направлений. В целом, доволен."
                },
                {
                    id: 7,
                    author: "Мария Н.",
                    rating: 5,
                    text: "Очень довольна! Всё работает как часы. Интерфейс простой и удобный."
                },
                {
                    id: 8,
                    author: "Алексей Р.",
                    rating: 4,
                    text: "Надежный и безопасный обменник. Рекомендую. Поддержка оперативно отвечает."
                },
                {
                    id: 9,
                    author: "Татьяна Ш.",
                    rating: 5,
                    text: "Отличный сервис для обмена криптовалют. Удобный интерфейс и быстрая поддержка."
                }
            ]
            } title="Отзывы наших клиентов"/>

            <CallToAction
                heading="Присоединяйтесь прямо сейчас"
                text="Не ждите, пока мир изменится. Меняйте свой мир уже сегодня. Просто нажмите на бота и начните обмен в несколько кликов. Быстро. Удобно. Анонимно."
                subText="Ваши BTC уже ждут новой трансформации."
                buttonText="Начать обмен"
                buttonLink="https://t.me/Btcbank24com_v2_bot?start=srcWebsiteHomePageCTA"
                imageSrc="/images/home/crypto-transform.png"
                imageAlt="BTC Transformation"
            />

        </>
    );
}
