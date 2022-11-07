import { Button, Container, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useLocalStorage from 'react-use-localstorage';
import Tema from '../../../model/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { TokenState } from '../../../store/tokens/tokenReducer';

function CadastroTema() 
{
  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  )

  const [tema, setTema] = useState<Tema>({
    id: 0,
    descricao: '',
  });

  useEffect(() => {
    if (token === '') {
      toast.error("Você precisa estar logado para fazer isso!", {
        position: "top-center", autoClose: 3000, hideProgressBar: true, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "light", progress: undefined})
      navigate('/login');
    }
  }, [token]);

  async function temaById(id: string) {
    await buscaId(`/temas/${id}`, setTema, {
      headers: { Authorization: token },
    });
  }

  useEffect(() => {
    if (id !== undefined) {
      temaById(id);
    }
  }, [id]);

  function updatedModel(event: ChangeEvent<HTMLInputElement>) {
    setTema({
      ...tema,
      [event.target.name]: event.target.value,
    });
  }

  async function cadastrar(event: ChangeEvent<HTMLFormElement>) {
    event.preventDefault()

    if(id !== undefined) {
      try {
        await put('/temas', tema, setTema, {
          headers: {'Authorization': token}
        })
        toast.success("Categoria atualizada com sucesso!", {
          position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        navigate('/temas')
      } catch (error) {
        toast.success("Falha ao atualizar o tema", {
          position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
      }
    } else {
      try {
        await post('/temas', tema, setTema, {
          headers: {'Authorization': token}
        })
        toast.success("Tema cadastrado com sucesso", {
          position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
        navigate('/temas')
      } catch (error) {
        toast.success("Falha ao atualizar o tema", {
          position: "top-right", autoClose: 2000, hideProgressBar: false, closeOnClick: true, pauseOnHover: false, draggable: false, theme: "colored", progress: undefined})
      }
    }
  }



  return (
    <>
      <Container maxWidth="sm">
        <form onSubmit={cadastrar}>
          <Typography variant="h3" component="h1">
            Novo tema
          </Typography>

          <TextField
            label="Nome do tema"
            value={tema.descricao}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              updatedModel(event)
            }
            id="descricao"
            name="descricao"
            variant="outlined"
            margin="normal"
            fullWidth
          />

          <Box display="flex" justifyContent="space-around">
            <Link to="/home">
              <Button variant="contained" color="secondary">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" variant="contained" color="primary">
              Cadastrar
            </Button>
          </Box>
        </form>
      </Container>
    </>
  );
}

export default CadastroTema;