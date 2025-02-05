// components/SearchBar.tsx
"use client";

import { useState, useEffect } from "react";
import { Search, X } from "lucide-react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
}

const SearchBar = ({ onSearch, placeholder = "Поиск статей..." }: SearchBarProps) => {
    const [query, setQuery] = useState("");

    const handleClear = () => {
        setQuery("");
        onSearch("");
    };

    useEffect(() => {
        const timer = setTimeout(() => onSearch(query), 300);
        return () => clearTimeout(timer);
    }, [query]);

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <Search size={20} className={styles.searchIcon} />
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={placeholder}
                    className={styles.input}
                />
                {query && (
                    <button onClick={handleClear} className={styles.clearButton}>
                        <X size={18} />
                    </button>
                )}
            </div>
        </div>
    );
};

export default SearchBar;