import { useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../AuthContext.jsx";

export default function Header() {
    const { image } = useContext(AuthContext);

    return (
        <HeaderContainer>
            <h1>TrackIt</h1>
            <img src={image} alt="TrackIt" />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #FFFFFF;
    box-shadow: 0px 4 px 4px rgba(0, 0, 0, 0.15);
    z-index: 10;
    h1 {
        font-family: 'Playball', cursive;
        font-size: 39px;
        margin-left: 18px;
    }
    img {
        width: 51px;
        height: 51px;
        border-radius: 100px;
        margin-right: 18px;
    }
`;