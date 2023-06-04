import React, { useContext, useState } from 'react';
import axios from 'axios';
import { ThreeDots } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logoTrackIt from '../assets/logoTrackIt.png';
import { AuthContext } from '../AuthContext';

export default function LoginPage() {
  const { setImage, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  function login(e) {
    e.preventDefault();
    const URL =
      'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
    const body = { email, password };
    setIsClicked(true);

    const promise = axios.post(URL, body);
    promise
      .then((res) => {
        setIsClicked(false);
        setImage(res.data.image);
        setToken(res.data.token);
        navigate('/hoje');
      })
      .catch((err) => {
        alert(err.response.data.message);
        setIsClicked(false);
      });
  }

  return (
    <Container onSubmit={login}>
      <img src={logoTrackIt} alt="" />
      <form>
        <InputLogin
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
          required
          disabled={isClicked}
        />
        <InputLogin
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="senha"
          required
          disabled={isClicked}
        />
        <LoginButton
          clicked={isClicked}
          type="submit"
          disabled={isClicked}
        >
          {isClicked ? (
            <ThreeDots color="#FFFFFF" />
          ) : (
            'Entrar'
          )}
        </LoginButton>
      </form>
      <p onClick={() => navigate('/cadastro')}>
        Não tem uma conta? Cadastre-se!
      </p>
    </Container>
  );
}

const Container = styled.div`
  background-color: #ffffff;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 68px;
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
    color: #52b6ff;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const InputLogin = styled.input`
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

const LoginButton = styled.button`
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #52b6ff;
  color: #ffffff;
  opacity: ${(props) => (props.clicked ? '0.7' : '1')};
  font-family: 'Lexend Deca', sans-serif;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export {Container, InputLogin}