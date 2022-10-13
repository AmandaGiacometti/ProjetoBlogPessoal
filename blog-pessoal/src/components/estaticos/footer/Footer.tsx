import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
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




  <div className="seila">  
    <div className="footerContainerzao">

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
            >
              <GitHubIcon style={{ fontSize: 35, color: "white" }} />
            </a>
            <a
              href="https://github.com/ManGiaco"
              target="_blank"
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
