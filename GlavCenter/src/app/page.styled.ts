'use client'
import styled from "styled-components"
import {bgColor, primaryColor} from "@/styles/colors";


export const IndexWrapper = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-direction: column;
    width: 100vw;
`
export const Section = styled.section`
    width: 100vw;
    display: grid;
    grid-template-columns: 2fr 1fr;
    position: relative;
    
`
export const ContentLeft = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    padding: 4rem;
    @media (max-width: 1300px) {
        width: 100vw;
    }
    @media (max-width: 700px) {
        padding: 2rem;
    }
`
export const ImageRight = styled.div<{$num: number}>`
    padding: 1.5rem;
    min-width: 0;
    width: auto;
    background: ${bgColor} ${({$num}) => `url("/images/mainRight/img${$num}.jpg") no-repeat fixed 100% / contain`};
    @media (max-width: 1300px) {
        display: none;
    }
`
