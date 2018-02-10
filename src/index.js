import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/index.css'
import App from './js/reactcomponents/App'
import registerServiceWorker from './js/registerServiceWorker'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import indigo from 'material-ui/colors/indigo'
import pink from 'material-ui/colors/pink'
import red from 'material-ui/colors/red'

const theme = createMuiTheme({
    palette: {
      primary: pink,
      secondary: indigo,
    },
    status: {
      danger: 'orange',
    },
  }
)

ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
document.getElementById('root'))

registerServiceWorker()
