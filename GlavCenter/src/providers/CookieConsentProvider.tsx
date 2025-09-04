'use client'
import React, {createContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {primaryColor, primaryHoverColor} from "@/styles/colors";

type CookieConsent = {
    accepted: boolean;
    acceptCookie: ()=>void;
}

const CookieConsentContext = createContext<CookieConsent | undefined>(undefined);

const CookieConsentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [accepted, setAccepted] = useState(false);

    useEffect(() => {
        const localAccepted = localStorage.getItem('cookiesAccepted');
        if(localAccepted==='true') setAccepted(true);
    }, [])
    const acceptCookie = () => {
        localStorage.setItem('cookiesAccepted', "true");
        setAccepted(true)
    }


    return (
        <CookieConsentContext.Provider value={{ accepted, acceptCookie }}>
            {children}
            {!accepted && (
                <Banner>
                    <Message>Продолжая пользоваться сайтом, Вы подтверждаете использование cookies.</Message>
                    <Button onClick={acceptCookie}>ОК</Button>
                </Banner>
            )}
        </CookieConsentContext.Provider>
    );
};

export default CookieConsentProvider;

const Banner = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #2c2c2c;
  color: #fff;
  padding: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  z-index: 1000;
`;

const Message = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Button = styled.button`
  background: ${primaryColor};
  border: none;
  padding: 8px 15px;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  transition: background 0.3s;

  &:hover {
    background: ${primaryHoverColor};
  }
`;