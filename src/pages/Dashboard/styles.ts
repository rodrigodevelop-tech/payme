import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
`;

export const DashboardCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  margin-top: 3.5rem;
`;

export const DashboardLineDivider = styled.div`
  width: 100%;
  height: 1px;
  margin-block: 2.125rem;
  background: ${(props) => props.theme.colors["gray-300"]};
`;

export const DashboardContent = styled.div`
  width: 100%;
`;

export const DashboardContentHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const DashboardCardsGroupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
`;
