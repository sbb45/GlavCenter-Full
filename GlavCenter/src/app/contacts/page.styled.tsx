import styled from "styled-components";
import {headingColor, primaryColor, whiteColor} from "@/styles/colors";

export const ContactContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    margin: 200px 0;
    gap: 100px;
    h2{
        font-size: calc(45px + 2vw);
        color: ${headingColor};
        font-weight: 900;
    }
    @media (max-width: 1300px) {
        gap: 50px;
    }
`
export const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    gap: 60px;
    width: 100%;
    max-width: 1280px;
    @media (max-width: 1300px) {
        grid-template-columns: 1fr;
        width: 60%;
    }
    @media (max-width: 800px) {
        width: 80%;
    }
    @media (max-width: 450px) {
        width: 95%;
    }
`
export const ContactMap = styled.div`
    width: 100%;
    height: 100%;
    @media (max-width: 1300px) {
        order: 2;
    }
`
export const ContactForm = styled.form`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    background-color: ${whiteColor};
    padding: 4rem;
    border-radius: 4px 4px 80px 4px;
    gap: 18px;
    h3{
        color: ${primaryColor};
        font-weight: 700;
        font-size: calc(20px + 1vw);
    }
    @media (max-width: 1300px) {
        order: 1;
    }
    @media (max-width: 500px) {
        padding: 1.5rem 1rem;
    }
`
