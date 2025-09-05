import React, {ChangeEvent, FormEvent, useState} from 'react';
import StyledInput from "@/components/other/StyledInput";
import SubmitBtn from "@/components/other/SubmitBtn";
import styled from "styled-components";
import {primaryColor, textGrayColor} from "@/styles/colors";
import {router} from "next/client";
import {useRouter} from "next/navigation";
import EmailTemplate from "@/components/other/EmailTemplate";
import {renderToStaticMarkup} from "react-dom/server";

const ModalForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 14px;
    button{
        margin-top: 12px;
    }
`
const ModalText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    text-align: center;
    flex-direction: column;
    margin-bottom: 24px;
    h3{
        color: ${primaryColor};
        font-size: calc(20px + 1.2vw);
        margin-bottom: 8px;
        font-weight: 700;
    }
    p{
        font-size: calc(12px + .4vw);
        color: ${textGrayColor};
    }
    @media (max-width: 400px) {
        h3{
            font-size: calc(20px + 1.8vw);
        }
    }
`

interface CalculatorConfig {
    modalTitle: string;
    modalSubtitle: string;
    modalDescription: string;
    modalInstruction: string;
    modalSubmitText: string;
}

const ModalCalculator = ({close, config}: {close: () => void, config: CalculatorConfig}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const calculatorReq = localStorage.getItem('calculateResult')
        if (calculatorReq) {
            const { overdue, debt, payment, whoOwes } = JSON.parse(calculatorReq);

            const htmlContent = `
              <p><b>Имя:</b> ${name}</p>
              <p><b>Телефон:</b> ${phone}</p>
              <p><b>Просрочка:</b> ${overdue}</p>
              <p><b>Сумма долга:</b> ${debt}</p>
              <p><b>Месячный платёж:</b> ${payment}</p>
              <p><b>Кому должен:</b> ${whoOwes}</p>
            `;

            const emailHtml = renderToStaticMarkup(
                <EmailTemplate title="Новая заявка с сайта" content={htmlContent} />
            );

            // Отправка на бек
            await fetch('/api/clients/calculator-result', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    name: name,
                    phone: phone,
                    overdue: overdue,
                    debt: debt,
                    payment: payment,
                    whoOwes: whoOwes,

                })
            })

            close()
            router.push('/thanks')
            // Отправка на почту
            await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    to: "glavcentrekb25@gmail.com",
                    subject: "Заявка с калькулятора",
                    html: emailHtml,
                }),
            });
            setName('')
            setPhone('')
        }else {
            location.reload()
        }

    }


    return (
        <ModalForm onSubmit={handleSubmit}>
            <ModalText>
                <h3>{config.modalTitle}</h3>
                <p>{config.modalSubtitle}</p>
                <p>{config.modalDescription}</p>
                <p>{config.modalInstruction}</p>
            </ModalText>
            <StyledInput
                placeholder={'Имя'}
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <StyledInput
                placeholder={'Номер телефона'}
                inputType={'phone'}
                value={phone}
                onPhoneChange={setPhone}
            />
            <SubmitBtn value={config.modalSubmitText} />
        </ModalForm>
    );
};

export default ModalCalculator;