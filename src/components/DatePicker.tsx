
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';

interface BasicDatePickerProps {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
}

const BasicDatePicker = (props: BasicDatePickerProps) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        inputFormat='YYYY/MM/DD'
        label="Fecha de nacimiento"
        value={props.value}
        onChange={props.onChange}
        renderInput={(params) => <TextField {...params}  variant="standard" required/>}
      />
    </LocalizationProvider>
  );
}

export default BasicDatePicker;