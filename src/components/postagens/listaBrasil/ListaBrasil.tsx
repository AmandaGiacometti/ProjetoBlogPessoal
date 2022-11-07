import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../model/Postagem';
import { busca } from '../../../services/Service'
import { AppBar, Box, Grid, InputBase, Toolbar } from '@mui/material';
import { alpha, makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import './ListaBrasil.css';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokenReducer';
import { toast } from 'react-toastify';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { BounceLoader } from 'react-spinners';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles({
    root: {
        width: 345,
        display: "inline-block",
        margin: 20,
    },
    media: {
        height: 440,
    },
});

const useStyles2 = makeStyles((theme: Theme) =>
createStyles({

    root: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(5),
            width: 'auto',
        },
    },

    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputRoot: {
        color: 'primary',
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '31ch',
            },
        },
    },
}),
);

export function ListaBrasil(props:any) {

    const [loading, setLoading] = useState(true)
    const classes = useStyles();
    const classes2 = useStyles2();
    const [postagem, setPostagens] = useState<Postagem[]>([])
    let navigate = useNavigate();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )

    let filter = props.inputText;

    let handleFilter = (event: any) => {
        let lowerCase = event.target.value.toLowerCase();
        props.setInputText(lowerCase);
        console.log("search bar:" +lowerCase);
        let filter = lowerCase
        console.log("filter: "+filter);
    }

async function getPostagem() {
    await busca("/posts", setPostagens, {
        headers: {
            'Authorization': token
        },  
    })
    setLoading(false)
}

    useEffect(() => {
        getPostagem()
    }, [postagem.length])

return (
    <>

    <div className={classes2.root}>
        <AppBar position="static">
            <Toolbar className='pesquisa-postagens'>
                <div className={classes2.search}>
                    <div className={classes2.searchIcon}>
                        <SearchIcon className='color-searchicon' />
                    </div>
                    <InputBase
                    placeholder="Procure aqui" onChange={handleFilter}
                    classes={{
                        root: classes2.inputRoot,
                        input: classes2.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
            </Toolbar>
        </AppBar>
    </div>

    {loading ? <BounceLoader
                    className="loading-produtos"
                    color="#8806BF"
                    loading
                    size={80}
                    speedMultiplier={1}
                />  
    : 

    <Grid container direction="row" justifyContent="center" alignItems="center" className='grid-equipe'>
        {
        postagem.filter((postagem) => {
            return postagem.titulo.toLowerCase().includes(filter);
        })
        .map((postagem => (

        <Box className='box-produtos'>
            {postagem.tema?.descricao==='Brasil'? 
            <Card className='cards-produtos' variant="outlined" >
                <CardActionArea>
                    {/* <CardMedia
                        className={classes.media}
                        image={produto.foto}
                        title="Contemplative Reptile"
                    /> */}

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {postagem.titulo}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2">
                            {postagem.tema?.descricao}
                        </Typography>
                        <Typography variant="h6" color="textPrimary" component="h4">
                            R$ {postagem.texto}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Postado por: {postagem.usuario?.nome}
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>
        : ''}
    </Box>
    )))
    }
    </Grid>
    }

    </>
)
}
