import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import { red, brown } from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#F1C40F',
    main: '#5D6D7E',
    dark: '#F1C40F',
    contrastText: '#fff',
  },
  secondary: {
    light: '#efdcd5',
    main: '#d7ccc8',
    dark: '#F1C40F',
    contrastText: '#424242',
  },
    openTitle: red['500'],
    protectedTitle: brown['300'],
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
