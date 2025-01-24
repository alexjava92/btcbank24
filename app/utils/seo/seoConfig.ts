// src/config/seoConfig.ts

import PrivacyPolicy from "@/app/privacy-policy/page";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://btcbank24.site';

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
    }
    // Добавь другие страницы по аналогии
};
