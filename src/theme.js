import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export const theme =responsiveFontSizes(
     createTheme({
  palette: {
    primary: {
        main: "#5E6282",
    },
    secondary: {main:"#FFFFFF"},
 
    typography: {
        fontSize: '16px',
        '@media (min-width:600px)': {
            fontSize: '10px',
          },
          '@media (min-width:900px)': {
            fontSize: '12px',
          },
        fontFamily: 'poppins, sans-serif',
        h1: {
          fontWeight: 900,
          fontSize: '4.5rem',
        },
        h2: {
          fontWeight: 900,
          fontSize: '3.75rem',
        },
        h3: {
            fontWeight: 900,
            fontSize: '3rem',
          },
        body1: {
          fontWeight: 400,
          fontSize: '1rem',
        },
        body2: {
          fontWeight: 300,
          fontSize: '1.125rem',
        },
        subtitle1: {
          fontWeight: 400,
          fontSize: '1.8rem',
          lineHeight: '19px',
        },
        subtitle2: {
          fontWeight: 400,
           fontSize: '1.5rem',

        },
        button: {
          textTransform: 'none',
          fontSize: '1rem',
          letterSpacing: '4%',
        },
      },
  },
}), { factor: 1.2 },);