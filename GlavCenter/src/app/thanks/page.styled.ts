'use client'
import styled from "styled-components";
import {bgColor, blackColor, headingColor} from "@/styles/colors";
import Link from "next/link";

export const ThanksContent = styled.div`
    background-color: black;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    
    @media (max-width: 768px) {
        padding: 15px;
        min-height: 100vh;
    }
    
    @media (max-width: 480px) {
        padding: 10px;
    }
`
export const ImageWrapper = styled.div`
    padding: 1.5rem;
    min-width: 0;
    max-width: 1000px;
    width: 100%;
    height: 40vh;
    background: ${bgColor} url("/images/thanks.png") no-repeat center / cover;
    
    @media (max-width: 1024px) {
        height: 35vh;
        padding: 1rem;
    }
    
    @media (max-width: 768px) {
        height: 30vh;
        padding: 0.8rem;
    }
    
    @media (max-width: 480px) {
        height: 25vh;
        padding: 0.5rem;
    }
`;
export const ContentWrapper = styled.div`
    max-width: 800px;
    width: 100%;
    margin-top: 40px;
    
    @media (max-width: 768px) {
        margin-top: 30px;
    }
    
    @media (max-width: 480px) {
        margin-top: 20px;
    }
`
export const ThanksLine = styled.hr`
    background-color: #e5d4c2;
    height: 5px;
    width: 60%;

    @media (max-width: 1024px) {
        margin: 0 auto;
    }
    @media (max-width: 768px) {
        width: 80%;
        height: 4px;
    }
    
    @media (max-width: 480px) {
        width: 90%;
        height: 3px;
    }
`
export const Title = styled.h2`
    color: ${bgColor};
    font-weight: 700;
    font-size: calc(46px + 6vw);
    line-height: 1;
    margin: 12px 0;
    
    @media (max-width: 1024px) {
        font-size: calc(40px + 5vw);
    }
    
    @media (max-width: 768px) {
        font-size: calc(35px + 4vw);
        margin: 10px 0;
        text-align: center;
    }
    
    @media (max-width: 480px) {
        font-size: calc(30px + 3vw);
        margin: 8px 0;
    }
`
export const Description = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${bgColor};
    gap: 20px;
    
    img {
        max-width: 200px;
        height: auto;
        flex-shrink: 0;
    }
    
    h2{
        font-weight: 700;
        font-size: calc(20px + .5vw);
        max-width: 340px;
    }
    h3{
        font-size: calc(14px + .3vw);
        font-weight: 400;
        margin-top: 6px;
    }
    p{
        font-size: calc(20px + .8vw);
        text-align: right;
        font-weight: 300;
        max-width: 350px;
    }
    
    @media (max-width: 1024px) {
        gap: 15px;
        
        img {
            width: 120px;
        }
        
        h2 {
            font-size: calc(18px + .4vw);
            max-width: 300px;
        }
        
        p {
            font-size: calc(18px + .6vw);
            max-width: 300px;
        }
    }
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
        
        img {
            width: 150px;
        }
        
        h2 {
            font-size: calc(16px + 1vw);
            max-width: 100%;
        }
        
        h3 {
            font-size: calc(12px + .9vw);
        }
        
        p {
            font-size: calc(16px + .6vw);
            text-align: center;
            max-width: 100%;
        }
    }
    
    @media (max-width: 480px) {
        gap: 15px;
        
        img {
            max-width: 120px;
        }
        
        h2 {
            font-size: calc(14px + .2vw);
        }
        
        h3 {
            font-size: calc(11px + .1vw);
        }
        
        p {
            font-size: calc(14px + .3vw);
        }
    }
`
export const LinkTelegram = styled(Link)`
    background-color: #e5d4c2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    gap: 12px;
    padding: 12px 18px;
    border-radius: 24px;
    margin: 24px auto 0;
    text-decoration: none;
    transition: all 0.3s ease;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(229, 212, 194, 0.3);
    }
    
    p{
        color: black;
        font-weight: 500;
        font-size: calc(12px + .3vw);
        margin: 0;
    }
    
    @media (max-width: 1024px) {
        padding: 10px 20px;
        gap: 10px;
        
        p {
            font-size: calc(11px + .2vw);
        }
    }
    
    @media (max-width: 768px) {
        width: 100%;
        max-width: 400px;
        padding: 12px 24px;
        margin: 20px auto 0;
        
        p {
            font-size: calc(10px + .8vw);
            text-align: center;
        }
    }
    
    @media (max-width: 480px) {
        padding: 10px 24px;
        margin: 15px auto 0;
        width: max-content;
        p {
            font-size: calc(9px + .7vw);
        }
    }
`