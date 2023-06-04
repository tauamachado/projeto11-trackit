import React from "react";
import styled from "styled-components";
import FooterMenu from "../components/FooterMenu";
import Header from "../components/Header";

export default function HistoricPage() {
    return (
        <ContainerHistoric>
            <Header />
            <Content>
                <h1>Histórico</h1>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Content>
            <FooterMenu />
        </ContainerHistoric>
    );
}

const ContainerHistoric = styled.div`
    width: 100vw;
    height: 100vw;
    padding-left: 17px;
`;

const Content = styled.div`
    padding-top: 98px;
    h1 {
        font-size: 23px;
        font-family: 'Lexend Deca', sans-serif;
        color: #126BA5;
    }
    p {
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #666666;
        margin-top: 17px;
        line-height: 22px;
    }
`;