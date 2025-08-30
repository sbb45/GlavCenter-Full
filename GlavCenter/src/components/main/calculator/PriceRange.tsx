// components/PriceRange.tsx
"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import {bgLightColor, primaryColor, textGrayColor, whiteColor} from "@/styles/colors";
import {QuestionTitle} from "@/components/main/calculator/Calculator";

interface IProps{
    title: string,
    max: number,
    value: number,
    isError: boolean,
    setValue: (value: number) => void
}

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 1rem;
`;

const Header = styled.div`
  display: flex;
    align-items: center;
  justify-content: space-between;
  margin-bottom: .6rem;
  font-weight: 600;
  font-size: 1.1rem;
`;

const Value = styled.span`
    color: ${primaryColor};
    width: 100%;
    text-align: end;
    font-size: calc(16px + .5vw);
    font-weight: 700;

`;

const RangeInput = styled.input.attrs({ type: "range" })`
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  margin: 0;
  padding: 0;
  height: 6px;
  cursor: pointer;

  /* === Chrome / Safari / Edge === */
  &::-webkit-slider-runnable-track {
    height: 6px;
    border-radius: 8px;
    background: linear-gradient(
      to right,
      ${primaryColor} 0%,
      ${primaryColor} var(--value, 0%),
      ${bgLightColor} var(--value, 0%),
      ${bgLightColor} 100%
    );
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${primaryColor};
    border: 3px solid ${primaryColor};
    cursor: pointer;
    margin-top: -5px;
    position: relative;
    z-index: 2;
    transition: transform 0.1s ease;
  }
  
  &::-webkit-slider-thumb:hover {
    transform: scale(1.1);
  }

  /* === Firefox === */
  &::-moz-range-track {
    height: 6px;
    border-radius: 8px;
    background: ${bgLightColor};
  }

  &::-moz-range-progress {
    background-color: ${primaryColor};
    height: 100%;
    border-radius: 8px;
  }

  &::-moz-range-thumb {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${primaryColor};
    border: 3px solid ${primaryColor};
    cursor: pointer;
    transition: transform 0.1s ease;
  }
  
  &::-moz-range-thumb:hover {
    transform: scale(1.1);
  }
  
  /* Focus styles */
  &:focus {
    outline: none;
  }
  
  &:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }
  
  &:focus::-moz-range-thumb {
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3);
  }
  
  /* Disabled state */
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  &:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }
`;

const Scale = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
  span:nth-last-child(1){
    text-align: end;
  }
  span:nth-last-child(2){
    text-align: center;
  }
`;

const PriceRange = ({title, max, value, setValue, isError}: IProps ) => {

  const formatPrice = (val: number) => {
    if (val >= max) return `>${Intl.NumberFormat("ru-RU").format(max)} ₽`;
    return new Intl.NumberFormat("ru-RU").format(val) + " ₽";
  };

  // Локальное значение заполнения для конкретного инпута (исключает влияние на другие слайдеры)
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <Container>
      <Header>
        <QuestionTitle className={isError ? 'err' : ''}>{title}</QuestionTitle>
        <Value>{formatPrice(value)}</Value>
      </Header>

      <RangeInput
          min={0}
          max={max}
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          style={{ ["--value" as any]: `${percentage}%` }}
      />

      <Scale>
        <span>0 ₽</span>
        <span>{formatPrice(max/2)}</span>
        <span>{formatPrice(max)}</span>
      </Scale>
    </Container>
  );
};

export default PriceRange;

