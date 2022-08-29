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
  color: #ebeae6;
  overflow-y: scroll;
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
  padding-left: 6.5rem;
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
    color:  #c2a49c;
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
  color: #ebeae6;
  border: 0;
  cursor: pointer;
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-right: 0.1rem;
  background-color: #c2a49c;
  :hover {
    color: #ebeae6;
  }
  ${({ active }) =>
    active &&
    css`
      color: #ebeae6;
      border-bottom: 2px solid #ebeae6;
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
  border: 1px solid #c2a49c;
  border-radius: 8px;
  color: #ebeae6;
  padding: 0 1rem;
  box-sizing: border-box;
  -webkit-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='red' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  :focus {
    outline: none;
  }
  option {
    :hover {
      background-color: #d2d2d2 !important;
    }
  }
`;