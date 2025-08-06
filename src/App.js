import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Card from './view/Cards';
import { GlobalStyle } from './styles/styledComponents';
import './App.css';

// Animação de giro da Pookebola
const girar = keyframes`
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
`;

const PokebolaContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #0b0c10;
  justify-content: center;
  align-items: center;
`;

const Pokebola = styled.img`
  width: 120px;
  animation: ${girar} 2s linear infinite;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 40px;
  align-items: center;

  @media(min-width: 768px){
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }
`;

const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 50px;
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  font-size: 35px;
  
  @media(max-width: 768px){
    font-size: 28px;
  }
`;

const Img = styled.img`
  width: 11%;
  border-radius: 10px;
`;

function App() {
  const [mostrarPokedex, setMostrarPokedex] = useState(false);

  return (
    <>
      <GlobalStyle/>

      {!mostrarPokedex ? (
        <PokebolaContainer>
          <Pokebola
            src="https://pngimg.com/uploads/pokeball/pokeball_PNG8.png"
            alt="Pokebola girando"
            onClick={() => setMostrarPokedex(true)}
          />
        </PokebolaContainer>
      ) : ( //separação dos itens para serem vizualizados
        <>
          <Header>
            <h1 style={{ textShadow: '2px 2px 4px rgb(0, 128, 255)', color: '#eff0d1' }}>POKEDEX</h1>
            <Img src="https://sdmntprsouthcentralus.oaiusercontent.com/files/00000000-1db8-61f7-9724-d5b946bca343/raw?se=2025-08-06T16%3A08%3A48Z&sp=r&sv=2024-08-04&sr=b&scid=f0db9f77-898f-5d19-9746-2e53d23d75a7&skoid=31bc9c1a-c7e0-460a-8671-bf4a3c419305&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-08-06T02%3A21%3A41Z&ske=2025-08-07T02%3A21%3A41Z&sks=b&skv=2024-08-04&sig=kAHUq3hajpij1muOFXV/vsA34504UuiVj4O1PqtAT/M%3D"
            onClick={() => setMostrarPokedex(false)}
            />
          </Header>

          <Container>
            <Card
              imagem="https://i.pinimg.com/736x/bf/95/34/bf953419d76bf747cba69b55e6e03957.jpg"
              titulo="Pikachu"
              texto=" Pokémon Tipo Elétrico⚡"
              corTexto="#f97068"
            />
            <Card
              imagem="https://preview.redd.it/oj0d97dt11461.jpg?auto=webp&s=e1ec996f8a5c9d107945308734338234ad062ecf"
              titulo="Squirtle"
              texto="Pokémon Tipo Água💧"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9algHP6rhazKZIWdL0dLw6NNz2xQ8RNvIxg&s"
              titulo="Bulbasaur"
              texto="Pokémon Tipo Planta🍃"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVkFSN4ERFaavVDH4fF60ENPR8-oCW72mMCg&s"
              titulo="Caterpie"
              texto="Pokémon Tipo Planta🍃"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeVFNKUT6OcGKlCRlHkyDawCkLEX4fPpQsEw&s"
              titulo="Charmander"
              texto="Pokémon Tipo Fogo🔥"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ob72Gj6an6R9Ha8qF0wm-pLWf-AyZ-bX1A&s"
              titulo="Pidgey"
              texto="Pokémon Tipo Voador💨"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7sWzKVsFYPB_xHtSnVVFcyTG3s01odoX6xA&s"
              titulo="Riolu"
              texto="Pokémon Tipo Lutador🥊"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTOl8gzBbuyXA98dzpa82nCSmzF__B8OMCA&s"
              titulo="Eevee"
              texto="Pokémon Tipo Normal"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqauVF1ZRUC45e_s0iIBdo1DDRvZxL_OvwA&s"
              titulo="Gastly"
              texto="Pokémon Tipo Fantasma👻"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSo2PVnYSGU3xid9cmQGhv7IsIEWOAnPiSg&s"
              titulo="Snorlax"
              texto="Pokémon Tipo Normal"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA1SWgTy66CCVApQOzXgSbVHK7_-3Fiq9xJA&s"
              titulo="Zubat"
              texto="Pokémon Tipo Voador💨"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyW8RZuxfdmoU1P225iD4ER_ZDYAOlsXFzqQ&s"
              titulo="Geodude"
              texto="Pokémon Tipo Pedra"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZGz-OpJhYmb0jAxXfikJRmHEWAh9PUb8YQ&s"
              titulo="Poliwag"
              texto="Pokémon Tipo Água💧"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfDKo7kGB7IbQlP9Ikut4GunrKEyAMpwWug&s"
              titulo="Psyduck"
              texto="Pokémon Tipo Água💧"
              corTexto="#f97068"
            />
            <Card
              imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVEb-uIDx8Sk4xC2nc2tspqoaf4Lw4J8lGcg&s"
              titulo="Jigglypuff"
              texto="Pokémon Tipo Normal"
              corTexto="#f97068"
            />
          </Container>
        </>
      )}
    </>
  );
}

export default App;
