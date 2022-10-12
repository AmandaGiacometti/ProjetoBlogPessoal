import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    
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
  );
}

export default Navbar;
