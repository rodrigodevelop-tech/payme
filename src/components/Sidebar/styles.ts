import { Link } from "react-router-dom";
import styled from "styled-components";

export const SidebarContainer = styled.div`
  /* position: fixed; */
  max-width: 17.375rem;
  width: 100%;
  max-width: 100vh;
  height: 100vh;
  padding: 3.375rem 1.6875rem;
  border-radius: 0px 25px 25px 0px;

  background: ${(props) => props.theme.colors["green-800"]};

  a {
    text-decoration: none;
  }
`;

export const SidebarHeader = styled.header`
  margin-bottom: 5.1875rem;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const SidebarDivider = styled.div`
  width: 100%;
  height: 0.5px;
  background: ${(props) => props.theme.colors.white};
  margin-block: 2.8125rem;
`;

export const SidebarItem = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.725rem;

  & + & {
    margin-top: 3.0625rem;
  }
`;

export const SidebarItemActiveBorder = styled.div`
  position: absolute;
  left: 0;

  height: 3.5rem;
  border-radius: 0px 2px 2px 0px;
  border-left: 4px solid ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.white};
`;

interface SidebarItemIconProps {
  activeLink?: boolean;
}

export const SidebarItemIcon = styled.div<SidebarItemIconProps>`
  width: 3.3125rem;
  height: 3.3125rem;
  border-radius: 9999px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) =>
    props.activeLink ? props.theme.colors.white : "transparent"};

  svg {
    width: 31px;
    height: 31px;
  }
`;

export const SidebarItemTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 700;

  color: ${(props) => props.theme.colors.white};
`;
