import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import {Home, Shield, FileText, Users, ChevronDown, Repeat} from 'lucide-react';
import styles from './Header.module.css';
import Image from "next/image";

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [exchangeDropdown, setExchangeDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    }, [menuOpen]);

    const closeMenu = () => {
        setMenuOpen(false);
        setExchangeDropdown(false);
    };

    const navLinks = [
        {href: '/', label: 'Главная', icon: <Home/>},
        /*{href: '/privacy-policy', label: 'Политика', icon: <Shield/>},*/
        /*{href: '/public-offer', label: 'Оферта', icon: <FileText/>},*/
        {href: '/referral', label: 'Партнёрам', icon: <Users/>},
    ];

    return (
        <header className={`${styles.headerWrapper} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    <Image
                        src="/images/logo/btcbank24.png"
                        alt="BTCBank24 Logo"
                        width={150}
                        height={40}
                    />
                </Link>
                <button
                    className={`${styles.burgerMenu} ${menuOpen ? styles.open : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
                >
                    <div/>
                    <div/>
                    <div/>
                </button>
                <nav className={`${styles.nav} ${menuOpen ? styles.open : styles.closed}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={closeMenu}
                        >
                            {link.icon}
                            {link.label}
                        </Link>
                    ))}
                    <div
                        className={`${styles.dropdown} ${exchangeDropdown ? styles.active : ''}`}
                        onClick={() => setExchangeDropdown(!exchangeDropdown)}

                        tabIndex={0}
                    >
    <span className={styles.navLink}>
        <Repeat/>
        Обмен <ChevronDown/>
    </span>
                        <div className={styles.dropdownMenu}>
                            <Link href="/obmen-bitcoin" className={styles.dropdownItem} onClick={closeMenu}>
                                Обмен биткоин
                            </Link>
                            {/*<Link href="/obmen-bitcoin" className={styles.dropdownItem} onClick={closeMenu}>
                                Купить биткоин
                            </Link>
                            <Link href="/obmen-bitcoin" className={styles.dropdownItem} onClick={closeMenu}>
                                Продать биткоин
                            </Link>*/}
                        </div>
                    </div>

                </nav>
            </div>
        </header>
    );
};

export default Header;
