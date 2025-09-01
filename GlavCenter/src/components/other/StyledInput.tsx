import React, {ChangeEvent} from 'react';
import styled from "styled-components";
import {bgSiteColor, textColor, whiteColor} from "@/styles/colors";
import PhoneInput from 'react-phone-number-input';
import {E164Number} from "libphonenumber-js";

interface IProps {
    placeholder: string;
    value: string;
    onChange?: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onPhoneChange?: (value: string) => void;
    inputType?: string;
    width?: number;
}

const InputWrapper = styled.div<{ $width?: number }>`
    input, textarea{
        background-color: ${bgSiteColor};
        color: ${textColor};
        border: 2px solid rgba(218,219,240,0.50);
        font-weight: 300;
        width: ${({ $width }) => $width ? $width : '470'}px;
        height: 58px;
        border-radius: 1.5rem;
        font-size: 20px;
        padding: 0 30px;
        transition: background-color .4s ease;
        &:focus {
            background-color: ${whiteColor};
        }
        @media (max-width: 1300px) {
            width: 100%;
        }
    }
    textarea{
        padding-top: 16px;
        height: 180px;
        resize: none;
    }
    .PhoneInputCountry{
        display: none;
    }
`


const StyledInput = ({placeholder, value, onChange, inputType, onPhoneChange, width}: IProps) => {

    const handlePhoneChange = (phoneValue: E164Number | undefined) => {
        if (onPhoneChange) {
            onPhoneChange(phoneValue || '');
        }
    };

    return (
        <InputWrapper $width={width}>
            {inputType === 'textarea' ? (
                <textarea
                    required
                    placeholder={placeholder}
                    value={value.toString()}
                    onChange={onChange}
                />
            ) : inputType==='phone' ? (
                <PhoneInput
                    required
                    value={value}
                    placeholder={placeholder}
                    onChange={handlePhoneChange}
                    defaultCountry="RU"
                />
            ) : (
                <input
                    required
                    type={inputType}
                    placeholder={placeholder}
                    value={value.toString()}
                    onChange={onChange}
                />
            )}
        </InputWrapper>
    )
};

export default StyledInput;