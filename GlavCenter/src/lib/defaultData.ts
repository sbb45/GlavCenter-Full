// Дефолтные данные для всех разделов сайта

export const DEFAULT_HOME_CONTENT = {
    start: {
        title: "Спишем ваши долги по закону",
        subtitle: "Банкротство физических лиц",
        description: "Помогаем избавиться от долгов законно и сохранить имущество",
        buttonText: "Получить консультацию",
        cards: [
            {
                value: "20 000+",
                label: "Довольных клиентов"
            },
            {
                value: "98%",
                label: "Успешных дел"
            },
            {
                value: "15",
                label: "Лет опыта"
            }
        ]
    },
    about: {
        title: "О компании",
        text: "ГлавЦентр - ведущая компания в области банкротства физических лиц. Мы помогаем людям решать финансовые проблемы и списывать долги законным путем.",
        description: "ГлавЦентр - ведущая компания в области банкротства физических лиц",
        features: [
            {
                title: "Более 20 000 клиентов",
                description: "Успешно помогли списать долги"
            },
            {
                title: "Гарантия результата",
                description: "Если не списали долги - вернем деньги"
            },
            {
                title: "Бесплатная консультация",
                description: "Получите консультацию от экспертов"
            }
        ]
    }
};

export const DEFAULT_SERVICES = [
    {
        id: "1",
        title: "Банкротство физических лиц",
        content: {
            document: {
                type: "root",
                children: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Полное списание долгов через процедуру банкротства. Защита имущества и освобождение от обязательств."
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        id: "2",
        title: "Реструктуризация долгов",
        content: {
            document: {
                type: "root",
                children: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Пересмотр условий кредитных договоров. Снижение платежей и продление сроков."
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        id: "3",
        title: "Защита от коллекторов",
        content: {
            document: {
                type: "root",
                children: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Правовая защита от незаконных действий коллекторов. Прекращение звонков и угроз."
                            }
                        ]
                    }
                ]
            }
        }
    }
];

export const DEFAULT_ADVANTAGES = [
    {
        id: "1",
        title: "Опыт и экспертиза",
        content: {
            document: {
                type: "root",
                children: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Более 10 лет опыта в сфере банкротства. Команда квалифицированных юристов."
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        id: "2",
        title: "Гарантия результата",
        content: {
            document: {
                type: "root",
                children: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Если не достигли результата - вернем деньги. Прозрачные условия сотрудничества."
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        id: "3",
        title: "Индивидуальный подход",
        content: {
            document: {
                type: "root",
                children: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Каждый клиент получает персонального менеджера и индивидуальную стратегию."
                            }
                        ]
                    }
                ]
            }
        }
    }
];

export const DEFAULT_REVIEWS = [
    {
        id: "1",
        image: {
            id: "1",
            url: "/images/review.jpg"
        },
        content: {
            document: {
                type: "root",
                children: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Отличная компания! Помогли списать долги на 2 миллиона рублей. Все прошло быстро и профессионально."
                            }
                        ]
                    }
                ]
            }
        }
    },
    {
        id: "2",
        image: {
            id: "2",
            url: "/images/review.jpg"
        },
        content: {
            document: {
                type: "root",
                children: [
                    {
                        type: "paragraph",
                        children: [
                            {
                                type: "text",
                                text: "Спасибо за помощь! Теперь я свободен от долгов. Рекомендую всем, кто оказался в сложной ситуации."
                            }
                        ]
                    }
                ]
            }
        }
    }
];

export const DEFAULT_HEADER = {
    logo: "/logo.svg",
    phone: "+7 (800) 555-35-35",
    email: "info@glavcentr.ru",
    address: "г. Москва, ул. Примерная, д. 1"
};

export const DEFAULT_FOOTER = {
    company: "ООО 'ГлавЦентр'",
    address: "г. Москва, ул. Примерная, д. 1",
    phone: "+7 (800) 555-35-35",
    email: "info@glavcentr.ru",
    workingHours: "Пн-Пт: 9:00-18:00",
    schedule: "пн-пт 10:00-19:00 сб 10:00-15:00",
    dayOff: "вс выходной",
    copyright: "© 2024 ГлавЦентр. Все права защищены."
};
