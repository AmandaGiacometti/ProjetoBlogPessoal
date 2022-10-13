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
        src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/uk.png"
        alt=""
        width="20vw"
        height="20vw"
      />
      <p className="clickTranslate">Translate</p>
    </div>

    <div className="searchImage">
      <img 
      src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/pesquisa.png" 
      alt="" />
    </div>

</div>

<div className="fotoBarraca">
    <img 
    src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/barraca.png" 
    alt="" />
</div>

<div className="navbarPrincipal">      
    <Box className="opcoes">
      <Typography>
        Home
      </Typography>
    </Box>

    <Box className="opcoes">
      <Typography>
        Postagens
      </Typography>
    </Box>

    <Box className="opcoes">
      <Typography>
        Temas
      </Typography>
    </Box>

    <Box className="opcoes">
      <Typography>
        Cadastrar temas
      </Typography>
    </Box>

    <Link className="opcoes" to="/login">
      <Box>
        <Typography>
          Logout
        </Typography>
      </Box>
    </Link>

    <Box className="opcoes">
      <Typography>
        Sobre mim
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