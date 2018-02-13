import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, MuiThemeProvider } from 'material-ui/styles'
import deepPurple from 'material-ui/colors/deepPurple'
import teal from 'material-ui/colors/teal'
import App from './js/reactcomponents/App'
import registerServiceWorker from './js/registerServiceWorker'
import './assets/css/index.css'
import WovenPay from 'woven-pay-js'

const theme = createMuiTheme({
  palette: {
    primary: teal,
    secondary: deepPurple,
  },
  status: {
    danger: 'orange'
  }
})

let wovenPay = new WovenPay(process.env.REACT_APP_URL)

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App wovenPay={wovenPay} />
  </MuiThemeProvider>,
  document.getElementById('root'))

registerServiceWorker()
