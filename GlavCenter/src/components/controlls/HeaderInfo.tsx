import React from 'react';
import styled from "styled-components";
import {primaryColor, primaryHoverColor, whiteColor} from "@/styles/colors";
import Link from "next/link";

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

const HeaderInfo = () => {
    return (
        <InfoWrapper>
            <Link href="mailto:info@glavcenter.ru">info@glavcenter.ru</Link>
            <Link href="tel:89433281215">8 (943) 328-12-15</Link>
        </InfoWrapper>
    );
};

export default HeaderInfo;