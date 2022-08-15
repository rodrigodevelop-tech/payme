import styled from "styled-components";

export const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors["green-800"]};
`;
export const LoginContent = styled.div`
  width: 100%;
  max-width: 28.8125rem;
  height: 26.8125rem;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 2.5625rem 4rem;

  background: ${(props) => props.theme.colors.shape};
  box-shadow: 0px 109px 337px rgba(0, 0, 0, 0.1515),
    0px 45.5376px 140.791px rgba(0, 0, 0, 0.1571),
    0px 24.3466px 75.2734px rgba(0, 0, 0, 0.185),
    0px 13.6485px 42.1976px rgba(0, 0, 0, 0.2029),
    0px 7.24861px 22.4108px rgba(0, 0, 0, 0.2485),
    0px 3.01631px 9.32565px rgba(0, 0, 0, 0.32);
`;

export const LoginTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 33px;
`;

export const LoginFormLogin = styled.form`
  width: 100%;
  max-width: 20.875rem;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginInputBase = styled.input`
  width: 100%;
  height: 3.0625rem;
  border: none;
  border-radius: 8px;
  padding: 1.5rem 0.9375rem;

  background: ${(props) => props.theme.colors["blue-50"]};
  color: ${(props) => props.theme.colors["gray-200"]};

  &:focus {
    outline: none;
    border: 0.2px solid ${(props) => props.theme.colors.primary};
  }
`;

export const LoginInputEmail = styled(LoginInputBase)`
  margin-bottom: 1.1875rem;
`;

export const LoginInputPassword = styled(LoginInputBase)`
  margin-bottom: 0.4375rem;
`;

export const ResetPassword = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: end;

  margin-bottom: 0.875rem;

  a {
    text-decoration: none;
    font-size: 0.725rem;
    color: ${(props) => props.theme.colors["gray-600"]};

    transition: color 0.3s;
    &:hover {
      color: ${(props) => props.theme.colors["gray-300"]};
    }
  }
`;

export const LoginFormButton = styled.button`
  width: 100%;
  height: 2.875rem;
  border-radius: 8px;

  font-weight: 700;
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.primary};

  cursor: pointer;

  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const LoginDivisor = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1875rem;
  margin-block: 1.1875rem;

  div {
    width: 100%;
    height: 1px;
    background: ${(props) => props.theme.colors["gray-200"]};
  }

  span {
    line-height: 14px;
    color: ${(props) => props.theme.colors["gray-600"]};
  }
`;

export const LoginSocialIcon = styled.a`
  width: 4.4375rem;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.625rem 1.3125rem;
  border-radius: 8px;

  background: ${(props) => props.theme.colors.white};
  box-shadow: 0px 2px 11px rgba(0, 0, 0, 0.09),
    0px 2px 0.2px rgba(0, 0, 0, 0.03), 0px 2px 2px rgba(0, 0, 0, 0.03);

  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25),
      0px 2px 0.2px rgba(0, 0, 0, 0.03), 0px 4px 4px rgba(0, 0, 0, 0.03);
  }
`;
