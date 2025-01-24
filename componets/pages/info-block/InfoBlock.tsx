import React, { ReactNode } from 'react';
import styles from './InfoBlock.module.css';

interface InfoBlockProps {
    children: ReactNode;
}

const InfoBlock: React.FC<InfoBlockProps> = ({  children }) => {
    return (
        <div className={styles.infoContainer}>
            {children}
        </div>
    );
};

export default InfoBlock;
