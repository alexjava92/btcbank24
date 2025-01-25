import { Metadata } from 'next';

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://btcbank24.ru');


interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    url: string;
    image?: string;
    noIndex: boolean;
}

export function generateMetadata({
                                     title,
                                     description,
                                     keywords,
                                     url,
                                     image,
                                     noIndex,
                                 }: SEOProps): Metadata {
    return {
        title,
        description,
        keywords: keywords,
        metadataBase,
        openGraph: {
            title,
            description,
            url: `${metadataBase.origin}${url}`,
            type: 'website',
            images: [
                {
                    url: `${metadataBase.origin}${image || '/images/home/crypto-transform.png'}`,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [`${metadataBase.origin}${image || '/images/home/crypto-transform.png'}`],
        },
        robots: noIndex ? 'noindex, nofollow' : 'index, follow',
        other: {
            'vk:image': `${metadataBase.origin}${image || '/images/home/crypto-transform.png'}`,
            'vk:title': title,
            'vk:description': description,
            'vk:url': `${metadataBase.origin}${url}`,
            'telegram:channel': `${metadataBase.origin}${url}`,
            'theme-color': '#ffffff',
            'viewport': 'width=device-width, initial-scale=1, maximum-scale=1',
        },
    };
}
