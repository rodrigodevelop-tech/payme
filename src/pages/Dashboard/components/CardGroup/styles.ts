import styled from "styled-components";

export const CardGroupContainer = styled.div`
  width: 17.625rem;
  max-height: 20.125rem;
  height: 100%;
  padding: 2.0625rem 1.1875rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 8px;
  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 15px 15.58px rgba(31, 30, 44, 0.18),
    0px 1px 3px rgba(31, 30, 44, 0.01);
`;

export const CardGroupHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardGroupTitle = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.375rem;

  color: ${(props) => props.theme.colors["text-black"]};
`;

export const CardGroupDateCreate = styled.time`
  font-size: 0.825rem;
  font-weight: 500;
  line-height: 1.375rem;

  color: ${(props) => props.theme.colors["gray-600"]};
`;
export const CardGroupCode = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.875rem;
  padding: 0.2rem 1rem;
  margin-block: 2rem;

  color: ${(props) => props.theme.colors["text-black"]};
  border-radius: 4px;
  border: 2px solid ${(props) => props.theme.colors["text-black"]};
`;

export const CardGroupUsersAvatar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 1.125rem;

  img {
    width: 36px;
    height: 36px;
    border-radius: 9999px;
    margin-left: -1.125rem;
  }
`;

export const CardGroupBarProgressContainer = styled.div`
  width: 100%;
  margin-top: 1.25rem;
`;

export const CardGroupBarProgressInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${(props) => props.theme.colors["text-black"]};
  }
`;

export const CardGroupFooter = styled.div`
  width: 100%;
  margin-top: 0.5rem;

  text-align: left;
  font-size: 0.725rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors["gray-400"]};
`;
