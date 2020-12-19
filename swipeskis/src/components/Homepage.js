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
import Post from './marketplace/Post'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Marketplace from './marketplace/Marketplace'
import Sell from './sell/Sell'
import Appointments from './appointments/Appointments'



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

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
        overflowY: 'auto'
    },
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        margin:'auto'
    },
    bottomBar: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        maxWidth: '396px',
    },
    buttongroup: {
        margin: theme.spacing(1, 0, 1),

    }
}));

export default function Homepage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            
        
            <AppBar position="static">
            </AppBar>
            <TabPanel value={value} index={0}>
                <Marketplace />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Sell change={handleChange}/>
      </TabPanel>
            <TabPanel value={value} index={2}>
                <Appointments />
      </TabPanel>
            <BottomNavigation
                value={value}
                onChange={(event, newValue) => {handleChange(event, newValue)}
                }
                showLabels
                className={classes.bottomBar}
            >
                <BottomNavigationAction label="Buy" icon={<StoreIcon />} />
                <BottomNavigationAction label="Sell"  icon={<LocalAtmIcon />} />
                <BottomNavigationAction label="Appointments" icon={<ScheduleIcon />} />
            </BottomNavigation>
        </div>
    );
}




