'use client'
import React from 'react';
import {ContentLeft, ImageRight, Section} from "@/app/page.styled";
import styled from "styled-components";
import Image from "next/image"
import {headingColor} from "@/styles/colors";


interface StartContent {
    title: string;
    text: string;
}

interface StartSectionProps {
    content: StartContent;
}

const AboutWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:46px;
    padding: 100px 0;
    img{
        border-radius: 4px 4px 120px 4px;
    }
    @media (max-width: 950px) {
        flex-direction: column;
        img{
            width: 100%;
        }
    }
    @media (max-width: 700px) {
        padding: 0;
    }
`
const AboutTexts = styled.div`
    display: flex;
    justify-content: start;
    align-items: start;
    flex-direction: column;
    gap: 32px;
`
const AboutTitle = styled.h2`
    color: ${headingColor};
    font-size: 50px;
    font-weight: 900;
    line-height: 1;
`
const AboutText = styled.p`
    font-size: 24px;
`


const AboutSection: React.FC<StartSectionProps> = ({ content }) => {
    return (
        <Section>
            <ContentLeft>
                <AboutWrapper>
                    <Image
                        src={'/images/about.jpg'}
                        alt={'About image'}
                        width={460}
                        height={460}
                    />
                    <AboutTexts>
                        <AboutTitle>
                            {content.title}
                        </AboutTitle>
                        <AboutText>
                            {content.text}
                        </AboutText>
                    </AboutTexts>
                </AboutWrapper>
            </ContentLeft>
            <ImageRight $num={1} />
        </Section>
    );
};

export default AboutSection;