import React from "react";
import styled, { css } from "styled-components";
import { Colors } from "./colors";
import { Sizes } from "./sizes";

/**
 * 기본 버튼 리셋 스타일
 */
export const SResetButton = css`
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
`;

/**
 * 버튼 스타일
 */
export const SButton = styled.button`
  ${SResetButton};
  border-radius: 0.25rem;
  position: relative;
  padding: 0.625rem 1.25rem;
  font-size: ${Sizes.md.rem};
  background-color: ${Colors.key.color};
  color: ${Colors.white.color};
  cursor: pointer;
`;

/**
 * 버튼 타입 정의
 * @param children
 * @param className 부모에서 styled-components를 이용할때 styled(Button)``;로 사용가능
 * @param style 인라인 스타일
 */

export interface IButton {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Button: React.FC<IButton> = ({
  className,
  children = "Button",
  style,
}) => {
  return (
    <SButton className={className} style={style}>
      {children}
    </SButton>
  );
};

export default Button;
