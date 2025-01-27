export const dynamic = 'force-dynamic'; // Принудительный серверный рендеринг

import Head from 'next/head';
import Script from 'next/script';

// Функция для загрузки данных Schema.org на сервере
async function fetchSchemaData() {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "BtcBank24 Test Page",
        "url": process.env.NEXT_PUBLIC_SITE_URL || "URL_NOT_DEFINED",
        "description": "Тестовая страница для проверки Schema.org разметки",
        "author": {
            "@type": "Person",
            "name": "BtcBank24"
        }
    };

    console.log("======== SERVER LOGS ========");
    console.log("Schema data being generated on server:", JSON.stringify(schemaData, null, 2));
    console.log("Process ENV NEXT_PUBLIC_SITE_URL:", process.env.NEXT_PUBLIC_SITE_URL);
    console.log("Current timestamp:", new Date().toISOString());
    console.log("=============================");

    return JSON.stringify(schemaData);
}

export default async function SchemaTestPage() {
    const seoSchema = await fetchSchemaData();

    console.log("======== SERVER RENDER LOGS ========");
    console.log('SchemaTestPage rendered on:', typeof window === 'undefined' ? 'server' : 'client');
    console.log('Schema JSON on render:', seoSchema);
    console.log('Build timestamp:', new Date().toISOString());
    console.log("=============================");

    return (
        <>
            <Head>
                <title>Тест Schema.org</title>
                <meta name="description" content="Тестовая страница для проверки рендеринга разметки Schema.org." />
                <script
                    id="schema-markup"
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: seoSchema }}
                />
            </Head>

            <Script
                id="schema-script"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{ __html: seoSchema }}
            />

            <div style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Тестовая страница Schema.org</h1>
                <p>Проверьте исходный код страницы, чтобы убедиться в наличии JSON-LD разметки.</p>
                <pre>{seoSchema}</pre>
                <p><strong>NEXT_PUBLIC_SITE_URL:</strong> {process.env.NEXT_PUBLIC_SITE_URL || 'URL_NOT_DEFINED'}</p>
                <p><strong>Сборка выполнена:</strong> {new Date().toLocaleString()}</p>
            </div>
        </>
    );
}
