import React from 'react';
import styled from "styled-components";
import {primaryColor, primaryHoverColor, whiteColor} from "@/styles/colors";
import Link from "next/link";

interface HeaderInfo {
    email: string;
    phone: string;
}

interface IProps {
    info: HeaderInfo;
}

const InfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    a{
        padding: 10px 18px;
        background-color: ${primaryColor};
        border-radius: 10em;
        color: ${whiteColor};
        font-size: 14px;
        transition: background-color .4s ease;
        font-weight: 500;
        &:hover{
            background-color: ${primaryHoverColor};
        }
    }
    @media (max-width: 950px) {
        display: none;
    }
`

const HeaderInfo = ({ info }: IProps) => {
    const email = info?.email || 'info@glavcenter.ru';
    const phone = info?.phone || '8 (943) 328-12-15';

    function phoneToDigits(phone: string): string {
        return phone.replace(/\D/g, '');
    }
    return (
        <InfoWrapper>
            <Link href={`mailto:${email}`}>{email}</Link>
            <Link href={`tel:${phoneToDigits(phone)}`}>{phone}</Link>
        </InfoWrapper>
    );
};

export default HeaderInfo;