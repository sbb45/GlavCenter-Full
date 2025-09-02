'use client'
import React from 'react';
import styled from "styled-components";
import {headingColor, primaryColor, textColor} from "@/styles/colors";
import {ContentLeft, ImageRight, Section} from "@/app/page.styled";
import InfoBlock from "@/components/main/InfoBlock";
import Calculator from "@/components/main/calculator/Calculator";
import CalculatorSection from "@/components/main/CalculatorSection";

interface CardData {
    value: string;
    label: string;
}

interface StartContent {
    title: string;
    cards: CardData[];
}
interface ServiceItem {
    id: string;
    title: string;
    content: { document: any };
}

interface StartSectionProps {
    content: StartContent;
    services: any;
}

const Title = styled.h1`
    width: 100px;
    font-size: calc(45px + 3vw);
    font-weight: 700;
    line-height: 1;
    color: ${headingColor};
    margin: 0 0 2rem;
    @media (max-width: 470px) {
        font-size: calc(40px + 3vw);
    }
    @media (max-width: 420px) {
        font-size: calc(32px + 1.8vw);
    }
`
const Cards = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    margin-top: 24px;
    @media (max-width: 800px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 24px;
    }


`
const Card = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    margin-right: 140px;
    &:nth-last-child(1){
        margin-right: 0;
    }
    h4{
        color: ${primaryColor};
        font-weight: 900;
        font-size: 64px;
    }
    h3{
        font-size: calc(18px + 0.5vw);
        font-weight: 700;
        color: ${textColor};
        text-wrap: balance;
        width: 160px;
    }
    @media (max-width: 1500px) {
        margin-right: 80px;
    }
    @media (max-width: 800px) {
        margin-right: 0;
    }
    @media (max-width: 470px) {
        &:nth-child(1) {
            order: 1;
        }
        &:nth-child(2) {
            order: 3;
        }
        &:nth-child(3) {
            order: 2;
        }
        h4{
            font-size: calc(40px + 2vw);
        }
    }
`

const StartSection: React.FC<StartSectionProps> = ({ content, services}) => {
    const title = content?.title || 'БАНКРОТСТВО ФИЗИЧЕСКИХ ЛИЦ';

    // Дефолтные карточки на случай если content.cards отсутствует
    const defaultCards = [
        { value: '20К', label: 'Счастливых клиентов' },
        { value: '10МЛРД', label: 'Списано долгов' },
        { value: '137', label: 'Офисов по всей стране' }
    ];

    const cardsToRender = content?.cards?.length ? content.cards : defaultCards;

    return (
        <Section>
            <ContentLeft>
                <Title>{content?.title || title}</Title>

                <Cards>
                    {cardsToRender.map((card, idx) => (
                        <Card key={idx}>
                            <h4>{card.value}</h4>
                            <h3>{card.label}</h3>
                        </Card>
                    ))}
                </Cards>

                <InfoBlock services={services} />
            </ContentLeft>
            <ImageRight $num={3} />
        </Section>
    );
};

export default StartSection;