'use client'
import styled from "styled-components";
import {blackColor, primaryColor} from "@/styles/colors";
import Link from "next/link";

export const LessonContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    max-width: 1200px;
    margin: 100px auto 0;
    padding: 40px 20px; 
    min-height: calc(100vh - 100px); 

    @media (max-width: 1024px) {
        gap: 40px;
        padding: 30px 16px;

        .peopleImage {
            width: 400px;
            
        }
    }

    @media (max-width: 768px) {
        flex-direction: column; 
        justify-content: flex-start;
        align-items: center;
        text-align: center;
        gap: 32px;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    flex: 1;

    h3 {
        color: ${blackColor};
        font-weight: 900;
        font-size: clamp(20px, 3vw, 36px); /* резиновый размер */
    }

    h2 {
        font-weight: 400;
        color: ${blackColor};
        font-size: clamp(16px, 2.5vw, 28px);
        line-height: 1.4;
    }

    hr {
        width: 100%;
        height: 2px;
        background-color: ${primaryColor};
    }

    p {
        text-align: center;
        width: 100%;
        font-size: clamp(12px, 1.5vw, 18px);
        margin-top: 10px;
    }
`;

export const LessonBtn = styled(Link)`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    color: ${blackColor};
    font-weight: 700;
    font-size: clamp(16px, 6vw, 22px);
    text-decoration: none;
    
    img {
        width: 28px;
        height: 28px;

        @media (min-width: 768px) {
            width: 36px;
            height: 36px;
        }
    }
`;
