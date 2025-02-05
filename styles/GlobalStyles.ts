import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: ${({ theme }) => theme.colors.primary}; /* Primary color */
    --secondary-color: ${({ theme }) => theme.colors.secondary}; /* Secondary color */
    --background-color: ${({ theme }) => theme.colors.background};
    --text-color: ${({ theme }) => theme.colors.text};
    --disabled-color: ${({ theme }) => theme.colors.disabled};
    --disabled-text-color: ${({ theme }) => theme.colors.disabledText};
    --card-background: ${({ theme }) => theme.colors.cardBackground};
    --subtitle-color: ${({ theme }) => theme.colors.subtitle};
    --primary-gradient: ${({ theme }) => theme.gradients.primary}; /* Primary gradient */
    --hover-primary-gradient: ${({ theme }) => theme.gradients.hoverPrimary}; /* Hover gradient for primary */
    --secondary-gradient: ${({ theme }) => theme.gradients.secondary}; /* Secondary gradient */
    --hover-secondary-gradient: ${({ theme }) => theme.gradients.hoverSecondary}; /* Hover gradient for secondary */
    --accent-gradient: ${({ theme }) => theme.gradients.accent}; /* Accent gradient */

    /* Дополнительные переменные */
    --max-width: 1200px; /* Максимальная ширина для контейнеров */
    --transition-duration: 0.3s; /* Стандартная длительность анимации */
    --font-family: 'Arial', sans-serif; /* Основной шрифт */
  }

  /* Сброс базовых стилей */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--font-family);
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color var(--transition-duration);
  }

  a:hover {
    color: var(--secondary-color);
  }

  /* Заголовки */
  h1, h2, h3, h4, h5, h6 {
    font-weight: bold;
    line-height: 1.2;
    color: var(--text-color);
    
  }

  h1 {
    font-size: 3.5rem; /* Увеличенный размер для h1 */
  }

  h2 {
    font-size: 2.8rem; /* Пропорциональное увеличение для h2 */
  }

  h3 {
    font-size: 2rem; /* Пропорциональное увеличение для h3 */
  }

  h4 {
    font-size: 1.8rem; /* Пропорциональное увеличение для h4 */
  }

  h5 {
    font-size: 1.75rem; /* Пропорциональное увеличение для h5 */
  }

  h6 {
    font-size: 1.5rem; /* Пропорциональное увеличение для h6 */
  }


  /* Кнопки */
  button {
    font-family: var(--font-family);
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color var(--transition-duration), transform var(--transition-duration);
  }

  button:hover {
    transform: translateY(-2px);
    color: #fff;
  }

  button:disabled {
    background-color: var(--disabled-color);
    color: var(--disabled-text-color);
    cursor: not-allowed;
  }

  /* Медиа-запросы */
  @media (max-width: 1200px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2rem;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }
    h2 {
      font-size: 1.75rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }


  /* Утилиты */
  .container {
    max-width: var(--max-width);
    padding: 3rem;
    margin-bottom: 10rem;
  }

  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }

  .hidden {
    display: none !important;
  }

  .visible {
    display: block !important;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid {
    display: grid;
    gap: 1rem;
  }

  .scroll {
    padding-top: 80px;
    margin-top: -80px;
  }
`;

export default GlobalStyles;
