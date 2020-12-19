import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 300,
    },
    margin: {
        height: theme.spacing(3),
    },
}));

const marks = [
    {
        value: 0,
        label: 'Free',
    },
    {
        value: 5,
        label: '5$',
    },
    {
        value: 10,
        label: '10$',
    },
];

function valuetext(value) {
    return `${value} swipes`;
}

export default function PriceSlider() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Typography id="discrete-slider-custom" gutterBottom>
                Price per swipe
      </Typography>
            <Slider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-custom"
                step={1}
                valueLabelDisplay="auto"
                marks={marks}
                max={10}
                min={0}
            />
        </div>
    );
}