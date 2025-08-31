import { NextResponse } from 'next/server';

// Дефолтные значения калькулятора
const DEFAULT_CONFIG = {
    title: 'Калькулятор',
    overdueTitle: 'Имеются ли просрочки?',
    debtTitle: 'Сумма долга',
    paymentTitle: 'Месячный платёж',
    whoOwesTitle: 'Перед кем долги?',
    debtMax: 1000000,
    paymentMax: 40000,
    overdueOptions: ["<1 месяца", ">1 месяца", ">6 месяцев", ">1 года", "Плачу вовремя"],
    whoOwesOptions: ["МФО", "Штрафы", "Налоги", "Банки", "ЖКХ", "Другой вариант"],
    submitButtonText: 'Расчитать стоимость',
    modalTitle: 'Поздравляем!',
    modalSubtitle: 'Вы сможете списать свои задолженности по закону',
    modalDescription: 'Наш специалист расскажет подробности по телефону',
    modalInstruction: 'От вас потребуется Номер телефона и Имя',
    modalSubmitText: 'Отправить заявку'
};

export async function GET() {
    const query = `
        query CalculatorConfig {
            calculators(where: { isActive: { equals: "active" } }, take: 1) {
                title
                overdueTitle
                debtTitle
                paymentTitle
                whoOwesTitle
                debtMax
                paymentMax
                overdueOptions
                whoOwesOptions
                submitButtonText
                modalTitle
                modalSubtitle
                modalDescription
                modalInstruction
                modalSubmitText
            }
        }
    `;

    try {
        const res = await fetch("http://localhost:4000/admin/api/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
        });

        if (!res.ok) {
            const text = await res.text();
            throw new Error(`GraphQL request failed: ${res.status} ${res.statusText}\n${text}`);
        }

        const { data } = await res.json();
        
        // Возвращаем первую активную конфигурацию или дефолтные значения
        const config = data.calculators[0] || DEFAULT_CONFIG;

        return NextResponse.json(config);
    } catch (error) {
        console.error("Failed to fetch calculator config:", error);
        
        // Возвращаем дефолтные значения в случае ошибки
        return NextResponse.json(DEFAULT_CONFIG);
    }
}
