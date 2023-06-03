import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styled from "styled-components";

export default function FooterMenu() {
    return (
        <ContainerMenu>
            <h2>Hábitos</h2>
            <CircularProgressbar
                value={100}
                text={<tspan dominantBaseline="middle">Hoje</tspan>}
                background
                backgroundPadding={6}
                styles={buildStyles({
                    backgroundColor: "#52B6FF",
                    textColor: "#fff",
                    pathColor: "#fff",
                    trailColor: "transparent",
                    strokeLinecap: 'round',
                    textSize: '18px',
                    pathTransition: 0.5,
                })}
            />
            <h2>Histórico</h2>
        </ContainerMenu>
    );
}

const ContainerMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    height: 70px;
    width: 100%;
    background-color: #FFFFFF;
    color: #000000;
    align-items: center;
    justify-content: space-between;
    h2{
        font-family: 'Lexend Deca', sans-serif;
        font-size: 18px;
        color: #52B6FF;
        &:first-child{
            margin-left: 36px;
        }
        &:last-child{
            margin-right: 31px;
        }
    }
    svg{
        font-family:'Lexend Deca', sans-serif;
        width: 91px;
        height: 91px;
        margin-bottom: 40px;
        text-anchor: middle;
    }
`;

