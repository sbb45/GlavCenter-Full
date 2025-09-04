'use client'
import React from 'react';
import styled from "styled-components";
import {lightTextColor, primaryColor} from "@/styles/colors";
import HeaderLinks from "@/components/controlls/HeaderLinks";

interface FooterInfo {
    company?: string;
    address: string;
    phone: string;
    email?: string;
    workingHours?: string;
    schedule: string;
    dayOff: string;
    copyright: string;
}

interface IProps {
    info: FooterInfo;
}

const FooterWrapper = styled.footer`
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    background-color: ${primaryColor};
    padding: 4rem;
`
const FooterInfo = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    gap: 100px;
    @media (max-width: 560px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        width: 100%;
    }
`
const FooterInfoBlock = styled.div`
    color: ${lightTextColor};
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 8px;
    
    h3{
        font-weight: 900;
        font-size: calc(24px + 1vw);
    }
    h4{
        font-weight: 700;
        font-size: calc(16px + .5vw);
        width: max-content;
    }
    p{
        font-weight: 400;
        font-size: 18px;
    }
    a{
        color: ${lightTextColor};
    }
`
const FooterLine = styled.hr`
    width: 100%;
    height: 1px;
    margin: 44px 0;
    background-color: #c1c1c1;
`
const FooterLinks = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media (max-width: 560px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        nav{
            width: 100% !important;
            justify-content: center;
            gap: 0;
        }
    }
`
const FooterCopyright = styled.p`
    font-size: calc(16px + .4vw);
    font-weight: 700;
    color: ${lightTextColor};
`


const Footer = ({ info }: IProps) => {
    const address = info?.address || 'Малышева 51, офис 2408';
    const schedule = info?.schedule || 'пн-пт 10:00-19:00 сб 10:00-15:00';
    const dayOff = info?.dayOff || 'вс выходной';
    const phone = info?.phone || '8 (943) 328-12-15';
    const copyright = info?.copyright || '© 2025 OOO "ГЦБ"';

    return (
        <FooterWrapper>
            <FooterInfo>
                <FooterInfoBlock>
                    <h3>Адрес</h3>
                    <h4>{address}</h4>
                    <p>{schedule}<br/>{dayOff}</p>
                </FooterInfoBlock>
                <FooterInfoBlock>
                    <h3>Контакты</h3>
                    <h4>{phone}</h4>
                </FooterInfoBlock>
            </FooterInfo>
            <FooterLine />
            <FooterLinks>
                <FooterCopyright>{copyright}</FooterCopyright>
                <HeaderLinks footer />
            </FooterLinks>
        </FooterWrapper>
    );
};

export default Footer;