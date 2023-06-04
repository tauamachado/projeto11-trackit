import { React, useContext } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from '../AuthContext';

const FooterMenu = () => {
  const navigate = useNavigate();
  const {habitsToday} = useContext(AuthContext)
	const totalHabits = habitsToday.length
	const completedHabits = habitsToday.filter(h => h.done).length

  return (
    <ContainerMenu>
      <h2 onClick={() => navigate('/habitos')}>Hábitos</h2>
      <div onClick={() => navigate('/hoje')}>
        <CircularProgressbar
          value={completedHabits/totalHabits*100}
          text={<tspan dominantBaseline="middle">Hoje</tspan>}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: '#52B6FF',
            textColor: '#fff',
            pathColor: '#fff',
            trailColor: 'transparent',
            strokeLinecap: 'round',
            textSize: '18px',
            pathTransitionDuration: 0.5,
          })}
        />
      </div>
      <h2 onClick={() => navigate('/historico')}>Histórico</h2>
    </ContainerMenu>
  );
};

const ContainerMenu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  height: 70px;
  width: 100%;
  background-color: #ffffff;
  color: #000000;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  h2 {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: #52b6ff;
    &:nth-child(1) {
      margin-left: 36px;
    }
    &:nth-child(3) {
      margin-right: 31px;
    }
  }
  div {
    font-family: 'Lexend Deca', sans-serif;
    width: 91px;
    height: 91px;
    margin-bottom: 50px;
    text-anchor: middle;
  }
};
`

export default FooterMenu;
