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

          <div className="coluna1Cadastro">
              <img 
              src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/oxala%20wide.jpg?raw=true" 
              alt="" 
              className="polaroidd"
              />
              <img 
              src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/regia%20wide.jpg?raw=true" 
              alt="" 
              className="polaroidd"
              />
              <img 
              src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/lencois%20wide.jpg?raw=true" 
              alt="" 
              className="polaroidd"
              />
          </div>      
          
          <div className="coluna2Cadastro">

          <div className="formularioCadastro">
          
            <form onSubmit={cadastrar} className="formCadastro">

              <Typography className="tituloCadastre">
                Cadastre-se
              </Typography>

              <div className="preenchimento">
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
              </div>

              <div className="botoes">
                
                <Button 
                  type="submit" 
                  variant="contained" 
                  className="botaoCadastrar"
                  /*disabled={!cadastro}*/ > 
                  Cadastrar
                </Button>

                <Link to="/login">
                  <Button 
                    type="submit"  
                    variant="contained"
                    className="botaoCancelar"
                    >
                    Cancelar
                  </Button>
                </Link>

              </div>

            </form>

          </div>

          </div>

          <div className="coluna3Cadasttro">
              <img 
              src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/cachadaco%20wide.jpg?raw=true" 
              alt="" 
              className="polaroidd"
              />
              <img 
              src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/tuiuiu%20wide.jpg?raw=true" 
              alt="" 
              className="polaroidd"
              />
              <img 
              src="https://github.com/ManGiaco/BancoDeImagens/blob/main/Estrada%20sem%20Fim/Fotos%20retangulares/madrugada%20wide.jpg?raw=true" 
              alt="" 
              className="polaroidd"
              />
          </div>

    </div>

);
}

export default CadastroUsuario;