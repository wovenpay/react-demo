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
console.log(wovenPay)
// let woven = initWovenPay(process.env.REACT_APP_URL)

// getAuthToken(process.env.REACT_APP_SAMPLE_EMAIL, process.env.REACT_APP_SAMPLE_PASSWORD)
//   .then(() => { console.log(arguments) })


ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'))

registerServiceWorker()
