'use client'
import React from 'react';
import Calculator from "@/components/main/calculator/Calculator";
import styled from "styled-components";
import {headingColor} from "@/styles/colors";

const WrapperCalculator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 750px;
    height: calc(100vh - 100px);

    margin: 100px 0 80px;
    gap: 40px;
    
    @media (max-width: 1500px) {
        gap: 32px;
    }
    
    @media (max-width: 1300px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        margin: 120px 0 80px;
        height: 100%;
    }
    
    @media (max-width: 768px) {
        gap: 20px;
        margin: 120px 0 20px;
        padding: 0 16px;
    }
    
    @media (max-width: 480px) {
        gap: 32px;
        margin-top: 90px;
        padding: 0 12px;
    }
`
const TextCalculator = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 16px;
    flex: 1;
    max-width: 700px;
    
    h2{
        color: ${headingColor};
        font-weight: 700;
        font-size: calc(32px + 2vw);
        width: 100%;
        line-height: 1.2;
        margin: 0 0 24px;
    }
    h3{
        color: ${headingColor};
        font-weight: 400;
        font-size: calc(24px + 1vw);
        width: 100%;
        line-height: 1.1;
        margin: 0 0 54px;
    }
    p{
        color: ${headingColor};
        font-weight: 100;
        font-size: calc(18px + .4vw);
        width: 100%;
        line-height: 1;
        margin: 0;
    }
    
    @media (max-width: 1500px) {
        gap: 10px;
        max-width: 600px;
        
    }
    
    @media (max-width: 1300px) {
        gap: 8px;
        text-align: center;
        align-items: center;
        width: 100%;
    }
    
    @media (max-width: 768px) {
        gap: 4px;
        h3{
            margin: 0 0 12px;
        }
        h4{
            margin: 0 0 6px;
        }
    }
    
    @media (max-width: 480px) {
        gap: 8px;
    }
`

const CalculatorSection = () => {
    return (
        <WrapperCalculator>
            <TextCalculator>
                <h2>Законное списание долгов с гарантией под ключ</h2>
                <h3>Узнайте подходите ли Вы под процедуру списания по 127-Ф3?</h3>
                <p>Заполните калькулятор и узнайте результат за 5 секунд!</p>
            </TextCalculator>
            <Calculator blogCalculator={false} />
        </WrapperCalculator>
    );
};

export default CalculatorSection;