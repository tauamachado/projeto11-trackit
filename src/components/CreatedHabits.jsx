import React from "react";
import styled from "styled-components";
import { weekdays } from "../constants/weekdays";
import dump from "../assets/dump.svg";
import axios from "axios";

export default function CreatedHabits({ habit, habitDelete, setHabitDelete }) {
  const token = localStorage.getItem('Token')

  function deleteHabit() {
    const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    if (window.confirm("Você tem certeza que quer apagar esse hábito?")) {
      const promise = axios.delete(URL, config);
      promise.then(() => setHabitDelete(!habitDelete));
    }
  }

  return (
    <CreatedHabitsStyled>
      <p>{habit.name}</p>
      <div>
        {weekdays.map((w, index) => (
          habit.days.includes(index) ? (
            <DaysButton key={index} selected data-test="habit-day">{w[0]}</DaysButton>
          ) : (
            <DaysButton key={index} data-test="habit-day">{w[0]}</DaysButton>
          )
        ))}
      </div>
      <img src={dump} alt="" onClick={deleteHabit} data-test="habit-delete-btn" />
    </CreatedHabitsStyled>
  );
}

const CreatedHabitsStyled = styled.div`
  width: 340px;
  height: 91px;
  background-color: #ffffff;
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
  }
  img {
    position: absolute;
    top: 11px;
    right: 10px;
    cursor: pointer;
  }
`;

const DaysButton = styled.button`
  font-family: 'Lexend Deca', sans-serif;
  margin-right: 4px;
  width: 30px;
  height: 30px;
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#cfcfcf" : "#ffffff")};
  color: ${(props) => (props.selected ? "#ffffff" : "#dbdbdb")};
  font-size: 20px;
`;
