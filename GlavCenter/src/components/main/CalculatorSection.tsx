'use client'
import React from 'react';
import Calculator from "@/components/main/calculator/Calculator";
import styled from "styled-components";

const WrapperCalculator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    margin-top: 120px;
`
const TextCalculator = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 32px;
    h2{
        font-weight: 700;
        font-size: calc(24px + 1vw);
        width: 70%;
    }
`

const CalculatorSection = () => {
    return (
        <WrapperCalculator>
            <TextCalculator>
                <h2>Спишем ваши долги законно с гарантией под ключ</h2>
                <h2>Узнайте сколько Вы сможете погасить с нашей помощью!</h2>
            </TextCalculator>
            <Calculator />
        </WrapperCalculator>
    );
};

export default CalculatorSection;