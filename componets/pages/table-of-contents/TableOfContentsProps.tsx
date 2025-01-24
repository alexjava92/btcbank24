// components/TableOfContents.tsx
import React from 'react';
import styles from './TableOfContents.module.css';

interface TOCSubItem {
    id: string;
    title: string;
}

interface TOCItem {
    id: string;
    title: string;
    subItems?: TOCSubItem[];
}

interface TableOfContentsProps {
    items: TOCItem[];
    title?: string;
}

const TableOfContents: React.FC<TableOfContentsProps> = ({items, title = "Содержание"}) => {
    return (
        <div className={styles.containerFlex}>
            <nav className={styles.container} aria-label="Table of Contents">
                <h2 className={styles.title}>{title}</h2>
                <ul className={styles.list}>
                    {items.map((item) => (
                        <li key={item.id} className={styles.listItem}>
                            <a href={`#${item.id}`} className={styles.link}>
                                {item.title}
                            </a>
                            {item.subItems && item.subItems.length > 0 && (
                                <ul className={styles.subList}>
                                    {item.subItems.map((subItem) => (
                                        <li key={subItem.id} className={styles.subListItem}>
                                            <a href={`#${subItem.id}`} className={styles.subLink}>
                                                {subItem.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default TableOfContents;
