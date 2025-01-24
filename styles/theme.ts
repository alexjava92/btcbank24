import { DefaultTheme } from 'styled-components';

const gradients = {
    primary: 'linear-gradient(135deg, #FE6C3F, #FF9B6C, #FECB85)', // Оранжевый с переходом к теплым пастельным тонам
    hoverPrimary: 'linear-gradient(135deg, #FF9B6C, #FECB85, #FE6C3F)', // Реверсивный градиент для интерактивности
    secondary: 'linear-gradient(135deg, #2C3341, #2E3544, #3A4555)', // Темные оттенки с легким градиентным переходом
    hoverSecondary: 'linear-gradient(135deg, #3A4555, #2E3544, #2C3341)', // Реверсивный вариант для второстепенных элементов
    accent: 'linear-gradient(135deg, #FF9B6C, #FFD4B8, #FFE7D4)', // Мягкие оттенки для акцентных деталей
};

const theme: DefaultTheme = {
    colors: {
        primary: '#FE6C3F', // Bright orange for primary actions
        secondary: '#2C3341', // Dark gray-blue for secondary actions
        background: '#F8F9FA', // Light gray background
        text: '#000000', // Black for text
        cardBackground: '#FFFFFF', // White for cards
        disabled: '#CCC', // Light gray for disabled elements
        disabledText: '#666', // Gray for disabled text
        subtitle: '#2E3544', // Slightly lighter dark gray-blue for subtitles
        accent: '#FF9B6C', // Softer orange for highlights
    },
    gradients, // Gradients used for styles
    commonStyles: {
        gradientText: `
            background: ${gradients.primary};
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `,
    },
};

export default theme;
