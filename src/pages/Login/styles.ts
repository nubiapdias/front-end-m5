import styled, { css } from "styled-components";

export const LoginPageContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    background: rgb(199, 144, 129);
    background: linear-gradient(
      0deg,
      rgba(199, 144, 129, 1) 20%,
      rgba(223, 165, 121, 1) 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const LoginFormContainer = styled.form`
  ${({ theme }) => css`
    width: 24rem;
    height: 28.875rem;
    background-color: ${theme.colors.baseBg2};
    border-radius: 8px;
    box-shadow: 3px 3px 6px 3px rgba(233, 185, 149, 0.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 0;
    box-sizing: border-box;
  `}
`;

export const LoginLogoContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 12.5rem;
    display: flex;
    justify-content: space-around;
    padding: 0 1rem;
    box-sizing: border-box;
    h1 {
      width: 10rem;
      height: 9.2rem;
      text-transform: uppercase;
      font-family: ${theme.constants.logoFontFamily};
      color: ${theme.colors.textColor};
      font-size: 62px;
      text-align: center;
      border-top: 2px double ${theme.colors.textColor};
      border-bottom: 2px double ${theme.colors.textColor};
      border-spacing: 1px;
    }
  `}
`;
