import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StoreIcon from '@material-ui/icons/Store';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ScheduleIcon from '@material-ui/icons/Schedule';
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
import Container from '@material-ui/core/Container';
import Post from './Post'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import BottomBar from '../main/BottomBar'
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
        maxHeight: '65vh',
        overflowY: 'auto',
        margin:'auto'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    bottomBar: {
        // flexGrow: 1,
        // backgroundColor: theme.palette.background.paper,
        // position: 'absolute',
        // bottom: 0,
        // maxWidth:'667',
    },
    buttongroup: {
        margin: theme.spacing(1, 0, 1),

    }
}));

export default function Marketplace() {
    const classes = useStyles();

    return (
        <div style={{alignItems:'center'}}>
            <ButtonGroup className={classes.buttongroup} color="primary" aria-label="contained primary button group">
                <Button variant="contained">Breakfast</Button>
                <Button >Lunch</Button>
                <Button>Dinner</Button>
            </ButtonGroup>
            
                <Grid container spacing={2} className={classes.scrollable}>
                    <Grid item xs={12}>
                        <Post title="Ferris" time="9:10" price="0" posted="55" rating={4} name='Adrian' initial="AP" />
                    </Grid>
                    <Grid item xs={12}>
                        <Post title="JJs" time="10:10" price="7" posted="10" rating={5} name='Sahara' initial="SC" />
                    </Grid>
                    <Grid item xs={12}>
                        <Post title="Hewitt" time="10:30" price="5" posted="124" rating={5} name='Mira' initial="MH" />
                    </Grid>
                    <Grid item xs={12}>
                        <Post title="JJs" time="11:10" price="7" posted="23" rating={5} name='Lucas' initial="LJ" />
                    </Grid>
                    <Grid item xs={12}>
                        <Post title="Ferris" time="11:30" price="3" posted="0" rating={5} name='Tommy' initial="TJK" />
                    </Grid>

                </Grid>

                {/* <BottomBar className={classes.bottomBar} /> */}
            
        </div>
    )
}