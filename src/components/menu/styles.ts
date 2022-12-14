import styled, { css } from "styled-components";

interface MenuItemProps {
  logout?: boolean;
  active?: boolean;
}

interface MenuItemButtonProps {
  active?: boolean;
}

export const MenuContainer = styled.div`
  min-width: 6.5rem;
  height: 100vh;
  border-radius: 0 16px 16px 0;
  background-color: rgb(227, 210, 196);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  img {
    width: 4rem;
    margin: 1.25rem 0;
  }
  nav {
    width: 100%;
  }
`;

export const MenuItem = styled.div<MenuItemProps>`
  height: 80px;
  width: calc(100% - 12px);
  margin-left: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px 0px 0px 12px;
  ${({ logout }) =>
    logout &&
    css`
      position: absolute;
      bottom: 0;
      width: calc(6.5rem - 12px);
      border-radius: 16px;
    `}
  ${({ active }) =>
    active &&
    css`
      background-color: #c2a49c;
    `}
`;

export const MenuItemButton = styled.button<MenuItemButtonProps>`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  background-color: #c2a49c;
  border-radius: 8px;
  color: brown;
  cursor: pointer;
  :hover {
    transform: scale(1.2);
  }
  ${({ active }) =>
    active &&
    css`
      background-color: #e9b995;
      color: #ebeae6;
    `}
`;