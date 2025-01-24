'use client';

import React from "react";
import styles from "./Button.module.css";

type ButtonSize = "small" | "medium" | "large";
type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    size: ButtonSize;
    variant: ButtonVariant;
    disabled?: boolean;
    startIcon?: React.ReactNode; // Иконка слева
    endIcon?: React.ReactNode;   // Иконка справа
};

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           onClick,
                                           size,
                                           variant,
                                           disabled = false,
                                           startIcon,
                                           endIcon,
                                       }) => (
    <button
        onClick={onClick}
        disabled={disabled}
        className={`${styles.button} ${styles[size]} ${styles[variant]}`}
    >
        {startIcon && <span>{startIcon}</span>}
        {children}
        {endIcon && <span>{endIcon}</span>}
    </button>
);

export default Button;
