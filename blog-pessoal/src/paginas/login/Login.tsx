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
      toast.success('Usuario conectado. tamo juntão', {
        theme: 'colored',
        autoClose: 2000,
        hideProgressBar: true
      })
    } catch (error) {
      toast.error(`Deu ruim.`, {
        theme: 'colored',
        autoClose: 2000,
        hideProgressBar: true
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