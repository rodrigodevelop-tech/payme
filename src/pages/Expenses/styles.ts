import styled from "styled-components";

export const ExpensesContainer = styled.div`
  width: 100%;
`;
export const ExpensesHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-block: 4rem;
`;

export const GroupAndExpenses = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ExpensesGroup = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 25px;
    height: 25px;
  }

  span {
    font-weight: 600;
    margin-left: 0.42rem;
  }
`;

export const CardInfoPayingContainer = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 8px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 99999px;
  }
`;

export const CardInfoPayingTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 1.125rem 1.375rem;

  border-radius: 8px 0px 0px 8px;
  background: ${(props) => props.theme.colors["green-700"]};

  font-weight: 500;
  color: ${(props) => props.theme.colors.white};
`;

export const CardInfoPaying = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.6875rem;
  padding: 0.46875rem 1.0625rem;
  border-radius: 0 8px 8px 0;
  border: 1px solid ${(props) => props.theme.colors["gray-300"]};
`;

export const CardInfoPayingPix = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    font-size: 1.125rem;
    font-weight: 300;
  }

  span:nth-child(2) {
    font-size: 1rem;
    font-weight: 400;
  }
`;

export const ExpensesAmount = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    font-size: 2.1875rem;
    line-height: 41px;
    color: ${(props) => props.theme.colors["text-black"]};
  }

  p {
    line-height: 31px;
    color: ${(props) => props.theme.colors["gray-400"]};
  }
`;

export const ExpensesContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 134px;
  margin-top: 79px;
`;
