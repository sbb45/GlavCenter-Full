'use client'
import React, {useEffect, useState} from 'react';
import {useModal} from "@/providers/ModalProvider";
import styled, {keyframes} from "styled-components";
import {bgLightColor, primaryColor, whiteColor} from "@/styles/colors";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 99;
`
const ModalContent = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    background-color: ${whiteColor};
    border-radius: 25px;
    padding: 44px 36px;
    z-index: 100;
    @media (max-width: 450px) {
        width: 100vw;
        padding: 44px 14px;
    }
`
const CloseButton = styled.button`
    position: absolute;
    top: 6px;
    right: 6px;
`

//Загрузчик
const Spinner = styled.div`
  border: 12px solid ${bgLightColor};
  border-top: 12px solid ${primaryColor}; 
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 16px;
`;

const LoadingText = styled.p`
    font-size: 24px;
    color: #333;
    font-weight: 400;
    margin-top: 20px;
`;



const Modal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const { isOpen, closeModal, modalContent } = useModal();

    useEffect(() => {
        let timer: NodeJS.Timeout | undefined;
        if (isOpen) {
            setIsLoading(true);
            let rand = Math.floor(Math.random() * (9 - 5 + 1)) + 5;
            timer = setTimeout(() => setIsLoading(false), Math.floor(rand) * 1000);
        }

        return () => {
            if (timer) clearTimeout(timer);
        };
    }, [isOpen]);

    if (!isOpen) return null;
    if (isLoading) return (
        <ModalOverlay>
            <ModalContent>
                <Spinner />
                <LoadingText>Проверяем данные о долгах...</LoadingText>
            </ModalContent>
        </ModalOverlay>
    );

    return (
        <ModalOverlay>
            <ModalContent>
                <CloseButton onClick={closeModal}>
                    <svg width="35" height="35" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <line x1="15" y1="15" x2="35" y2="35" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                        <line x1="15" y1="35" x2="35" y2="15" stroke="#000000" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                </CloseButton>
                {modalContent}
            </ModalContent>
        </ModalOverlay>
    );
};

export default Modal;