import React from 'react';
import Grid from '@material-ui/core/Grid'
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Link from '@material-ui/core/Link';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Post from './Post'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import BottomBar from './BottomBar'
import Paper from '@material-ui/core/Paper'



const useStyles = makeStyles((theme) => ({
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    scrollable: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        maxHeight: '70vh',
        overflowY: 'auto'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
    },
    buttongroup:{
        margin: theme.spacing(1, 0, 1),

    }
}));

export default function Marketplace() {
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <ButtonGroup className={classes.buttongroup}  color="primary" aria-label="contained primary button group">
                <Button variant="contained">Breakfast</Button>
                <Button >Lunch</Button>
                <Button>Dinner</Button>
            </ButtonGroup>
            <Paper className={classes.paper}>
                <Grid container spacing={2} className={classes.scrollable}>
                    <Grid item xs={12}>
                        <Post title="Ferris" time="9:10" price="0" posted="55" rating={4} name='Adrian' initial="AP" />
                    </Grid>
                    <Grid item xs={12}>
                    <Post title="JJs" time="10:10" price="7" posted="10" rating={5} name='Sahara' initial="SC" />
                    </Grid>
                    <Grid item xs={12}>
                    <Post title="Hewitt" time="11:00" price="5" posted="124" rating={5} name='Mira' initial="MH" />
                    </Grid>
                    <Grid item xs={12}>
                    <Post title="JJs" time="10:10" price="7" posted="10" rating={5} name='Sahara' initial="SC" />
                    </Grid>
                    <Grid item xs={12}>
                    <Post title="Hewitt" time="11:00" price="5" posted="124" rating={5} name='Mira' initial="MH" />
                    </Grid>


                </Grid>

                <BottomBar className={classes.bottomBar} />
            </Paper>



        </Container>
    );
}