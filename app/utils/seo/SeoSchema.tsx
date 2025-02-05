import Head from 'next/head';
import Script from "next/script";

interface FAQItem {
    question: string;
    answer: string;
}

interface Breadcrumb {
    position: number;
    name: string;
    url: string;
}

interface SeoSchemaProps {
    pageTitle: string;
    pageDescription: string;
    pageUrl: string;
    pageImage?: string;
    breadcrumbs?: Breadcrumb[];
    faqData?: FAQItem[];
    organizationInfo?: {
        name: string;
        url: string;
        logo: string;
        description: string;
        socialLinks: string[];
    };
}

const SeoSchema = ({
                       pageTitle,
                       pageDescription,
                       pageUrl,
                       pageImage = '/images/default-image.jpg',
                       breadcrumbs = [],
                       faqData = [],
                       organizationInfo = {
                           name: 'BtcBank24',
                           url: 'https://btcbank24.ru',
                           logo: 'https://btcbank24.ru/images/logo/logo.png',
                           description: 'Обмен криптовалют BTC, LTC, USDT, XMR на рубли через Telegram.',
                           socialLinks: [
                               'https://t.me/Btcbank24com_v2_bot',
                           ],
                       }
                   }: SeoSchemaProps) => {

    const fullPageUrl = pageUrl.startsWith('https')
        ? pageUrl
        : `${process.env.NEXT_PUBLIC_SITE_URL}${pageUrl}`;



    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "name": organizationInfo.name,
                "url": organizationInfo.url,
                "logo": organizationInfo.logo,
                "description": organizationInfo.description,
                "sameAs": organizationInfo.socialLinks
            },
            {
                "@type": "WebPage",
                "name": pageTitle,
                "description": pageDescription,
                "url": fullPageUrl,
                "image": pageImage
            },
            breadcrumbs.length > 0 && {
                "@type": "BreadcrumbList",
                "itemListElement": breadcrumbs.map(breadcrumb => ({
                    "@type": "ListItem",
                    "position": breadcrumb.position,
                    "name": breadcrumb.name,
                    "item": breadcrumb.url
                }))
            },
            faqData.length > 0 && {
                "@type": "FAQPage",
                "mainEntity": faqData.map(({ question, answer }) => ({
                    "@type": "Question",
                    "name": question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": answer
                    }
                }))
            }
        ].filter(Boolean) // Удаляем пустые элементы
    };

    return (

            <Script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />

    );
};

export default SeoSchema;
