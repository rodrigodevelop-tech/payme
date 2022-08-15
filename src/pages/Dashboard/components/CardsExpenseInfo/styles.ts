import styled from "styled-components";

export const DashboardCardItem = styled.div`
  min-width: 245px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  border-radius: 8px;
  padding: 0.9375rem 1.1875rem;

  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 5px 15.58px rgba(0, 0, 0, 0.18),
    0px 1px 3px rgba(0, 0, 0, 0.01);
`;

export const DashboardCardItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8125rem;
`;

export const DashboardCardItemTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 300;
  line-height: 1.3125rem;
  color: ${(props) => props.theme.colors["gray-600"]};
`;

export const DashboardCardItemAmount = styled.span`
  font-size: 1.375rem;
  font-weight: 500;
  line-height: 1.625rem;
`;

export const DashboardCardItemIcon = styled.img``;
