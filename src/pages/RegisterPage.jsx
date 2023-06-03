import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoTrackIt from '../assets/logoTrackIt.png';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // Lógica para lidar com o cadastro
  };

  return (
    <Container>
      <Logo src={logoTrackIt} alt="Logo" />
      <RegisterForm onSubmit={handleRegister}>
        <InputRegister type="email" placeholder="email" required />
        <InputRegister type="password" placeholder="senha" required />
        <InputRegister type="text" placeholder="nome" required />
        <InputRegister type="url" placeholder="foto" required />
        <RegisterButton type="submit">Cadastrar</RegisterButton>
      </RegisterForm>
      <LoginLink onClick={() => navigate('/')}>
        Já tem uma conta? Faça login!
      </LoginLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 68px;
`;

const Logo = styled.img`
  margin-bottom: 30px;
`;

const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const InputRegister = styled.input`
  width: 303px;
  height: 45px;
  border: 2px solid #d5d5d5;
  border-radius: 5px;
  margin-bottom: 6px;
  outline: none;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 20px;
  padding-left: 11px;
  &::placeholder {
    color: #dbdbdb;
  }
`;

const RegisterButton = styled.button`
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #52b6ff;
  color: #ffffff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 21px;
  cursor: pointer;
`;

const LoginLink = styled.p`
  font-family: 'Lexend Deca', sans-serif;
  margin-top: 25px;
  font-size: 14px;
  color: #52b6ff;
  text-decoration: underline;
  cursor: pointer;
`;