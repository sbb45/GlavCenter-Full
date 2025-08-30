import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {bgLightColor, bgSiteColor, textColor, whiteColor} from "@/styles/colors";

interface IProps {
    placeholder: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    inputType?: string;
}

const StyleInput = styled.input`
    background-color: ${bgSiteColor};
    color: ${textColor};
    border: 2px solid rgba(218,219,240,0.50);
    font-weight: 300;
    width: 470px;
    height: 58px;
    border-radius: 1.5rem;
    font-size: 20px;
    padding-left: 30px;
    transition: background-color .4s ease;
    &:focus {
        background-color: ${whiteColor};
    }
    @media (max-width: 1300px) {
        width: 100%;
    }
`
const StyleTextarea = styled.textarea`
    background-color: ${bgSiteColor};
    color: ${textColor};
    border: 2px solid rgba(218,219,240,0.50);
    font-weight: 300;
    width: 470px;
    height: 180px;
    border-radius: 1.5rem;
    font-size: 20px;
    padding-top: 16px;
    padding-left: 30px;
    transition: background-color .4s ease;
    resize: none;
    &:focus {
        background-color: ${whiteColor};
    }
    @media (max-width: 1300px) {
        width: 100%;
    }
`

const StyledInput = ({placeholder, value, onChange, inputType}: IProps) => {

    return inputType === 'textarea' ? (
        <StyleTextarea
            required
            placeholder={placeholder}
            value={value.toString()}
            onChange={onChange}
        />
    ) : (
        <StyleInput
            required
            type={inputType}
            placeholder={placeholder}
            value={value.toString()}
            onChange={onChange}
        />
    );
};

export default StyledInput;