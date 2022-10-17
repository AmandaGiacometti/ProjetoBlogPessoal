import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from "@material-ui/icons/GitHub";
import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';


function Footer() {

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  let footerContent

  if(token !== '') {
    footerContent =




  <div className="footerOut">  

    <div className="footerIn">

        <Box className="copyright">
          <Typography>
            © 2022 Copyright: Amanda Giacometti
          </Typography>
        </Box>

        <div className="contato">

          <Box className="gostou">
            <Typography>
              Gostou do projeto? Me encontre por aqui:
            </Typography>
          </Box>
            
          <Box className="icones">
            <a 
              href="https://www.linkedin.com/in/mangiaco/"
              target="_blank"
              className="iconeImagem"
            >
              <GitHubIcon style={{ fontSize: 35, color: "white" }} />
            </a>
            <a
              href="https://github.com/ManGiaco"
              target="_blank"
              className="iconeImagem"
            >
              <LinkedInIcon style={{ fontSize: 40, color: "white" }} />
            </a>
          </Box>

        </div>

    </div>
  </div>  
 }

 return (
   <>
     {footerContent}
   </>
 );
}

export default Footer;
