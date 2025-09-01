'use client'
import React from 'react';
import Calculator from "@/components/main/calculator/Calculator";
import styled from "styled-components";
import {headingColor} from "@/styles/colors";

const WrapperCalculator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    margin-top: 80px;
    gap: 40px;
    
    @media (max-width: 1500px) {
        gap: 32px;
        margin-top: 80px;
    }
    
    @media (max-width: 1300px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
        margin-top: 60px;
    }
    
    @media (max-width: 768px) {
        gap: 20px;
        margin-top: 70px;
        padding: 0 16px;
    }
    
    @media (max-width: 480px) {
        gap: 32px;
        margin-top: 70px;
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
    max-width: 600px;
    
    h2{
        color: ${headingColor};
        font-weight: 700;
        font-size: calc(20px + 0.8vw);
        width: 100%;
        line-height: 1;
        margin: 0;
    }
    
    @media (max-width: 1500px) {
        gap: 10px;
        max-width: 550px;
        
        h2{
            font-size: calc(20px + 0.8vw);   
        }
    }
    
    @media (max-width: 1300px) {
        gap: 8px;
        max-width: 100%;
        text-align: center;
        align-items: center;
        width: 100%;
    }
    
    @media (max-width: 768px) {
        gap: 4px;
        
    }
    
    @media (max-width: 480px) {
        gap: 8px;
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