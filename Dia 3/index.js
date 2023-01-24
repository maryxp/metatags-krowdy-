import React from 'react'
import ReactDOM from 'react-dom/client'
import { CssBaseline } from '@mui/material' /*Remueve todos los estilos*/
import { ThemeProvider, createTheme } from '@mui/material/styles' /*Instalando un sistema de diseño*/
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

    //Provee un sistema de diseño basico
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        body: {                             //Intensidad de gris
          backgroundColor: theme.palette.grey[100]  /*Solo un color unico*/
        }
      })
    }
  }
})
/* AL listar ver todos los sistemas de diseño que se deben contemplar-Para reutilizarlo
console.log(theme)
*/

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
)