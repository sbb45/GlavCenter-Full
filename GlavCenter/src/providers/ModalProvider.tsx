'use client'
import React, {createContext, ReactNode, useContext, useState} from 'react';

interface IModalProps {
    isOpen: boolean;
    modalContent: ReactNode | null;
    openModal: (content: ReactNode) => void;
    closeModal: () => void;
}

const ModalContext = createContext<IModalProps | undefined>(undefined)

const ModalProvider = ({children}: Readonly<{children: ReactNode}>) => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState<ReactNode | null>(null);

    const openModal = (content: ReactNode) => {
        setModalContent(content);
        setIsOpen(true);
    }
    const closeModal = () => {
        setModalContent(null);
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{isOpen, modalContent, openModal, closeModal }} >
            {children}
        </ModalContext.Provider>
    );
};

export default ModalProvider;

export const useModal = (): IModalProps => {
    const context = useContext(ModalContext);

    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }

    return context;
};