import { LiContainer, NavContainer } from "./styled"
import React from "react";

function Nav() {
    return (
        <NavContainer>
            <ul>
                <LiContainer>Início</LiContainer>
                <LiContainer>Em alta</LiContainer>
                <LiContainer>Inscrições</LiContainer>
                <hr></hr>
                <LiContainer>Originais</LiContainer>
                <LiContainer>Histórico</LiContainer>
            </ul>
        </NavContainer>
    )
}

export default Nav