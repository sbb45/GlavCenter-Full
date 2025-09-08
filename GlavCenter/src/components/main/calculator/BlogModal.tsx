'use client'
import React from 'react';
import Calculator from "@/components/main/calculator/Calculator";
import styled from "styled-components";
import {headingColor, primaryColor} from "@/styles/colors";

const WrapperCalculator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    


    gap: 40px;
    
    @media (max-width: 1500px) {
        gap: 32px;
    }
    
    @media (max-width: 1300px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 24px;
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
    gap: 8px;
    flex: 1;
    max-width: 700px;
    
    h2{
        color: ${headingColor};
        font-weight: 700;
        font-size: calc(24px + 1vw);
        width: 100%;
        line-height: 1.1;
        margin: 0 0 24px;
        span{
            color: ${primaryColor};
        }
        @media (max-width: 1300px) {
            font-size: calc(20px + .6vw);
            margin: 0 0 6px;
        }
    }
    h3{
        color: ${headingColor};
        font-weight: 700;
        font-size: calc(18px + .5vw);
        width: 100%;
        margin: 0 0 24px;
        @media (max-width: 1300px) {
            font-size: calc(14px + .4vw);
            margin: 0 0 6px;
        }
    }
    p{
        color: ${headingColor};
        font-weight: 100;
        font-size: calc(16px + .4vw);
        width: 100%;
        line-height: 1;
        margin: 0;
        @media (max-width: 1300px) {
            font-size: calc(12px + .3vw);
        }
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

const BlogModal = () => {
    return (
        <WrapperCalculator>
            <TextCalculator>
                <h2>В 2025 ГОДУ <span>ПОЯВИЛАСЬ ВОЗМОЖНОСТЬ</span> СПИСАТЬ ВСЕ ДОЛГИ И КРЕДИТЫ <span>ПО СПЕЦИАЛЬНОЙ ЦЕНЕ</span></h2>
                <h3>У ГлавЦентра есть план выхода из кризиса:</h3>
                <p>1. Полный анализ Вашей ситуации</p>
                <p>2. Консультация профессионального юриста</p>
                <p>3. Готовое решение по вашим вопросам с долгами</p>
            </TextCalculator>
            <Calculator blogCalculator={true} />
        </WrapperCalculator>
    );
};

export default BlogModal;