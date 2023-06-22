import Footer from "./componentes/Footer/Footer";
import Header from "./componentes/Header/Header";
import Nav from "./componentes/Nav/Nav";
import Home from "./pagina/Home";
import StyledGlobal, { ContainerMain, TelaInteira } from "./styledGlobal";
import React from "react";



function App() {
    function reproduzVideo() {
        alert("O vídeo está sendo reproduzido")
    }
  return (
    <>
      <StyledGlobal/>

      <TelaInteira>
          <Header/>
          
          <ContainerMain>
              <Nav/>
              <Home reproduz={reproduzVideo}/>
          </ContainerMain>

          <Footer/>
      </TelaInteira>
    </>
  );
}

export default App;
