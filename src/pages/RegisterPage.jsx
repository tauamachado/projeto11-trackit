import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logoTrackIt.png';
import { Container, InputLogin } from './LoginPage';
import { ThreeDots } from 'react-loader-spinner';
import styled from 'styled-components';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsRegistering(true);

    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up';
    const body = { email, name, image, password };

    try {
      await axios.post(URL, body);
      navigate('/');
    } catch (error) {
      alert(error.response.data);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <Container>
      <Logo src={logo} alt="" />
      <form onSubmit={handleRegister}>
        <InputLogin
          data-test="email-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          required
          disabled={isRegistering}
        />
        <InputLogin
          data-test="password-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="senha"
          required
          disabled={isRegistering}
        />
        <InputLogin
          data-test="user-name-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="nome"
          required
          disabled={isRegistering}
        />
        <InputLogin
          data-test="user-image-input"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="url"
          placeholder="foto"
          required
          disabled={isRegistering}
        />
        <RegisterButton data-test="signup-btn" type="submit" disabled={isRegistering}>
          {isRegistering ? <ThreeDots color="#FFFFFF" /> : 'Cadastrar'}
        </RegisterButton>
      </form>
      <p data-test="login-link" onClick={() => navigate('/')}>Já tem uma conta? Faça login!</p>
    </Container>
  );
}

const Logo = styled.img`
  margin-bottom: 30px;
`;

const RegisterButton = styled.button`
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #52b6ff;
  opacity: ${(props) => (props.disabled ? '0.7' : '1')};
  color: #ffffff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`;
