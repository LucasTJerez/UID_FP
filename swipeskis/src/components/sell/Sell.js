import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import SwipeSlider from './SwipeSlider';
import PriceSlider from './PriceSlider';
import Datepicker from './Datepicker';
import Button from '@material-ui/core/Button';
// import { FormHelperText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(2)
  }
}));

export default function CheckboxesGroup(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    JJs: false,
    JohnJay: false,
    Ferris: false,
    Hewitt: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { JJs, JohnJay, Ferris, Hewitt } = state;
  const error = [JJs, JohnJay, Ferris, Hewitt].filter((v) => v).length !== 2;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select a dining hall</FormLabel>
        <FormGroup row={true}>
          <FormControlLabel
            control={<Checkbox checked={JJs} disabled={JohnJay || Ferris || Hewitt} onChange={handleChange} name="JJs" />}
            label="JJ's"
          />
          <FormControlLabel
            control={<Checkbox checked={JohnJay} disabled={JJs || Ferris || Hewitt} onChange={handleChange} name="JohnJay" />}
            label="John Jay"
          />
          <FormControlLabel
            control={<Checkbox checked={Ferris} disabled={JJs || JohnJay || Hewitt} onChange={handleChange} name="Ferris" />}
            label="Ferris"
          />
          <FormControlLabel
            control={<Checkbox checked={Hewitt} disabled={JJs || Ferris || JohnJay} onChange={handleChange} name="Hewitt" />}
            label="Hewitt"
          />
          

        </FormGroup>
        <SwipeSlider />
          <PriceSlider />
          <Datepicker />
        <Button onClick={()=>{props.change(0,0)}} disabled={!JJs && !Ferris && !Hewitt && !JohnJay}  className={classes.button} variant="contained" color="primary">
          Submit
</Button>
<FormHelperText error={!JJs && !Ferris && !Hewitt && !JohnJay} style={{margin:'auto'}}>Select at least one dining hall</FormHelperText>
        


      </FormControl>

    </div>
  );
}