import { createTheme } from '@mui/material/styles';


export const defaultTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0ba7ce'
    },
    secondary: {
      main: '#D3DB14'
    },
    info: {
      main: '#dbdbdb'
    }
  },
  typography: {
    fontFamily: "Nunito, sans-serif",
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 785,
      md: 900,
      lg: 1200,
      xl: 1536,
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'none',
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 2,
        position: 'fixed',
      },
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          height: 60
        },
      }
    },

    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: 45,
          fontWeight: 'bold'
        },
        h2: {
          fontSize: 30,
          fontWeight: 400
        },
        h3: {
          fontSize: 18,
          fontWeight: 300
        },
        subtitle1: {
          fontSize: 18,
          fontWeight: 600
        }
      }
    },


    MuiButton: {
      defaultProps: {
        variant: 'contained',
        size: 'small',
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          boxShadow: 'none',
          borderRadius: 5,
          backgroundColor: 'transparent'
        }
      }
    },


    MuiCard: {
      defaultProps: {
        elevation: 0
      },
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 5px rgba(0,0,0,0.2)',
          borderRadius: '10px',
        }
      }
    }
    
  }
});