import {seoConfig} from "@/app/utils/seo/seoConfig";
import FullFAQ from "@/app/faq/FullFAQ";
import SeoSchema from "@/app/utils/seo/SeoSchema";
import {generateMetadata} from "@/app/utils/seo/seo";
import React, {Suspense} from "react";


export const metadata = generateMetadata({
    ...seoConfig.faq
});

const FAQPage = () => {


    return (
        <>

            <SeoSchema
                pageTitle={seoConfig.faq.title}
                pageDescription={seoConfig.faq.description}
                pageUrl={seoConfig.faq.url}
                breadcrumbs={seoConfig.faq.breadcrumbs}
            />

            <Suspense fallback={<div>Загрузка...</div>}>
                <FullFAQ/>
            </Suspense>

        </>
    );
};

export default FAQPage;
