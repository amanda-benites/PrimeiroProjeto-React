import styled from "styled-components";

export const CardContainer = styled.div`
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: 1fr;
    border-style: solid;
    border-width: thin; 
    align-items: start;
    justify-items: stretch;

    grid-column-start: 1;
    grid-row-start: 1;
`

export const ImgContainer = styled.img`
    width: 100%;
    height: 200px;
`

export const H4Container = styled.h4`
    margin-left: 20px;
`