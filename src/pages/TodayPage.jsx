import React from 'react';
import styled from 'styled-components';
import FooterMenu from '../components/FooterMenu';
import Header from '../components/Header';

export default function TodayPage() {
  return (
    <Container>
      <Header />
      <h1>Segunda, 17/05</h1>
      <p>Nenhum hábito concluído ainda</p>
      <FooterMenu />
    </Container>
  );
}

const Container = styled.div`
  background-color: #f2f2f2;
  width: 100vw;
  height: 100vh;
  padding-left: 17px;
  > h1 {
    padding-top: 98px;
    font-size: 23px;
    font-family: 'Lexend Deca', sans-serif;
    color: #126BA5;
  }
  > p {
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    color: #bababa;
    margin-top: 5px;
  }
`;
