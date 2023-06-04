import { React, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import success from "../assets/Vector.png";
import { AuthContext } from "../AuthContext";

export default function HabitsToday({habit}) {
  const token = localStorage.getItem('Token');
  const {refresh, setRefresh} = useContext(AuthContext)

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
    <Habit done={habit.done} currentSequence={habit.currentSequence} highestSequence={habit.highestSequence}>
      <div>
        <h1>{habit.name}</h1>
        <p>Sequência atual: <span>{habit.currentSequence} dias</span></p>
				<p>Seu recorde: <span>{habit.highestSequence} dias</span></p>
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
    p:nth-child(2){
      font-size: 13px;
      color: #666666;
      span{
        color: ${props => props.done ? '#8FC549' : '#666666'};
      }
    }
    p:nth-child(3){
      font-size: 13px;
      color: #666666;
      span{
        color: ${props => props.done && props.highestSequence === props.currentSequence ? '#8FC549' : '#666666'}
      }
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