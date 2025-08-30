'use client'
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {headingColor, primaryColor, textColor, textGrayColor} from "@/styles/colors";
import Link from "next/link";

const WrapperInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-top: 80px;

    @media (max-width: 800px) {
        display: none;
    }
`
const ButtonsGroup = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    align-items: start;
    position: relative;
    height: 100%;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        right: -30px;
        width: 3px;
        height: 100%;
        z-index: 1;
        background-color: #e8e8e8;
    }

    @media (max-width: 800px) {
        &::after { display: none; }
    }
`
const Button = styled.button<{$isActive: boolean}>`
    text-align: start;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    min-height: 60px;
    padding: 25px 0;
    color: ${({$isActive})=> $isActive ? primaryColor : textGrayColor};
    position: relative;
    text-wrap: balance;
    width: 240px;
    transition: color .4s ease;
    &:hover{
        color: ${({$isActive})=> $isActive ? primaryColor : headingColor};
    }
`
const ActiveLine = styled.div<{ $activeIndex: number; $isActive: boolean }>`
    position: absolute;
    right: -30px;
    width: 3px;
    background-color: ${primaryColor};
    z-index: 4;
    transition: all 0.5s ease-in-out;
    height: 90px; 
    top: ${({ $activeIndex }) => $activeIndex*100}px; 
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
`;
const TextBlock = styled.div`
    color: ${textColor};
    font-size: calc(20px + .5vw);
    font-weight: 400;
    padding-left: 60px;
    max-width: 700px;
`
const MoreLink = styled(Link)`
    color: ${primaryColor};
    font-weight: 900;
    font-size: calc(20px + .5vw);
    margin: 32px auto 0;
    text-decoration: none;
    position: relative;
    border-bottom: 2px dotted ${headingColor};
    padding-bottom: 2px;
    transition: border-bottom 0.3s ease, color 0.3s;
    &:hover {
        border-bottom: 2px solid ${primaryColor};
    }
`

// Mobile-only accordion styles
const MobileAccordion = styled.div`
    display: none;
    margin-top: 40px;

    @media (max-width: 800px) {
        display: block;
        width: 100%;
    }
`

const AccordionItem = styled.div`
    border-bottom: 1px solid #e8e8e8;
`

const AccordionHeader = styled.button<{ $isOpen: boolean }>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 18px 16px;
    background: transparent;
    border: none;
    font-size: 20px;
    font-weight: 700;
    color: ${headingColor};
    cursor: pointer;

    &:focus { outline: none; }
`

const AccordionIcon = styled.span<{ $isOpen: boolean }>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    color: ${headingColor};
    font-size: 42px;
    font-weight: 100;
    line-height: 1;
    transform: rotate(${({ $isOpen }) => ($isOpen ? 45 : 0)}deg);
    transition: transform .25s ease;
`

const AccordionContent = styled.div<{ $isOpen: boolean }>`
    overflow: hidden;
    transition: max-height .35s ease, padding .35s ease;
    will-change: max-height, padding;
    max-height: ${({ $isOpen }) => ($isOpen ? '500px' : '0')};
    padding: ${({ $isOpen }) => ($isOpen ? '12px 16px 16px 16px' : '0 16px 0 16px')};
    color: ${textColor};
    font-size: 16px;
    pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
`


const InfoBlock = () => {
    const [isActive, setIsActive] = useState(true);
    const [currentText, setCurrentText] = useState("");
    const [activeIndex, setActiveIndex] = useState(0);
    const [openMobileIndex, setOpenMobileIndex] = useState<number | null>(null);

    const texts = {
        "Бесплатный сбор документов": "Сбор документов в банках и госсударственных органов мы осуществляем самостоятельно и БЕСПЛАТНО (включая платные справки)",
        "Без вашего присутствия в суде": "Вам не придется ходить в суд, мы всё сделаем за вас",
        "Без скрытых платежей": "В рамках договора проводим дополнительные юридические услуги бесплатно (отмена судебных приказов)",
    } as const;
    type TextKeys = keyof typeof texts


    useEffect(() => {
        setCurrentText(texts['Бесплатный сбор документов'])
    }, []);
    const handleButtonClick = (buttonText: TextKeys, index: number) => {
        setCurrentText(texts[buttonText]);
        setIsActive(true);
        setActiveIndex(index);
    };

    const entries = Object.entries(texts) as Array<[TextKeys, string]>;

    return (
        <>
            {/* Desktop / tablet layout */}
            <WrapperInfo>
                <ButtonsGroup>
                    <ActiveLine $activeIndex={activeIndex} $isActive={isActive} />
                    <Button
                        $isActive={isActive && currentText === texts["Бесплатный сбор документов"]}
                        onClick={() => handleButtonClick("Бесплатный сбор документов", 0)}
                    >
                        Бесплатный сбор документов
                    </Button>
                    <Button
                        $isActive={isActive && currentText === texts["Без вашего присутствия в суде"]}
                        onClick={() => handleButtonClick("Без вашего присутствия в суде", 1)}
                    >
                        Без вашего присутствия в суде
                    </Button>
                    <Button
                        $isActive={isActive && currentText === texts["Без скрытых платежей"]}
                        onClick={() => handleButtonClick("Без скрытых платежей", 2)}
                    >
                        Без скрытых платежей
                    </Button>
                </ButtonsGroup>
                <TextBlock>
                    {currentText}
                </TextBlock>
            </WrapperInfo>

            {/* Mobile layout: accordion */}
            <MobileAccordion>
                {entries.map(([title, description], index) => {
                    const isOpen = openMobileIndex === index;
                    return (
                        <AccordionItem key={title}>
                            <AccordionHeader
                                $isOpen={isOpen}
                                onClick={() => setOpenMobileIndex(isOpen ? null : index)}
                                aria-expanded={isOpen}
                                aria-controls={`accordion-content-${index}`}
                            >
                                {title}
                                <AccordionIcon $isOpen={isOpen}>+</AccordionIcon>
                            </AccordionHeader>
                            <AccordionContent id={`accordion-content-${index}`} $isOpen={isOpen}>
                                {description}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </MobileAccordion>

            <MoreLink href={'/services'}>
                Все услуги
            </MoreLink>
        </>
    );
};

export default InfoBlock;