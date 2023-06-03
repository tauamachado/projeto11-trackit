import axios from 'axios';
import { useContext, useState } from 'react';
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
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login';
    const body = { email, password };
    setIsClicked(true);

    axios
      .post(URL, body)
      .then(res => {
        setIsClicked(false);
        setImage(res.data.image);
        setToken(res.data.token);
        navigate('/hoje');
      })
      .catch(err => {
        alert(err.response.data.message);
        setIsClicked(false);
      });
  }

  return (
    <Container onSubmit={login}>
      <img src={logoTrackIt} alt='Logo' />
      <form>
        <InputLogin value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='email' required disabled={isClicked} />
        <InputLogin value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='senha' required disabled={isClicked} />
        <LoginButton clicked={isClicked} type='submit' disabled={isClicked}>
          {isClicked ? <ThreeDots color='#FFFFFF' /> : 'Entrar'}
        </LoginButton>
      </form>
      <p onClick={() => navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</p>
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
`;

const LoginButton = styled.button`
  height: 45px;
  border: none;
  border-radius: 5px;
  background-color: #52B6FF;
  color: #FFFFFF;
  opacity: ${props => (props.clicked ? '0.7' : '1')};
  font-family: 'Lexend Deca', sans-serif;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export { Container, InputLogin };
