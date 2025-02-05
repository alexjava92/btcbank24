import {generateMetadata} from '@/app/utils/seo/seo';
import ReferralCalculator from "@/app/referral/ReferralCalculator";
import {seoConfig} from "@/app/utils/seo/seoConfig";
import SeoSchema from "@/app/utils/seo/SeoSchema";
import React from "react";
import globalStyles from "@/styles/GlobalStyles.module.css";

export const metadata = generateMetadata({
    ...seoConfig.referral
});

export default function ReferralPage() {
    return (
        <div className={globalStyles.contentWrapper}>
            <SeoSchema
                pageTitle={seoConfig.referral.title}
                pageDescription={seoConfig.referral.description}
                pageUrl={seoConfig.referral.url}
                breadcrumbs={seoConfig.referral.breadcrumbs}
            />
            <ReferralCalculator/>
        </div>
    );
}
