import { AppBar, Toolbar, Box, Typography, Grid } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToken } from '../../../store/tokens/action';
import { TokenState } from '../../../store/tokens/tokenReducer';
import './Navbar.css';

function Navbar() {

  let history = useNavigate()
  let dispatch = useDispatch()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  /*let navigate = useNavigate()*/

    function goLogout() {
        dispatch(addToken(''))
        toast.info("Boa viagem pra casa!", {
          position: "top-right", autoClose: 2000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "dark", progress: undefined})
        history("/login")
    }

    let navBarComponent

    /*if(token !== '') {*/

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
        <Link to="/posts/saopaulo">
            <Typography>
              São Paulo
            </Typography>
        </Link>
      </Box>

      <Box className="opcoes">
        <Link to="/posts/brasil">
            <Typography>
              Brasil
            </Typography>
        </Link>
      </Box>

      <Box className="opcoes">
        <Link to="/posts/mundo" className="navLink">
            <Typography>
              Mundo
            </Typography>
        </Link>
      </Box>

      <Box className="opcoes">
        <Link to='/sobremim'>
          <Typography>
            Sobre mim
          </Typography>
        </Link>
      </Box>

      <Box>
        <div className="navbarIcones">
          <div className="dropdown">

            <img 
            src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Ref%C3%BAgio%20da%20Moda/%C3%8Dcones/Perfil%20branco.png?raw=true" 
            alt=""
            className="iconePerfil"
            />
            <div className="dropdown-content">

              <Link to="/login">
                  <Typography className="opcoesDropdown"> 
                      Login
                  </Typography> 
              </Link>

              <Link to="/posts">
                  <Typography className="opcoesDropdown"> 
                      Postagens
                  </Typography> 
              </Link>

              <Link to="/criarPost">
                  <Typography className="opcoesDropdown"> 
                      Editar postagens
                  </Typography> 
              </Link>

              <Link to="/temas">
                  <Typography className="opcoesDropdown"> 
                      Temas
                  </Typography> 
              </Link>

              <Link to="/cadastroTema">
                  <Typography className="opcoesDropdown"> 
                      Editar temas
                  </Typography> 
              </Link>



              <Typography onClick={goLogout} className="opcoesDropdown"> 
                Logout
              </Typography> 
            
            </div>
          </div>
        </div>
      </Box>

  </div>
</div>
</AppBar>


  return (
    <>
      {navBarComponent}
    </>
  );
}

export default Navbar;