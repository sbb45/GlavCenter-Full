'use client'
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import HeaderInfo from "@/components/controlls/HeaderInfo";
import HeaderLinks from "@/components/controlls/HeaderLinks";
import {bgSiteColor, headingColor, primaryColor} from "@/styles/colors";
import Link from "next/link";
import Logo from "@/components/other/Logo";

interface HeaderProps {
    info: {
        email: string;
        phone: string;
    };
}

const HeaderWrapper = styled.header<{$isScrolled: boolean}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100vw;
    padding: 0 4%;
    background-color: ${({$isScrolled}) => ($isScrolled ? bgSiteColor : "transparent")};
    transition: background-color .6s;
    border-bottom: 1px solid #c1c1c1;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    @media (max-width: 560px) {
        height: 70px;
    }
`

const DesktopLinks = styled.div`
    @media (max-width: 560px) {
        display: none;
    }
`

const BurgerButton = styled.button<{ $open: boolean }>`
    display: none;
    @media (max-width: 560px) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 64px;
        height: 64px;
        border-radius: 10px;
        background: transparent;
        cursor: pointer;
        position: relative;
    }

    span, span::before, span::after {
        content: '';
        display: block;
        position: absolute;
        width: 30px;
        height: 3px;
        background: ${headingColor};
        transition: transform .3s ease, opacity .3s ease, top .3s ease;
    }
    span { top: 50%; transform: translateY(-50%) ${({$open})=> $open ? 'rotate(45deg)' : 'none'}; }
    span::before { top: -7px; opacity: ${({$open})=> $open ? 0 : 1}; }
    span::after {
        transform: ${({$open})=> $open ? 'rotate(-90deg)' : 'none'};
        top: ${({$open})=> $open ? '0' : '7px'};
    }
`

const MobileRight = styled.div`
    display: none;
    @media (max-width: 560px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 12px;
        width: 100vw;
    }
`

const MobileOverlay = styled.button<{ $open: boolean }>`
    display: ${({$open})=> $open ? 'block' : 'none'};
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.35);
    z-index: 98;
    border: none;
`

const MobilePanel = styled.nav<{ $open: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 78vw;
    max-width: 360px;
    background: ${bgSiteColor};
    z-index: 100;
    transform: translateX(${({$open})=> $open ? '0' : '100%'});
    transition: transform .35s ease;
    padding: 100px 24px 24px; /* account for header height */
    display: flex;
    flex-direction: column;
    gap: 20px;

    a {
        color: ${headingColor};
        text-decoration: none;
        font-weight: 700;
        font-size: 22px;
        border-bottom: 2px dotted ${headingColor};
        padding-bottom: 2px;
        transition: border-bottom .25s ease, color .25s ease;
    }
    a:hover {
        color: ${primaryColor};
        border-bottom: 2px solid ${primaryColor};
    }
`

const Header = ({ info }: HeaderProps) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY>50);
        window.addEventListener('scroll', handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll)
    }, []);

    return (
        <>
            <HeaderWrapper $isScrolled={isScrolled}>
                <DesktopLinks>
                    <HeaderLinks />
                </DesktopLinks>
                <HeaderInfo info={info} />
                <MobileRight>
                    <BurgerButton
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-panel"
                        onClick={()=> setIsMenuOpen((v)=> !v)}
                        $open={isMenuOpen}
                    >
                        <span />
                    </BurgerButton>
                    <Logo />
                </MobileRight>
            </HeaderWrapper>
            <MobileOverlay $open={isMenuOpen} aria-hidden={!isMenuOpen} onClick={()=> setIsMenuOpen(false)} />
            <MobilePanel id="mobile-panel" $open={isMenuOpen}>
                <Link href='/services' onClick={()=> setIsMenuOpen(false)}>Услуги</Link>
                <Link href='/contacts' onClick={()=> setIsMenuOpen(false)}>Контакты</Link>
                <Link href='/blog' onClick={()=> setIsMenuOpen(false)}>Блог</Link>
            </MobilePanel>
        </>
    );
};

export default Header;