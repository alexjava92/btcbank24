import React from 'react';
import Link from 'next/link';
import { FaVk, FaTelegramPlane } from 'react-icons/fa';
import styles from './Footer.module.css';

const Footer = () => (
    <footer className={styles.footerWrapper}>
        <div className={styles.footerContent}>
            <p className={styles.copyright}>
                © 2017-2025 BTCBank24. Все права защищены.
            </p>
            <div className={styles.socialLinks}>
                {/*<Link
                    href="https://vk.com/btbank24"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="VK"
                    className={styles.socialLink}
                >
                    <FaVk size={24} />
                </Link>*/}
                <Link
                    href="https://t.me/Btcbank24com_v2_bot?start=srcWebsiteFooter"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Telegram"
                    className={styles.socialLink}
                >
                    <FaTelegramPlane size={24} />
                </Link>
            </div>
            <div className={styles.legalLinks}>
                <Link href="/privacy-policy" className={styles.legalLink}>
                    Политика конфиденциальности
                </Link>
                {/*<Link href="/public-offer" className={styles.legalLink}>
                    Публичная оферта
                </Link>*/}
            </div>
        </div>
    </footer>
);

export default Footer;
