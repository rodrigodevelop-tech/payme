import {
  LoginContainer,
  LoginContent,
  LoginDivisor,
  LoginFormButton,
  LoginFormLogin,
  LoginInputEmail,
  LoginInputPassword,
  LoginSocialIcon,
  LoginTitle,
  ResetPassword,
} from "./styles";
import googleImg from "../../assets/icons/google.svg";
import { Link, useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  function handleLoginWithEmailAndPassword() {
    navigate("/dashboard");
  }
  return (
    <LoginContainer>
      <LoginContent>
        <LoginTitle>Login</LoginTitle>
        <LoginFormLogin>
          <LoginInputEmail placeholder="Email" type="email" />
          <LoginInputPassword placeholder="Senha" type="password" />
          <ResetPassword>
            <Link to="#">
              <a> Esqueci minha senha</a>
            </Link>
          </ResetPassword>
          <LoginFormButton onClick={handleLoginWithEmailAndPassword}>
            Entrar
          </LoginFormButton>
        </LoginFormLogin>
        <LoginDivisor>
          <div />
          <span>ou</span>
          <div />
        </LoginDivisor>
        <LoginSocialIcon href="#">
          <img src={googleImg} alt="" />
        </LoginSocialIcon>
      </LoginContent>
    </LoginContainer>
  );
}
