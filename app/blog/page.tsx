// app/blog/page.tsx
import { generateMetadata } from "@/app/utils/seo/seo";
import BlogList from "@/app/blog/blog-list/BlogList";
import SeoSchema from "@/app/utils/seo/SeoSchema";
import {seoConfig} from "@/app/utils/seo/seoConfig";
import React from "react";

export const metadata = generateMetadata({
    ...seoConfig.blog
});

export default function BlogPage() {
    return (

        <>
            <SeoSchema
                pageTitle={seoConfig.blog.title}
                pageDescription={seoConfig.blog.description}
                pageUrl={seoConfig.blog.url}
                breadcrumbs={seoConfig.blog.breadcrumbs}
            />
            <BlogList />
        </>
    );
}
