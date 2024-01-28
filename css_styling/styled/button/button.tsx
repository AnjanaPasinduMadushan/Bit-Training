import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css } from 'styled-components';

export type ButtonProps = {
  children?: ReactNode;
  isprimary?: boolean;
  issecondary?: boolean;
}& ButtonHTMLAttributes<HTMLButtonElement>;

const BaseButton = css`
  background-color:blue;
  color:red;
  padding: 1rem 2rem;
  border: 2px solid #333;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }
`;

const StyledButton = styled.button<{ primary?: boolean; secondary?: boolean }>`
  ${BaseButton}
  ${(props) =>
    props.primary &&
    css`
      background-color: #007bff;
      color: #fff;
    `}

  ${(props) =>
    props.secondary &&
    css`
      background-color: #ccc;
      color: #333;
    `}
`;


export function Button({
  children,
  isprimary = false,
  issecondary = false,
}: ButtonProps) {
  return <StyledButton primary={isprimary} secondary={issecondary}>{children}</StyledButton>;
}
