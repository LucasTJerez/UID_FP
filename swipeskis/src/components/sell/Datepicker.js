import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  DatePicker,
  TimePicker,
  DateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Typography from '@material-ui/core/Typography'

export default function Datepicker() {
  const [selectedDate, handleDateChange] = useState(new Date());

  return (
      <div>
          <Typography id="discrete-slider-custom" gutterBottom>
                Time
      </Typography>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DateTimePicker value={selectedDate} onChange={handleDateChange} />
    </MuiPickersUtilsProvider>
    </div>
  );
}