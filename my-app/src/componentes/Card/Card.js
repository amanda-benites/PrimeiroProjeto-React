import { CardContainer, H4Container, ImgContainer } from "./styled"
import React from "react";

function Card(props) {
    return (
        <CardContainer onClick={props.reproduz}>
            <ImgContainer src={props.link} alt=""></ImgContainer>
            <H4Container>{props.titulo}</H4Container>
        </CardContainer>
    )
}

export default Card