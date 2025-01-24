import React from 'react';
import Image from 'next/image';
import styles from './PhoneFrame.module.css';

type PhoneFrameProps = {
    imageSrc: string;
    imageAlt: string;
};

export const PhoneFrame: React.FC<PhoneFrameProps> = ({ imageSrc, imageAlt }) => {
    return (
        <div className={styles.phoneFrameWrapper}>
            <div className={styles.phoneScreen}>
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={250}
                    height={600}
                    className={styles.responsiveImage}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    }}
                />
            </div>
        </div>
    );
};
