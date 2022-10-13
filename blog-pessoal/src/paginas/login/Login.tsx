import { Typography, Button } from '@material-ui/core';
import { Box, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import UsuarioLogin from '../../model/UserLogin';
import { login } from '../../services/Service';
import './Login.css';

function Login() {
  let navigate = useNavigate();
  const [token, setToken] = useLocalStorage('token');
  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUserLogin({
      ...userLogin,
      [event.target.name]: event.target.value,
    });
  }

  async function conectar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login('usuarios/logar', userLogin, setToken);
    } catch (error) {
      alert('Dados de usuário inválidos, Tente novamente.')
    }
  }

  useEffect(() => {
    if (token !== '') {
      navigate('/home');
    }
  }, [token]);

  return (

    <div className="caixotonaMae">
          
          <div className="coluna1">
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/caatinga%20wide.jpeg" 
              alt="" 
              height="190vw"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/noronha%20wide.jpg" 
              alt="" 
              height="190vw"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/rio%20wide.jpg" 
              alt="" 
              height="190vw"
              />
          </div>  


            <div className="paginaLogin">
                <form className="form" onSubmit={conectar}>
                  <Typography className="entrar">
                    Entrar
                  </Typography>
                  <TextField className="usuario"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                    }
                    value={userLogin.usuario}
                    id="usuario"
                    name="usuario"
                    label="Usuário"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                  />
                  <TextField className="senha"
                    onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    updateModel(event)
                    }
                    value={userLogin.senha}
                    id="senha"
                    name="senha"
                    label="Senha"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                  />
                  <Button className="botao" type='submit'>
                    Entrar
                  </Button>
                </form>
                <Box className="cadastrar">
                  <Typography className="ainda">
                    Ainda não tem uma conta?
                  </Typography>
                  <Link to="/cadastro">
                    <Typography className="cadastrase">
                      Cadastre-se
                    </Typography>
                  </Link>
                </Box>
            </div>

            <div className="coluna3">
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/onca%20wide.jpg" 
              alt="" 

              height="190vw"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/paraty%20wide.jpg" 
              alt="" 

              height="190vw"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/caprichoso%20wide.jpeg" 
              alt="" 

              height="190vw"
              />
          </div>
                  
    </div>
  );
}

export default Login;