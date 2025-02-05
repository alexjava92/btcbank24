import Link from "next/link";
import { articles } from "@/data/articles";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <h2>Другие статьи</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
