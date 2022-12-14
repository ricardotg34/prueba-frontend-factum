import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h3: {
      fontSize: '2.5rem',
       fontWeight: 600,
       color: '#011B33'
    },
    h4: {
      fontSize: '1.5rem',
       fontWeight: 600,
       color: '#011B33'
    },
    h5: {
      fontSize: '1.25rem',
       fontWeight: 600,
       color: '#011B33'
    }
  },
  palette: {
    primary: {
      main: '#BC1224'
    },
    action: {
      hover: "#E9E9E9"
    },
    success: {
      main: '#23B794',
    },
  }
});

export {theme};