// components/StyledCheckboxGroup.tsx
"use client";

import React, { useState } from "react";
import styled from "styled-components";
import {bgLightColor, blackColor, lightTextColor, primaryColor, whiteColor} from "@/styles/colors";

interface IProps{
    value: string[],
    setValue: React.Dispatch<React.SetStateAction<string[]>>,
    options?: string[]
}

const CheckboxGroup = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    align-items: center;
    width: 100%;
    gap: 0.8rem;
    margin: 24px 0 16px;
    @media (max-width: 1550px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 1300px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 560px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    display: none;
`;

const Label = styled.label<{ $checked?: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: ${({ $checked }) => ($checked ? primaryColor : blackColor)};
`;

const Box = styled.span<{ $checked?: boolean }>`
    width: 20px;
    height: 20px;
    border: 1px solid ${({ $checked }) => ($checked ? primaryColor : bgLightColor)};
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ $checked }) => ($checked ? primaryColor : whiteColor)};
    transition: all 0.2s ease;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        width: 6px;
        height: 12px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg) translateY(-1px) translateX(-1px);
        display: ${({ $checked }) => ($checked ? "block" : "none")};
    }
`;

const StyledCheckboxGroup = ({value, setValue, options = ["МФО", "Штрафы", "Налоги", "Банки", "ЖКХ", "Другой вариант"]}: IProps) => {

    const toggle = (value: string) => {
        setValue((prev) =>
            prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
        );
    };

    return (
        <CheckboxGroup>
            {options.map((opt) => (
                <div key={opt}>
                    <HiddenCheckbox
                        id={opt}
                        checked={value.includes(opt)}
                        onChange={() => toggle(opt)}
                    />
                    <Label htmlFor={opt} $checked={value.includes(opt)}>
                        <Box $checked={value.includes(opt)} />
                        {opt}
                    </Label>
                </div>
            ))}
        </CheckboxGroup>
    );
};

export default StyledCheckboxGroup;
