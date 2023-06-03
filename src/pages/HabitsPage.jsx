import React, { useState } from 'react';
import styled from 'styled-components';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';
import { weekdays } from '../constants/weekdays';
import dump from '../assets/dump.svg';

const HabitsPage = () => {
  const [clickCreate, setClickCreate] = useState(false);
  const [name, setName] = useState('');
  const [days, setDays] = useState([]);

  return (
    <ContainerHabits>
      <Header />
      <MyHabits>
        <h1>Meus hábitos</h1>
        <button onClick={() => setClickCreate(true)}>+</button>
      </MyHabits>
      <CreateHabit isClick={clickCreate}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="nome do hábito"
        />
        <div>
          {weekdays.map((w, index) => (
            <button key={index}>{w[0]}</button>
          ))}
        </div>
        <p onClick={() => setClickCreate(false)}>Cancelar</p>
        <button>Salvar</button>
      </CreateHabit>
      <CreatedHabits>
        <p>Ler 1 capítulo de livro</p>
        <div>
          {weekdays.map((w, index) => (
            <button key={index}>{w[0]}</button>
          ))}
        </div>
        <img src={dump} alt="" />
      </CreatedHabits>
      <p>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
      </p>
      <FooterMenu />
    </ContainerHabits>
  );
};

const ContainerHabits = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  padding-left: 17px;
  padding-right: 18px;
  > p {
    margin-top: 28px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    line-height: 22px;
    color: #666666;
  }
`;

const MyHabits = styled.div`
  display: flex;
  justify-content: space-between;
  h1 {
    padding-top: 98px;
    font-size: 23px;
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;
  }
  button {
    margin-top: 92px;
    width: 40px;
    height: 35px;
    border: none;
    background-color: #52B6FF;
    border-radius: 5px;
    color: #FFFFFF;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 26px;
  }
`;

const CreateHabit = styled.div`
  margin-top: 20px;
  width: 340px;
  height: 180px;
  background-color: #FFFFFF;
  border-radius: 5px;
  position: relative;
  display: ${props => (props.isClick ? '' : 'none')};
  input {
    margin-top: 18px;
    margin-left: 19px;
    width: 303px;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    outline: none;
    padding-left: 11px;
    &::placeholder {
      color: #DBDBDB;
    }
  }
  div {
    margin-left: 19px;
    margin-top: 8px;
    button {
      font-family: 'Lexend Deca', sans-serif;
      margin-right: 4px;
      width: 30px;
      height: 30px;
      border: 1px solid #D5D5D5;
      border-radius: 5px;
      background-color: #FFFFFF;
      color: #DBDBDB;
      font-size: 20px;
    }
  }
  p {
    position: absolute;
    bottom: 23px;
    right: 123px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 16px;
    color: #52B6FF;
  }
  > button {
    font-family: 'Lexend Deca', sans-serif;
    position: absolute;
    bottom: 15px;
    right: 16px;
    width: 84px;
    height: 35px;
    border-radius: 5px;
    border: none;
    background-color: #52B6FF;
    color: #FFFFFF;
    font-size: 16px;
  }
`;

const CreatedHabits = styled.div`
  width: 340px;
  height: 91px;
  background-color: #FFFFFF;
  margin-top: 10px;
  border-radius: 5px;
  position: relative;
  p {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 20px;
    margin-left: 15px;
    padding-top: 13px;
    color: #666666;
  }
  div {
    margin-left: 14px;
    margin-top: 8px;
    button {
      font-family: 'Lexend Deca', sans-serif;
      margin-right: 4px;
      width: 30px;
      height: 30px;
      border: 1px solid #D5D5D5;
      border-radius: 5px;
      background-color: #FFFFFF;
      color: #DBDBDB;
      font-size: 20px;
    }
  }
  img {
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;
  }
`;

export default HabitsPage;
