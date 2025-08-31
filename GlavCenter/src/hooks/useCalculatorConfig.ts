import { useState, useEffect } from 'react';

interface CalculatorConfig {
    title: string;
    overdueTitle: string;
    debtTitle: string;
    paymentTitle: string;
    whoOwesTitle: string;
    debtMax: number;
    paymentMax: number;
    overdueOptions: string[];
    whoOwesOptions: string[];
    submitButtonText: string;
    modalTitle: string;
    modalSubtitle: string;
    modalDescription: string;
    modalInstruction: string;
    modalSubmitText: string;
}

// Дефолтные значения калькулятора
const DEFAULT_CONFIG: CalculatorConfig = {
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

export function useCalculatorConfig() {
    const [config, setConfig] = useState<CalculatorConfig>(DEFAULT_CONFIG);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchConfig = async () => {
            try {
                setLoading(true);
                const response = await fetch('/api/calculator/config');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                setConfig(data);
                setError(null);
            } catch (err) {
                console.error('Failed to fetch calculator config:', err);
                setError(err instanceof Error ? err.message : 'Unknown error');
                // Оставляем дефолтные значения при ошибке
            } finally {
                setLoading(false);
            }
        };

        fetchConfig();
    }, []);

    return { config, loading, error };
}
