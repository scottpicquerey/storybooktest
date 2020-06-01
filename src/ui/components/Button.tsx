import React from "react";
import styled from "styled-components";

const Button =
  styled.div <
  {
    width: number,
    height: number,
    backgroundColor: string,
    textColor: string,
  } >
  `
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    cursor: pointer;
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.textColor};
    min-width: 100px;
    min-height: 50px;
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
`;

interface ButtonProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  children?: string;
}

export const ButtonComponent = ({
  width = 100,
  height = 50,
  backgroundColor = "#49F1FF",
  textColor = "#FFFFFF",
  children,
}: ButtonProps) => (
  <Button
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    textColor={textColor}
  >
    {children}
  </Button>
);
