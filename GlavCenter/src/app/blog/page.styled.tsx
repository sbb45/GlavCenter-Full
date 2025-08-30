import styled from "styled-components";
import {headingColor, primaryColor, textColor, whiteColor} from "@/styles/colors";
import Link from "next/link";

export const BlogContent = styled.div`
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
    @media (max-width: 580px) {
        gap: 60px;
    }
`
export const BlogWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: start;
    gap: 40px 40px;
    width: 100%;
    max-width: 1280px;
    @media (max-width: 1300px) {
        grid-template-columns: repeat(2,1fr);
        padding: 0 4%;
    }
    @media (max-width: 580px) {
        grid-template-columns: 1fr;
    }
`
export const Post = styled(Link)`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(218,219,240,0.50);
    img{
        width: 100%;
        max-width: 600px;
        aspect-ratio: 3/2;
        object-fit: cover;
        overflow: hidden;
    }
    h3{
        font-size: calc(20px + 1vw);
        font-weight: 700;
        line-height: 1;
        color: ${headingColor};
        margin: 12px 12px 8px;
        text-wrap: balance;
    }
    p{
        font-weight: 300;
        font-size:calc(14px + .2vw);
        color: ${textColor};
        margin: 0 12px 18px;
    }
`