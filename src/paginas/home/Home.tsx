import { Box, Button, Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import TabPostagens from '../../components/postagens/tabPostagens/TabPostagens';
import { TokenState } from '../../store/tokens/tokenReducer';
import './Home.css';
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function Home() {

  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  useEffect(() => {
    if (token === '') {
      alert('Você precisa estar logado para acessar o blog')
      navigate('/login')
    }
  }, [token])



  return (
    <div className="homeCarrossel">
      <Swiper
        className="carrossel"
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >

          <SwiperSlide className="slide">
            <img 
            src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/cachadaco%20wide.jpg?raw=true" 
            alt="" 
            className="imagemSlide"
            />
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img 
            src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/madrugada%20wide.jpg?raw=true" 
            alt="" 
            className="imagemSlide"
            />
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img 
            src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/noronha%20wide.jpg?raw=true" 
            alt="" 
            className="imagemSlide"
            />
          </SwiperSlide>

          <SwiperSlide className="slide">
            <img 
            src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/lencois%20wide.jpg?raw=true" 
            alt="" 
            className="imagemSlide"
            />
          </SwiperSlide>

      </Swiper>
    </div>
  );
}

export default Home;