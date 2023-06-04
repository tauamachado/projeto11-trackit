import React from "react";
import axios from "axios";
import styled from "styled-components";
import success from "../assets/Vector.png";

export default function HabitsToday({ habit, refresh, setRefresh }) {
  const token = localStorage.getItem('Token');

  function check() {
    const URLcheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`;
    const URLuncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    if (habit.done === true) {
      const promise = axios.post(URLuncheck, {}, config);
      promise.then(() => setRefresh(!refresh));
    } else {
      const promise = axios.post(URLcheck, {}, config);
      promise.then(() => setRefresh(!refresh));
    }
  }

  return (
    <Habit done={habit.done}>
      <div>
        <h1>{habit.name}</h1>
        <p>Sequência atual: {habit.currentSequence} dias</p>
        <p>Seu recorde: {habit.highestSequence} dias</p>
      </div>
      <button onClick={check}>
        <img src={success} alt="" />
      </button>
    </Habit>
  );
}

const Habit = styled.div`
  width: 340px;
  height: 94px;
  background-color: #FFFFFF;
  margin-top: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Lexend Deca', sans-serif;
  div {
    width: 218px;
    margin-left: 15px;
    h1 {
      font-size: 20px;
      color: #666666;
      margin-bottom: 7px;
    }
    p {
      font-size: 13px;
      color: #666666;
    }
  }
  button {
    margin-right: 13px;
    width: 69px;
    height: 69px;
    border: none;
    background-color: ${props => props.done ? '#8FC549' : '#EBEBEB'};
    border-radius: 5px;
  }
};
`