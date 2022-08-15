import styled from "styled-components";

export const CardPayingContainer = styled.div`
  width: 16.875rem;
  height: 19.25rem;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 15px 15.58px rgba(31, 30, 44, 0.18),
    0px 1px 3px rgba(31, 30, 44, 0.01);
  border-radius: 8px;
  padding: 0 0.8125rem 0.8125rem 0.8125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const CardPayingHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.725rem;
  margin-top: -2.6rem;
`;

interface CardPayingStatusProps {
  status: "GOOD" | "BAD";
}

export const CardPayingAvatar = styled.div<CardPayingStatusProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5.85rem;
  height: 5.85rem;
  border-radius: 99999px;
  border: 4px solid
    ${(props) =>
      props.status === "GOOD"
        ? props.theme.colors.primary
        : props.theme.colors["orange-700"]};

  img {
    width: 5.1625rem;
    height: 5.1625rem;
    border-radius: 99999px;
  }
`;

export const CardPayingName = styled.span`
  font-size: 1.125rem;
  font-weight: 800;
  line-height: 1.3125rem;
  color: ${(props) => props.theme.colors["text-black"]};
`;

export const CardPayingStatus = styled.span<CardPayingStatusProps>`
  font-size: 0.725rem;
  font-weight: 800;
  line-height: 0.725rem;
  text-transform: uppercase;

  padding: 0.25rem 1.1875rem;
  border-radius: 10px;

  background: ${(props) =>
    props.status === "GOOD"
      ? props.theme.colors["green-50"]
      : props.theme.colors["orange-50"]};

  color: ${(props) =>
    props.status === "GOOD"
      ? props.theme.colors.primary
      : props.theme.colors["orange-700"]};
`;

export const CardPayingStatusPayment = styled.div`
  text-align: center;
  span {
    font-weight: 400;
    color: ${(props) => props.theme.colors["text-black"]};
  }

  strong {
    font-weight: 500;
    color: ${(props) => props.theme.colors["text-black"]};
  }
`;

export const CardPayingProgressPayment = styled.div`
  width: 100%;
  text-align: center;

  span {
    font-size: 0.825rem;
    color: ${(props) => props.theme.colors["gray-400"]};
  }
`;
