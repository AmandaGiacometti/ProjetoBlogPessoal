import { Typography } from '@material-ui/core';
import { Box, Button, Grid, TextField } from '@mui/material';
import { ChangeEvent, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Usuario from '../../model/Usuario';
import { cadastroUsuario } from '../../services/Service';
import './CadastroUsuario.css';


function CadastroUsuario() {
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>('');

  const [cadastro, setCadastro] = useState(false)

 

  function confirmarSenhaHandle(event: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(event.target.value);
  }

  // One way binding
  const [user, setUser] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  const [userResult, setUserResult] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  useEffect(() => {
    if(user.nome.length > 3 && user.usuario !== '' && user.senha.length >= 8 ) {
      setCadastro(true)
    }
  }, [user])

  function updateModel(event: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }

  //  == > comparação basica => 2 = '2'
  //  === > comparação estrita => 2 != '2'

  async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (confirmarSenha === user.senha && user.senha.length >= 8) {
      try {
        await cadastroUsuario('usuarios/cadastrar', user, setUserResult);
        alert('Usuário criado com sucesso. Efetue seu login, por favor.');
      } catch (error) {
        alert('Falha ao cadastrar o usuário. Por favor, confira os campos');
      }
    } else {
      alert(
        'Senhas divergentes, ou menores que 8 caracteres. Por favor, verifique os campos.'
      );
    }
  }

  useEffect(() => {
    if (userResult.id !== 0) {
      navigate('/login');
    }
  }, [userResult]);

  return (
    
    <div className="megaContainer">

          <div className="coluna1">
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/oxala%20wide.jpg" 
              alt="" 
              height="190vw"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/regia%20wide.jpg" 
              alt="" 
              height="190vw"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/lencois%20wide.jpg" 
              alt="" 
              height="190vw"
              />
          </div>      
          
          <div className="caixaFormulario">
          <form onSubmit={cadastrar} className="formulario">

              <Typography>
                Cadastre-se
              </Typography>

              <TextField
                required
                name="nome"
                value={user.nome}
                id="nome"
                label="Nome completo"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  updateModel(event)
                }
              />
              <TextField
                required
                name="usuario"
                value={user.usuario}
                id="usuario"
                label="Usuário (email)"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
                }
              />
              <TextField
                required
                name="foto"
                value={user.foto}
                id="foto"
                label="Foto (url)"
                variant="outlined"
                fullWidth
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
                }
              />
              <TextField
                required
                name="senha"
                value={user.senha}
                id="senha"
                label="Senha"
                variant="outlined"
                fullWidth
                type="password"
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                updateModel(event)
                }
              />
              <TextField
                required
                name="confirmarSenha"
                value={confirmarSenha}
                id="confirmarSenha"
                label="Confirmar senha"
                variant="outlined"
                fullWidth
                type="password"
                margin="normal"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(event)
                }
              />

              <Link to="/login">
                <Button type="submit" variant="contained">
                  Cancelar
                </Button>
              </Link>
                
              <Button type="submit" variant="contained" /*disabled={!cadastro}*/ > 
                Cadastrar
              </Button>

          </form>
          </div>

          <div className="coluna3">
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/cachadaco%20wide.jpg" 
              alt="" 
              height="190vw"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/tuiuiu%20wide.jpg" 
              alt="" 
              height="190vw"
              />
              <img 
              src="https://raw.githubusercontent.com/ManGiaco/BancoDeImagens/main/wide/madrugada%20wide.jpg" 
              alt="" 
              height="190vw"
              />
          </div>

    </div>

);
}

export default CadastroUsuario;