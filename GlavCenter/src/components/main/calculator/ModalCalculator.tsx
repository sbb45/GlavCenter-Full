import React, {ChangeEvent, FormEvent, useState} from 'react';
import StyledInput from "@/components/other/StyledInput";
import SubmitBtn from "@/components/other/SubmitBtn";
import styled from "styled-components";
import {lightTextColor, primaryColor, textGrayColor} from "@/styles/colors";
import {router} from "next/client";

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

const ModalCalculator = ({close}: any) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const calculatorReq = localStorage.getItem('calculateResult')
        if (calculatorReq) {
            const { overdue, debt, payment, whoOwes } = JSON.parse(calculatorReq);

            const res =await fetch('/api/calculator-result', {
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
            const data = await res.json()
            console.log(data)
        }else {
            location.reload()
        }

    }


    return (
        <ModalForm onSubmit={handleSubmit}>
            <ModalText>
                <h3>Поздравляем!</h3>
                <p>Вы сможете списать свои задолженности по закону</p>
                <p>Наш специалист расскажет подробности по телефону</p>
                <p>От вас потребуется Номер телефона и Имя</p>
            </ModalText>
            <StyledInput
                placeholder={'Имя'}
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
            <StyledInput
                placeholder={'Номер телефона'}
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
            />
            <SubmitBtn value={'Отправить заявку'} />
        </ModalForm>
    );
};

export default ModalCalculator;