"use client";

import React, { useState } from "react";
import styled from "styled-components";
import {primaryColor, textGrayColor} from "@/styles/colors";

interface IProps{
    value: string,
    setValue: (value: string) => void,
    options?: string[]
}

const RadioGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    text-wrap: nowrap;
    width: 30rem;
    gap: 1rem;
    row-gap: .5rem;
    margin: 18px 0 12px;
    @media (max-width: 1550px) {
        width: 26rem;
    }
    @media (max-width: 560px) {
        width: 100%;
        grid-template-columns: repeat(2, 1fr);
    }
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  display: none;
`;

const StyledLabel = styled.label<{ $checked?: boolean }>`
  padding: .6rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  border-radius: 8px;
  border: 1px solid ${({ $checked }) => ($checked ? primaryColor : textGrayColor)};
  background-color: ${({ $checked }) => ($checked ? primaryColor : 'transparent')};
  color: ${({ $checked }) => ($checked ? "white" : "black")};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: border-color .3s ease, background-color .3s ease, color .3s ease;
  &:hover {
      border-color: ${primaryColor};
  }
`;

const RadioButtons = ({value, setValue, options = ["<1 месяца", ">1 месяца", ">6 месяцев", ">1 года", "Плачу вовремя"]}: IProps) => {

    return (
        <RadioGroup>
            {options.map((v) => (
                <div key={v}>
                    <HiddenRadio
                        id={`radio-${v}`}
                        name="options"
                        value={v}
                        checked={value === v}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <StyledLabel htmlFor={`radio-${v}`} $checked={value === v}>
                        {v}
                    </StyledLabel>
                </div>
            ))}
        </RadioGroup>
    );
};

export default RadioButtons;
