import React from 'react';
import styled, {keyframes} from "styled-components";
import {whiteColor} from "@/styles/colors";

const hidden = keyframes`
  0% {
    opacity: 1;
  }
    80%{
        opacity: 1;
    }
  100% {
    opacity: 0;
  }
`;

const Window = styled.div`
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${whiteColor};
    z-index: 9999;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${hidden} 1s linear forwards;
    will-change: opacity;    
`

const Loading = () => {
    return (
        <Window>
            <svg width="300" height="300" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0H32V18C32 27.9411 23.9411 36 14 36H0V0Z" fill="#98c554"/>
            </svg>

        </Window>
    );
};

export default Loading;