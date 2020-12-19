import React from 'react';
import { Button, AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade, makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import Popover from '@material-ui/core/Popover';
import { Checkbox, FormControl, FormLabel, FormGroup, Paper, FormControlLabel } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
    // display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  button: {
    margin: '20px',
    // marginRight:'90px',
  },
  form: {
    margin: '50px',
    // marginRight:'90px',
  }
}));

export default function Bar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [state, setState] = React.useState({
    buyer: false,
    seller: false,
  });

  const handleChange = (event) => {
    console.log(state)
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { buyer, seller } = state;
  const error = [buyer, seller].filter((v) => v).length !== 2;



  return (
    <div className={classes.root}>
      <AppBar style={{ flexGrow: 1 }} position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Swipeskis
          </Typography>
          <Button color="inherit" style={{ marginLeft: 'auto' }} onClick={handleClick}>Check In Demo</Button>

          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
          >
            <Paper>
              <FormControl component="fieldset" className={classes.formControl}>

                <FormGroup className={classes.form}>
                  <Typography align='center' style={{ margin: 'auto', maxWidth: '220px' }} component="legend">Buyer and Seller must check in to process payment</Typography>

                  <FormControlLabel
                    control={<Checkbox checked={buyer}  onChange={handleChange} name="buyer" />}
                    label="Buyer"
                  />
                  <FormControlLabel
                    control={<Checkbox checked={seller}onChange={handleChange} name="seller" />}
                    label="Seller"
                  />

                  <Button onClick={handleClose} disabled={!(buyer && seller)} className={classes.button} variant="contained" color="primary">
                    Process Payment of $7
</Button>

                </FormGroup>
              </FormControl>
            </Paper>
          </Popover>
        </Toolbar>
      </AppBar>
    </div>
  );
}