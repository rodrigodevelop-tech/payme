import styled from "styled-components";

export const HeaderContainer = styled.header`
  max-height: 2.9375rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  line-height: 2.365rem;
  color: ${(props) => props.theme.colors["text-black"]};
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`;

export const HeaderNotifications = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const HeaderAvatar = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
`;
