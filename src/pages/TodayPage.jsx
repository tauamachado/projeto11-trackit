import { useContext, useEffect } from "react";
import styled from "styled-components";
import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";
import dayjs from "dayjs";
import updateLocale from 'dayjs/plugin/updateLocale';
import { weekdays } from "../constants/weekdays";
import 'dayjs/locale/pt-br';
import HabitsToday from "../components/HabitsToday";
import axios from "axios";
import { AuthContext } from "../AuthContext";

export default function TodayPage() {
  dayjs.extend(updateLocale);
  dayjs.updateLocale('pt-br', {
    weekdays
  });
  const today = dayjs().locale('pt-br').format('dddd, DD/MM');
  const token = localStorage.getItem('Token');
  const {habitsToday, setHabitsToday, refresh} = useContext(AuthContext)
  const totalHabits = habitsToday.length
  const completedHabits = habitsToday.filter(h => h.done).length

  useEffect(() => {
    const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today';
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(URL, config);
        setHabitsToday(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [refresh, token]);

  return (
    <Container completedHabits={completedHabits}>
      <Header />
      <h1 data-test="today">{today}</h1>
      {completedHabits === 0 ? <p data-test="today-counter">Nenhum hábito concluído ainda</p> : <p data-test="today-counter">{`${Math.round(completedHabits/totalHabits*100)}% dos hábitos concluídos`}</p>}
      {habitsToday.map(h => <HabitsToday key={h.id} habit={h} />)}
      <footer></footer>
      <FooterMenu />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  padding-left: 17px;
  > h1{
    padding-top: 98px;
    font-size: 23px;
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;
  }
  > p{
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: ${props => props.completedHabits !== 0 ? '#8FC549' : '#BABABA'};
    margin-top: 5px;
    margin-bottom: 28px;
  }
  footer{
    height: 120px;
  }
};
`