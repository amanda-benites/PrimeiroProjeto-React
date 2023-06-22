import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
width: 100%;
padding: 0;
margin: 0;
`

export const TelaInteira = styled.div`  
    margin: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
`

export const ContainerMain = styled.main`
    min-height: 95vh;
    display: flex;
`