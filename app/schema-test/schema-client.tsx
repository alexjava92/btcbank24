"use client";

import { useEffect, useState } from "react";

export default function ClientChecker() {
    const [envCheck, setEnvCheck] = useState('');

    useEffect(() => {
        console.log('Client-side: checking for schema markup...');
        const schemaElement = document.querySelector('script[type="application/ld+json"]');
        if (schemaElement instanceof HTMLScriptElement) {
            console.log('Schema.org found in DOM:', schemaElement.textContent);
        } else {
            console.error('Schema.org not found in DOM!');
        }

        setEnvCheck(process.env.NEXT_PUBLIC_SITE_URL || 'URL_NOT_DEFINED');
        console.log('Client-side: NEXT_PUBLIC_SITE_URL:', process.env.NEXT_PUBLIC_SITE_URL);
    }, []);

    return (
        <div style={{ padding: '10px', marginTop: '20px', border: '1px solid #ddd' }}>
            <h2>Клиентская проверка</h2>
            <p><strong>NEXT_PUBLIC_SITE_URL (Client):</strong> {envCheck}</p>
        </div>
    );
}
