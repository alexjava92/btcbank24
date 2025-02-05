export const faqData = [
    {
        id: 'q1',
        question: 'Как обменять биткоины на рубли?',
        answer: 'Вы можете обменять биткоины на рубли через наш телеграм-бот, который предлагает выгодные курсы и минимальные комиссии.',
        link: {
            text: 'Инструкция',
            url: '/obmen-bitcoin'
        }
    },
    {
        id: 'q2',
        question: 'Какие валюты поддерживаются?',
        answer: 'Мы поддерживаем следующие валюты: BTC, LTC, USDT, XMR, RUB. Вы можете выбрать удобную для вас валюту для обмена.'
    },
    {
        id: 'q3',
        question: 'Как долго занимает обработка обмена?',
        answer: 'Обычно обработка обмена занимает от 5 до 30 минут в зависимости от загруженности сети и выбранного способа оплаты.'
    },
    {
        id: 'q4',
        question: 'Есть ли у вас поддержка клиентов?',
        answer: 'Да, наша служба поддержки доступна ежедневно с 8:00 до 23:00 и готова помочь вам с любыми вопросами по обмену валют.',
        link: {
            text: 'Поддержка',
            url: 'https://t.me/Btcbank24com_bot'
        }
    },
    {
        id: 'q5',
        question: 'Какие комиссии взимаются при обмене?',
        answer: 'Размер комиссии зависит от направления и суммы обмена. Чем больше сумма, тем ниже комиссия. Наши условия прозрачны и указаны в боте при оформлении обмена. Мы рекомендуем создать обмен в нужном направлении — бот автоматически рассчитает курс и комиссию по вашей заявке, предоставив лучшие условия для обмена.'
    },
    {
        id: 'q6',
        question: 'Как долго проверяется платеж на карту?',
        answer: 'Для обработки платежей наш обменник использует сторонний платежный сервис. Время проверки может занять до 60 минут. В случае отклонения платежа мы можем запросить у вас банковскую выписку или видеозапись, демонстрирующую процесс входа в мобильный банк и открытие чека платежа.'
    },
    {
        id: 'q7',
        question: 'Почему нет свободных реквизитов?',
        answer: 'Высокий спрос на реквизиты может приводить к их временному отсутствию. Как только появляются новые реквизиты, они становятся доступными для оплаты. Мы рекомендуем периодически проверять их наличие (повторно создавать обмен рекомендуем способ СБП), чтобы успеть воспользоваться предложением.'
    },
    {
        id: 'q8',
        question: 'Что такое подтверждение транзакции?',
        answer: 'Подтверждение транзакции – это процесс проверки и записи перевода в блокчейн. Чем больше подтверждений, тем выше гарантия успешного завершения операции. Время подтверждения зависит от нагрузки сети и комиссии. Мы рекомендуем дождаться необходимого количества подтверждений перед завершением сделки.'
    },
    {
        id: 'q9',
        question: 'Сколько времени занимает подтверждение транзакции?',
        answer: 'Время подтверждения зависит от выбранной криптовалюты, загруженности сети и размера комиссии. Обычно процесс занимает от нескольких минут до часа. В периоды высокой нагрузки возможно увеличение времени ожидания. Чтобы ускорить процесс, рекомендуем устанавливать комиссию выше средней или использовать сети с более быстрыми транзакциями, например, Tron или BSC.'
    },
    {
        id: 'q10',
        question: 'Что такое блокчейн?',
        answer: 'Блокчейн – это технология, на которой основаны криптовалюты. Это децентрализованная цепочка блоков с записями обо всех транзакциях, обеспечивающая прозрачность и безопасность. Благодаря блокчейну все переводы необратимы и защищены от подделки. Используется не только для криптовалют, но и в других сферах, таких как смарт-контракты и цифровые активы.'
    },
    {
        id: 'q11',
        question: 'Почему я не вижу монеты у себя на кошельке?',
        answer: 'Если вы не видите монеты на своем кошельке, возможно, транзакция еще не получила необходимое количество подтверждений в блокчейне. Время подтверждения зависит от загруженности сети и комиссии. Вы можете проверить статус транзакции в блокчейн-эксплорере, используя ваш TXID.',
        link: {
            text: 'Проверить транзакцию',
            url: 'https://mempool.space/'
        },
        example: {
            text: 'Пример TXID',
            value: 'b1fea5246b8e1c1f9dba2c6e69f44cfdba7e2d8d6347b50c0f5b4e5d80f5fd0a'
        }
    },
    {
        id: 'q12',
        question: 'Что делать, если у транзакции есть подтверждения, но монет на кошельке нет?',
        answer: 'Если у транзакции есть подтверждения, но монеты не появились на кошельке, проверьте правильность указанного адреса и убедитесь, что ваш кошелек поддерживает эту криптовалюту. Если транзакция отображается в блокчейне Bitcoin, это означает, что средства 100% отправлены на указанный адрес – запись в блокчейне не может быть изменена или отменена. В случае, если адрес был скопирован с ненадежного источника, возможно, средства ушли мошенникам. Мы рекомендуем использовать только официальные кошельки и проверенные источники, а также внимательно проверять адрес перед отправкой.'
    },
    {
        id: 'q13',
        question: 'Как избежать мошенничества при обмене криптовалюты?',
        answer: 'Всегда используйте проверенные обменники и кошельки. Проверяйте адрес кошелька перед отправкой средств и избегайте использования публичных сетей для доступа к кошельку. Используйте двухфакторную аутентификацию для защиты аккаунтов.'
    },
    {
        id: 'q14',
        question: 'Как отменить транзакцию в блокчейне?',
        answer: 'Транзакции в блокчейне необратимы, так как они записываются в распределенную сеть. Если вы отправили средства на неправильный адрес, восстановить их невозможно. Всегда проверяйте адрес перед отправкой.'
    },
    {
        id: 'q15',
        question: 'Что делать, если я указал неверный адрес для обмена?',
        answer: 'Если вы указали неправильный адрес для получения средств, обратитесь в службу поддержки. Однако, в большинстве случаев вернуть средства невозможно, так как транзакции в блокчейне необратимы.'
    },
    {
        id: 'q16',
        question: 'Как работает система защиты данных в вашем сервисе?',
        answer: 'Наш телеграм-бот работает в защищенной среде, обеспечивая полную конфиденциальность ваших данных. Мы используем передовые технологии шифрования, и никакие личные данные не сохраняются. Все операции происходят в рамках Telegram, что добавляет дополнительный уровень безопасности.'
    },
    {
        id: 'q17',
        question: 'Почему мой обмен был отклонен?',
        answer: 'Обмен может быть отклонен, если сумма оплаты не совпадает с указанной в заявке — вы могли отправить больше или меньше средств. В таких случаях обмен автоматически останавливается для защиты ваших средств. Обратитесь в нашу поддержку для уточнения деталей.'
    },
    {
        id: 'q18',
        question: 'Можно ли обменять криптовалюту анонимно?',
        answer: 'Да, наш сервис не проводит проверок AML и KYC, что позволяет вам совершать обмены полностью анонимно. Мы ценим вашу конфиденциальность и не запрашиваем документы или личные данные.'
    },
    {
        id: 'q19',
        question: 'Как мы принимаем оплату?',
        answer: 'Мы принимаем оплату через сторонние платежные сервисы, подключенные к нашему боту. Схема такая: при создании обмена платежный сервис выдает вам реквизиты для оплаты. После вашей оплаты вам нужно прислать чек об оплате боту. Далее начинается проверка платежа, и обмен завершается только после успешного подтверждения от платежного сервиса.'
    }




];