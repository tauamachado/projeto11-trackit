import { useActionData, useNavigate, } from "react-router-dom";
import styled from "styled-components";
import logoTrackIt from "../assets/logoTrackIt.png";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Lógica para lidar com o login
  };

  return (
    <Container>
      <Logo src={logoTrackIt} alt="Logo" />
      <LoginForm onSubmit={handleLogin}>
        <InputLogin type="email" placeholder="email" required />
        <InputLogin type="password" placeholder="senha" required />
        <LoginButton type="submit">Entrar</LoginButton>
      </LoginForm>
      <SignUpLink onClick={() => navigate('/cadastro')}>
        Não tem uma conta? Cadastre-se!
      </SignUpLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 68px;
  img {
    margin-bottom: 30px;
  }
  form {
    display: flex;
    flex-direction: column;
  }
  p {
    font-family: 'Lexend Deca', sans-serif;
    margin-top: 25px;
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    cursor: pointer;
  }
`;


const Logo = styled.img`
  margin-bottom: 30px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputLogin = styled.input`
  width: 303px;
  height: 45px;
  border: 2px solid #D5D5D5;
  border-radius: 5px;
  margin-bottom: 6px;
  outline: none;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  padding-left: 11px;
  &::placeholder {
    color: #DBDBDB;
  }
`

const LoginButton = styled.button`
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #52B6FF;
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const SignUpLink = styled.p`
  font-family: 'Lexend Deca', sans-serif;
  margin-top: 25px;
  font-size: 14px;
  color: #52b6ff;
  text-decoration: underline;
  cursor: pointer;
`;

export {Container, InputLogin, LoginButton}