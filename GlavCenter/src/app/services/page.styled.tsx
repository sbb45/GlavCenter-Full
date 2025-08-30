import styled from "styled-components";
import {headingColor} from "@/styles/colors";

export const ServicesContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    margin: 200px 0;
    gap: 100px;
    h2{
        font-size: calc(45px + 2vw);
        font-weight: 900;
        color: ${headingColor};
    }
    @media(max-width: 1200px) {
        gap: 60px;
    }
    @media(max-width: 950px) {
        margin: 160px 0 120px;
        padding: 0 4%;
        h2{ font-size: 56px; }
    }
    @media(max-width: 560px) {
        margin: 130px 0 90px;
        gap: 40px;
        h2{ font-size: 40px; }
    }
`
export const ServiceWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 140px;
    width: 100%;
    
    p{
        font-size: calc(16px + .3vw);
        max-width: 840px;
        font-weight: 300;
        line-height: 1.6;
    }
    .title{
        display: flex;
        justify-content: start;
        align-items: start;
        width: 300px;
        h5{
            font-weight: 900;
            font-size: calc(16px + .7vw);
            margin-right: 48px;
            @media (max-width: 950px) {
                font-size: calc(24px + 1vw);
            }
        }
        h3{
            font-weight: 900;
            font-size: calc(24px + 1vw);
            line-height: 1;
        }
    }
    @media(max-width: 1200px) {
        width: 100%;
        gap: 100px;
        padding: 0 4%;
    }
    @media(max-width: 950px) {
        gap: 2px;
        flex-direction: column;
        align-items: stretch;
        .title{
            width: 100%;
            align-items: center;
            gap: 16px;
            h5{ margin: 0; }
            h3{ font-size: 32px; }
        }
        p{ max-width: 100%; font-size: 18px; }
    }
    @media(max-width: 560px) {
        gap: 20px;
        .title{
            flex-direction: row;
            align-items: center;
            h3{ font-size: 26px; }
        }
        p{ font-size: 16px; }
    }
`