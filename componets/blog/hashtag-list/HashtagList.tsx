"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./HashtagList.module.css";

interface HashtagListProps {
    hashtags: string[];
    onHashtagClick: (hashtag: string) => void;
    selectedHashtag: string | null;
    maxVisible?: number;
}

const HashtagList = ({ hashtags, onHashtagClick, maxVisible = 10, selectedHashtag }: HashtagListProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [visibleHashtags, setVisibleHashtags] = useState<string[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setVisibleHashtags(hashtags.slice(0, maxVisible));
    }, [hashtags, maxVisible]);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
        setVisibleHashtags(!isExpanded ? hashtags : hashtags.slice(0, maxVisible));
    };

    return (
        <div className={styles.hashtagList} ref={containerRef}>
            {visibleHashtags.map((hashtag, index) => (
                <span
                    key={index}
                    className={`${styles.hashtag} ${selectedHashtag === hashtag ? styles.active : ""}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onHashtagClick(hashtag);
                    }}
                >
    #{hashtag}
</span>
            ))}
            {hashtags.length > maxVisible && (
                <button className={styles.expandButton} onClick={handleToggleExpand}>
                    {isExpanded ? "Свернуть" : `+${hashtags.length - maxVisible}`}
                </button>
            )}
        </div>
    );
};

export default HashtagList;
