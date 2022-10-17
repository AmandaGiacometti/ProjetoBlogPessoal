import { Typography, Button } from '@material-ui/core';
import { Box, Grid, TextField } from '@mui/material';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UsuarioLogin from '../../model/UsuarioLogin';
import { login } from '../../services/Service';
import { addToken, addId } from '../../store/tokens/action';
import './Login.css';

function Login() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [token, setToken] = useState('')

  const [userLogin, setUserLogin] = useState<UsuarioLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: '',
  });
  
  const [respUserLogin, setRespUserLogin] = useState<UsuarioLogin>({
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

  useEffect(() => {
    if(userLogin.usuario !== '' && userLogin.senha !== '' && userLogin.senha.length >= 8) {
      setForm(true)
    }
  },[userLogin])

  const [form, setForm] = useState(false)

  async function conectar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await login('usuarios/logar', userLogin, setRespUserLogin);
      toast('✈🌎 Boa viagem pelo blog ✈🌎', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      })
    } catch (error) {
      toast.error('Falha no login', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        theme: "dark",
      })
    }
  }

  useEffect(() => {
    if (token !== '') {
      dispatch(addToken(token))
      navigate('/home');
    }
  }, [token]);

  //metodo para pegar o token e o id do json e guardar no redux
  useEffect(()=> {
    if(respUserLogin.token !== ''){
      dispatch(addToken(respUserLogin.token))
      dispatch(addId(respUserLogin.id.toString()))
      navigate('/home');
    }
  }, [respUserLogin.token])
  
  
  return (

    <div className="caixotonaMae">
          
          <div className="coluna1Login">
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Fotos%20retangulares/caatinga%20wide.jpeg" 
              alt="" 
              className="polaroid"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Fotos%20retangulares/noronha%20wide.jpg" 
              alt="" 
              className="polaroid"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Fotos%20retangulares/rio%20wide.jpg" 
              alt="" 
              className="polaroid"
              />
          </div>  


            <div className="coluna2Login">
              
              <div className="header">
                <img 
                  src="https://github.com/ManGiaco/BancoDeImagens/blob/main/%C3%8Dcones/Logo%20do%20blog.png?raw=true" 
                  alt="" 
                  width=""
                  className="logo"
                  />
              </div>

              <div className="formularioLogin">

                <form className="formLogin" onSubmit={conectar}>
                  <Typography className="tituloEntrar">
                    Login
                  </Typography>

                  <TextField 
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

                  <TextField
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

                  <Button 
                    type='submit'
                    className="botaoEntrar"
                  >
                    Entrar
                  </Button>

                </form>

                <Box>
                  <Typography className="ainda">
                    Ainda não tem uma conta?
                  </Typography>

                  <Link to="/cadastro">
                    <Typography className="cliqueCadastre">
                      Cadastre-se
                    </Typography>
                  </Link>
                </Box>
                
              </div>

            </div>

            <div className="coluna3Login">
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Fotos%20retangulares/onca%20wide.jpg" 
              alt="" 
              className="polaroid"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Fotos%20retangulares/paraty%20wide.jpg" 
              alt="" 
              className="polaroid"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/Fotos%20retangulares/caprichoso%20wide.jpeg" 
              alt="" 
              className="polaroid"
              />
          </div>
                  
    </div>

);
}

export default Login;