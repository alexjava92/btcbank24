btcbank24/
├── app/
│   ├── btc-to-rub/           # Уникальная посадочная страница для BTC to USDT
│   │   ├── page.tsx
│   ├── usdt-to-rub/           # Уникальная посадочная страница для USDT to ETH
│   │   ├── page.tsx
│   ├── eth-to-btc/            # Уникальная посадочная страница для ETH to BTC
│   │   ├── page.tsx
│   ├── privacy-policy/        # Политика конфиденциальности
│   │   ├── page.tsx
│   ├── public-offer/          # Публичная оферта
│   │   ├── page.tsx
│   ├── referral/              # Реферальная система
│   │   ├── page.tsx
│   ├── blog/                  # Раздел блога
│   │   ├── layout.tsx         # Макет для блога
│   │   ├── page.tsx           # Главная страница блога
│   │   ├── [slug]/            # Страницы отдельных статей блога
│   │   │   ├── page.tsx
│   ├── layout.tsx             # Глобальный макет сайта
│   ├── page.tsx               # Главная страница
├── components/                # Общие компоненты
│   
├── lib/                       # Утилиты и подключение базы данных
│   ├── db.ts                  # Конфигурация подключения к PostgreSQL
├── public/                    # Публичные файлы
│   ├── images/                # Папка для изображений
│   │   ├── landing/
│   │   │   ├── btc-to-usdt.jpg
│   │   │   ├── usdt-to-eth.jpg
├── styles/                    # Стили
│   ├── GlobalStyles.ts        # Глобальные стили
│   ├── theme.ts               # Тема для styled-components
├── types/                     # Типы для TypeScript
│   ├── blog.d.ts              # Типы для данных блога
├── .gitignore                 # Игнорируемые файлы для Git
├── next.config.js             # Конфигурация Next.js
├── package.json               # Зависимости и скрипты проекта
├── tsconfig.json              # Конфигурация TypeScript
