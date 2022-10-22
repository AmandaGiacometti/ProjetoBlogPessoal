import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToken } from '../../../store/tokens/action';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './Navbar.css';

function Navbar() {

  let history = useNavigate()
  let dispatch = useDispatch()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

    function goLogout() {
        dispatch(addToken(''))
        
        alert("Usuário deslogado")
        history("/login")
    }

    let navBarComponent

    if(token !== '') {
      navBarComponent = <AppBar position="static">

   
<div className="containerzao">

  <div className="upperNav">

      <div className="translate">
        <img
          className="ukFlag"
          src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/%C3%8Dcones/Bandeira%20inglaterra.png?raw=true"
          alt=""
          width="20vw"
          height="20vw"
        />
        <p className="clickTranslate">Translate</p>
      </div>

      <div className="searchImage">
        <img 
        src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/%C3%8Dcones/Caixa%20de%20pesquisa.png?raw=true" 
        alt="" />
      </div>

  </div>

  <div className="navCentral">
      <img 
      src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/P%C3%A1ginas%20feitas%20no%20Figma/Header%20barraca.png?raw=true" 
      alt="" 
      className="fotoBarraca"
      />
  </div>

  <div className="navbarPrincipal">      
      <Box className="opcoes">
        <Link to="/home">
          <Typography className="opcoesTexto">
            Home
          </Typography>
        </Link>
      </Box>

      <Box className="opcoes">
        <Link to="/posts">
            <Typography>
              Postagens
            </Typography>
        </Link>
      </Box>

      <Box className="opcoes">
        <Link to="/editarPost/:id">
            <Typography>
              Cadastrar Postagem
            </Typography>
        </Link>
      </Box>

      <Box className="opcoes">
        <Link to="/temas" className="navLink">
            <Typography>
              Temas
            </Typography>
        </Link>
      </Box>

      <Box className="opcoes">
        <Link to='/cadastroTema'>
          <Typography>
            Cadastrar Tema
          </Typography>
        </Link>
      </Box>

      <Box className="opcoes">
        <Link to='/perfil'>
          <Typography>
            Perfil
          </Typography>
        </Link>
      </Box>

      <Box className="opcoes" onClick={goLogout}>
        <Typography>
          Logout
        </Typography>
      </Box>

  </div>
</div>
</AppBar>
}

  return (
    <>
      {navBarComponent}
    </>
  );
}

export default Navbar;