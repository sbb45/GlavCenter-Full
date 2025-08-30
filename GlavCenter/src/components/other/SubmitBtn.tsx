import React from 'react';
import styled from "styled-components";
import {primaryColor, primaryHoverColor, whiteColor} from "@/styles/colors";

interface IProps {
    value: string;
    type?: "button" | "submit" | "reset" | undefined;
}

const StyledSubmit = styled.button`
    background-color: ${primaryColor};
    border-radius: 10em;
    font-size: 18px;
    padding: 1em 2em ;
    color: ${whiteColor};
    font-weight: 700;
    transition: background-color .4s ease;
    &:hover{
        background-color: ${primaryHoverColor};
    }
`

const Input = ({value, type='submit'}: IProps) => {
    return (
        <StyledSubmit
            type={type}
        >
            {value}
        </StyledSubmit>
    );
};

export default Input;