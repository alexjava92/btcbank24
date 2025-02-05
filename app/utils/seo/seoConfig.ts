// src/config/seoConfig.ts

import PrivacyPolicy from "@/app/privacy-policy/page";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://btcbank24.ru';

export const seoConfig = {
    home: {
        title: 'Обменник криптовалют в Telegram – BTCBank24',
        description: 'Безопасный и быстрый обмен BTC, LTC, USDT, XMR на рубли через Telegram. Анонимность, надёжность и мгновенные транзакции.',
        keywords: 'обменник криптовалют, обмен биткоин, телеграм обменник, BTC, USDT, XMR, LTC',
        url: '/',
        image: '/images/home/crypto-transform.png',
        noIndex: false,
        breadcrumbs: [
            { position: 1, name: "Главная", url: `${baseUrl}/` }
        ]
    },
    obmenBitcoin: {
        title: 'Обмен Биткоин — Надежный BTC Обменник в Телеграм без AML/KYC',
        description: 'Обменяйте Биткоины на рубли в нашем Telegram-обменнике без AML и KYC проверок. Быстрые переводы, лучшие курсы и полная безопасность. Переходите в наш бот!',
        keywords: 'обмен биткоин, обменять биткоины, обменник bitcoin, btc обменник, BTC, USDT, XMR, LTC',
        url: '/obmen-bitcoin',
        image: '/images/obmen-bitcoin/obmen-bitkoinov-na-rubli.jpg',
        noIndex: false,
        breadcrumbs: [
            { position: 1, name: "Главная", url: `${baseUrl}/` },
            { position: 2, name: "Обмен биткоин", url: `${baseUrl}/obmen-bitcoin` }
        ]
    },
    referral: {
        title: 'Реферальная система BtcBank24',
        description: 'В эпоху цифровых иллюзий каждый охотник жаждет наживы. Ты — охотник, и тебе нужно зайти в укромное место, выбрать там 👤Профиль, затем раздел Реферальная программа и скопировать свою уникальную ссылку для приглашения других странников.',
        keywords: 'реферальная система btcbank24, реферальные вознаграждения, заработок на рефералах',
        url: '/referral',
        noIndex: false,
        breadcrumbs: [
            { position: 1, name: "Главная", url: `${baseUrl}/` },
            { position: 2, name: "Реферальная система", url: `${baseUrl}/referral` }
        ]
    },
    privacyPolicy: {
        title: 'Политика конфиденциальности | BTCBank24',
        description: 'Ознакомьтесь с политикой конфиденциальности BTCBank24 и узнайте, как мы обрабатываем ваши данные.',
        url: '/privacy-policy',
        noIndex: true,
        breadcrumbs: [
            { position: 1, name: "Главная", url: `${baseUrl}/` },
            { position: 2, name: "Политика конфиденциальности | BTCBank24", url: `${baseUrl}/privacy-policy` }
        ]
    },
    faq: {
        title: 'Часто задаваемые вопросы | BTCBank24',
        description: 'Ответы на часто задаваемые вопросы по обмену криптовалют.',
        keywords: 'вопросы, FAQ, BTCBank24',
        url: '/faq',
        noIndex: false,
        breadcrumbs: [
            { position: 1, name: 'Главная', url: `${baseUrl}/` },
            { position: 2, name: 'Часто задаваемые вопросы', url: `${baseUrl}/faq` }
        ]
    },
    blog:{
        title: "Блог о криптовалюте и обмене – BtcBank24",
        description: "Полезные статьи о криптовалюте, обмене BTC, USDT, LTC, XMR на рубли. Советы по безопасности, аналитика и новости в мире блокчейна от BtcBank24.",
        keywords: "криптовалюта, обмен BTC, обмен USDT, обмен XMR, блог о криптовалюте, BtcBank24",
        url: "/blog",
        image: "/images/blog/blog-btcbank24.webp",
        noIndex: false,
        breadcrumbs: [
            { position: 1, name: "Главная", url: `${baseUrl}/` },
            { position: 2, name: "Блог", url: `${baseUrl}/blog` }
        ]
    },
    exchangeXmr: {
        title: 'Купить, обменять и продать Monero (XMR) – Пошаговая инструкция без AML/KYC',
        description: 'Обмен, покупка и продажа Monero (XMR) быстро и безопасно. Подробная инструкция по работе через Telegram, выгодные курсы и анонимность без лишних формальностей – ваш проводник в мир цифровой алхимии.',
        keywords: 'обменять монеро, купить xmr, продать монеро, купить монеро, продать монеро за рубли, monero, xmr',
        url: '/obmen-monero',
        image: '/images/obmen-monero/monero.webp',
        noIndex: false,
        breadcrumbs: [
            { position: 1, name: "Главная", url: `${baseUrl}/` },
            { position: 2, name: "Обмен монеро", url: `${baseUrl}/obmen-monero` }
        ]
    },
    // Добавь другие страницы по аналогии
};
