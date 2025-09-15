import React, {FormEvent, useState} from 'react';
import styled from "styled-components";
import {blackColor, headingColor, whiteColor} from "@/styles/colors";
import {useModal} from "@/providers/ModalProvider";
import RadioButtons from "@/components/main/calculator/RadioButtons";
import PriceRange from "@/components/main/calculator/PriceRange";
import CheckboxBtn from "@/components/main/calculator/CheckboxBtn";
import SubmitBtn from "@/components/other/SubmitBtn";
import ModalCalculator from "@/components/main/calculator/ModalCalculator";
import {useCalculatorConfig} from "@/hooks/useCalculatorConfig";
import Link from "next/link";

const WrapperCalculator = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    padding: 32px 24px;
    background-color: ${whiteColor};
    border-radius: 24px;
    .blockWrapper{
        width: 100%;
    }
    .blockWrapper:nth-last-child(2){
        margin-top: 12px;
    }
    @media (max-width: 700px) {
        margin-bottom: 24px;
    }
    @media (max-width: 560px) {
        width: 100vw;
    }
`
export const QuestionTitle = styled.h3`
    font-size: calc(18px + .5vw);
    font-weight: 700;
    color: ${headingColor};
    text-align: start;
    width: 100%;
    text-wrap: nowrap;
    transition: color .4s ease;
    &.err{
        color: red;
    }
`
export const PolicyConf = styled.p`
    font-size: calc(8px + .3vw);
    max-width: 560px;
    a{
        text-decoration: underline;
        color: ${blackColor}
    }
`

const Calculator = ({blogCalculator}: {blogCalculator: boolean}) => {
    const [overdue, setOverdue] = useState('');
    const [debt, setDebt] = useState(0);
    const [payment, setPayment] = useState(0);
    const [whoOwes, setWhoOwes] = useState<string[]>([]);
    const [errors, setErrors] = useState<string[]>([]);

    const {openModal, closeModal} = useModal();
    const { config } = useCalculatorConfig();

    // Модальное окно
    const handleConfirmModal = async (e: FormEvent) => {
        e.preventDefault()

        //Проверка на пустые поля
        setErrors([])
        const emptyFields: string[] = [];
        if (overdue==='') emptyFields.push('overdue');
        if (debt===0) emptyFields.push('debt');
        if (payment===0) emptyFields.push('payment');
        if (whoOwes.length===0 && !blogCalculator) emptyFields.push('whoOwes')
        if (emptyFields.length > 0){
            console.log(errors)
            setErrors(emptyFields)
            return;
        }

        // Отправка
        localStorage.setItem('calculateResult', JSON.stringify({overdue, debt, payment, whoOwes}))
        openModal(
            <ModalCalculator close={closeModal} config={config} />
        )

    }

    return (
        <WrapperCalculator onSubmit={handleConfirmModal}>
            <div className={'blockWrapper'}>
                <QuestionTitle className={errors.includes('overdue') ? 'err' : ''}>{config.overdueTitle}</QuestionTitle>
                <RadioButtons
                    value={overdue}
                    setValue={setOverdue}
                    options={config.overdueOptions}
                />
            </div>
            <PriceRange
                title={config.debtTitle}
                max={config.debtMax}
                isError={errors.includes('debt')}
                value={debt}
                setValue={setDebt}
            />
            <PriceRange
                title={config.paymentTitle}
                max={config.paymentMax}
                isError={errors.includes('payment')}
                value={payment}
                setValue={setPayment}
            />
            {!blogCalculator &&
                <div className={'blockWrapper'}>
                    <QuestionTitle className={errors.includes('whoOwes') ? 'err' : ''}>{config.whoOwesTitle}</QuestionTitle>
                    <CheckboxBtn
                        value={whoOwes}
                        setValue={setWhoOwes}
                        options={config.whoOwesOptions}
                    />
                </div>
            }
            <SubmitBtn value={blogCalculator ? 'Узнать, можно ли списать долги' : config.submitButtonText} />
            {blogCalculator && (
                <PolicyConf>Отправляя формы на данном сайте, вы даете согласие на <Link href={'https://docs.google.com/document/u/0/d/1fmczwk_G4J-nUB6SjF5SQCzy2Kcb68Hvb43EjF2hE_Y/edit?tab=t.0&pli=1&authuser=0#heading=h.445wxmcfzj8q'}>обработку персональных данных</Link> в соответствии с ФЗ-152 «О персональных данных»<br/>
                    * Оказываем услуги по сопровождению процедуры банкротства в рамках Федерального закона № 127-ФЗ</PolicyConf>
            )}
        </WrapperCalculator>
    );
};

export default Calculator;