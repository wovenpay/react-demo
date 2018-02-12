import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import deepPurple from 'material-ui/colors/deepPurple'
import teal from 'material-ui/colors/teal'
import App from './js/reactcomponents/App'
import registerServiceWorker from './js/registerServiceWorker'
import './assets/css/index.css'

const theme = createMuiTheme({
    palette: {
      primary: teal,
      secondary: deepPurple,
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
