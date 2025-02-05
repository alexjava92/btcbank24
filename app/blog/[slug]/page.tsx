import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { articles } from "@/data/articles";
import styles from "./ArticlePage.module.css";
import Sidebar from "@/componets/blog/sidebar/Sidebar";
import TableOfContents from "@/componets/pages/table-of-contents/TableOfContentsProps";
import { generateMetadata as createMetadata } from "@/app/utils/seo/seo";
import SeoSchema from "@/app/utils/seo/SeoSchema";
import {FaTelegramPlane, FaVk} from "react-icons/fa";


// Генерация метаданных для страницы
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params; // Ожидаем params
    const article = articles.find((a) => a.slug === slug);
    if (!article) return {};

    return createMetadata({
        title: article.title,
        description: article.description,
        url: `/blog/${article.slug}`,
        image: article.image,
        noIndex: false,
    });
}

type ArticlePageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: ArticlePageProps) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);
    if (!article) return notFound();

    const filePath = path.join(process.cwd(), "public", article.path);
    let content = fs.readFileSync(filePath, "utf8");

    // Автоматически добавляем класс scroll ко всем заголовкам
    content = content.replace(/<(h[1-6])([^>]*)>/g, '<$1 class="scroll"$2>');

    const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${article.slug}`;

    return (
        <div className={styles.container}>

            <SeoSchema
                pageTitle={article.title}
                pageDescription={article.description}
                pageUrl={`/blog/${article.slug}`}
                breadcrumbs={[
                    { position: 1, name: "Главная", url: "/" },
                    { position: 2, name: "Блог", url: "/blog" },
                    { position: 3, name: article.title, url: `/blog/${article.slug}` },
                ]}
            />

            <main className={styles.content}>

                    <p>{article.description}</p>


                {Array.isArray(article.toc) && article.toc.length > 0 && (
                    <TableOfContents items={article.toc} />
                )}

                <article
                    className={styles.articleContent}
                    dangerouslySetInnerHTML={{ __html: content }}
                />

                <div className={styles.shareButtons}>
                    <a href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane size={24} />
                    </a>
                    <a href={`https://vk.com/share.php?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer">
                        <FaVk size={24} />
                    </a>
                </div>

            </main>
            <Sidebar />
        </div>
    );
}
