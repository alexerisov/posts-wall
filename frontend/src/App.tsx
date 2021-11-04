import React from 'react'
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { NavigationStack } from './navigation'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavigationStack />
    </ThemeProvider>
  )
}

export default App
