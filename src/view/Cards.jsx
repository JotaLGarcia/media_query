import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #212738;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  transition: 0.3s;
  color: white;
  &:hover {
    transform: scale(1.05);
  }
}
`;

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const Titulo = styled.h2`
  margin: 15px 0;
  text-shadow: 1px 1px 3px rgb(0, 0, 0);
  font-size: 28px;
`;

const Texto = styled.p`
  font-size: 16px;
  color: ${(props) => props.corTexto || '#f97068'};
`;

export default function Card({ imagem, titulo, texto, corTexto }) {
  return (
    <CardContainer>
      <Img src={imagem} alt={titulo} />
      <Titulo>{titulo}</Titulo>
      <Texto corTexto={corTexto}>{texto}</Texto>
    </CardContainer>
  );
}