import Head from 'next/head';

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
                       organizationInfo = {
                           name: 'BtcBank24',
                           url: 'https://btcbank24.site',
                           logo: 'https://btcbank24.site/images/logo/logo.png',
                           description: 'Обмен криптовалют BTC, LTC, USDT, XMR на рубли через Telegram.',
                           socialLinks: [
                               'https://t.me/Btcbank24com_v2_bot',
                           ],
                       }
                   }: SeoSchemaProps) => {

    const fullPageUrl = pageUrl.startsWith('http')
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
            }
        ].filter(Boolean) // Удаляем пустые элементы
    };

    return (
        <Head>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
        </Head>
    );
};

export default SeoSchema;
