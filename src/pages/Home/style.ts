import styled, { css } from "styled-components";

interface CategoriesNavigationButtonProps {
  active?: boolean;
}

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background: rgb(199, 144, 129);
  background: linear-gradient(
    0deg,
    rgba(212, 167, 154, 1) 20%,
    rgba(233, 185, 149, 1) 100%
  );

  color: #fff;
  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    box-sizing: border-box;
  }
`;

export const HomeContentContainer = styled.div`
  width: calc(100% - 518px);
`;

export const HomeContentHeader = styled.header`
  width: 100%;
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TitleContainer = styled.div`
  h1 {
    font-family: "Big Shoulders Inline Display", cursive;
    text-transform: uppercase;
    margin-bottom: 1rem;
  }
  p {
    text-transform: capitalize;
    font-size: 20px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 173px;
  height: 48px;
  background: #e9b995;
  border: 1px solid #c2a49c;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  gap: 10px;
  input {
    background: #e9b995;
    width: 120px;
    height: 38px;
    color: #c2a49c;
    font-size: 14px;
    :focus {
      outline: none;
    }
  }
`;

export const CategoriesNavigationBar = styled.div`
  width: 100%;
  height: 3vh;
  border-bottom: 1px solid #c2a49c;
  display: flex;
`;

export const CategoriesNavigationButton = styled.button<CategoriesNavigationButtonProps>`
  color: #fff;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.1rem;
  background-color: #c2a49c;
  :hover {
    color: #ffffff;
  }
  ${({ active }) =>
    active &&
    css`
      color: #fff;
      border-bottom: 2px solid #fff;
    `}
`;

export const ProductsHeaderContainer = styled.div`
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  box-sizing: border-box;
`;

export const TableSelect = styled.select`
  width: 165px;
  height: 48px;
  background-color: #e26b6b;
  border: 1px solid #393c49;
  border-radius: 8px;
  color: #ffffff;
  padding: 0 1rem;
  box-sizing: border-box;
  :focus {
    outline: none;
  }
`;
