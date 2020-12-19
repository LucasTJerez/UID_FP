import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import StoreIcon from '@material-ui/icons/Store';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles({
  root: {
    // width: 500,
  },
});

export default function BottomBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Buy" icon={<StoreIcon />} />
      <BottomNavigationAction label="Sell" icon={<LocalAtmIcon />} />
      <BottomNavigationAction label="Appointments" icon={<ScheduleIcon />} />
    </BottomNavigation>
  );
}