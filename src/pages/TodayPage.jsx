import styled from "styled-components";
import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";
import success from "../assets/Vector.png"
import dayjs from "dayjs";
import updateLocale from 'dayjs/plugin/updateLocale';
import { weekdays } from "../constants/weekdays";
import 'dayjs/locale/pt-br'

export default function TodayPage() {
  dayjs.extend(updateLocale)
  dayjs.updateLocale('pt-br', {
    weekdays
  })
  const today = dayjs().locale('pt-br').format('dddd, DD/MM')

  return (
    <Container>
      <Header />
      <h1>{today}</h1>
      <p>Nenhum hábito concluído ainda</p>
      <Habit>
        <div>
          <h1>Ler 1 capítulo de livro</h1>
          <p>Sequência atual: 3 dias</p>
          <p>Seu recorde: 5 dias</p>
        </div>
        <button><img src={success} alt=""/></button>
      </Habit>
      <FooterMenu />
    </Container>
  )
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
    color: #BABABA;
    margin-top: 5px;
  }
`

const Habit = styled.div`
  width: 340px;
  height: 94px;
  background-color: #FFFFFF;
  margin-top: 28px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Lexend Deca', sans-serif;
  div{
    width: 218px;
    margin-left: 15px;
    h1{
      font-size: 20px;
      color: #666666;
      margin-bottom: 7px;
    }
    p{
      font-size: 13px;
      color: #666666;
    }
  }
  button{
    margin-right: 13px;
    width: 69px;
    height: 69px;
    border: none;
    background-color: #EBEBEB;
    border-radius: 5px;
  }
`