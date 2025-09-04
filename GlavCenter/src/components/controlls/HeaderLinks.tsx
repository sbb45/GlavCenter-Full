import React from 'react';
import styled from "styled-components";
import Logo from "@/components/other/Logo";
import Link from "next/link";
import {blackColor, headingColor, lightTextColor, primaryColor} from "@/styles/colors";

const WrapperLinks = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    @media (max-width: 950px) {
        width: 100%;
        justify-content: space-between;
    }
`
const Links = styled.ul<{$footer?: boolean}>`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    a {
        color: ${({$footer})=> $footer ? lightTextColor : headingColor};
        font-weight: 700;
        font-size: 20px;
        text-decoration: none;
        position: relative;
        border-bottom: ${({$footer})=> $footer ? `2px dotted ${lightTextColor}` : `2px dotted ${headingColor}`};
        padding-bottom: 2px;
        transition: border-bottom 0.3s ease, color 0.3s; 
    }

    a:hover {
        color: ${({$footer})=> $footer ? lightTextColor : primaryColor};
        border-bottom: ${({$footer})=> $footer ? `2px solid ${lightTextColor}` : `2px solid ${primaryColor}`};
    }
`

const HeaderLinks = ({footer}: {footer?:boolean}) => {
    return (
        <WrapperLinks>
            {!footer ? <Logo /> : <div></div>}
            <Links $footer={footer}>
                <Link href='/services'>Услуги</Link>
                <Link href='/contacts'>Контакты</Link>
                <Link href='/blog'>Блог</Link>
                {footer ? (
                    <Link target="_blank" href='https://docs.google.com/document/d/1fmczwk_G4J-nUB6SjF5SQCzy2Kcb68Hvb43EjF2hE_Y/edit?tab=t.0#heading=h.445wxmcfzj8q'>Политика конфиденциальности</Link>
                ): null}
            </Links>
        </WrapperLinks>
    );
};

export default HeaderLinks;