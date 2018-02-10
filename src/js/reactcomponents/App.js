import React, { Component } from 'react'
import './../../assets/css/App.css'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile } from 'material-ui/GridList'
import tileData from './tileData'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import ProductDialog from './ProductDialog'
import Snackbar from 'material-ui/Snackbar'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'

const styles = theme => ({
  rootProd: {
    flexGrow: 1,
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  rootProdContents: {
    flex: 1
  },
  productDescription: {
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '12px',
    paddingBottom: '12px',
    flex: 1,
    alignContent: 'center'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  subheader: {
    width: '100%',
  },
  main: {
    padding: '14px',
    marginTop: '60px'
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  }
})

class App extends Component {
  state = {
    productDialogOpen: false,
    open: false
  }

  handleClickOpen = () => {
    this.setState({ productDialogOpen: true })
  }

  handleClose = () => {
    this.setState({ productDialogOpen: false })
  }

  handleClickOpenSnackbar = () => {
    this.setState({ open: true });
  };

  handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props
    const { productDialogOpen } = this.state

    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <Typography variant='title' color='inherit'>
              Crocheteers
          </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.main}>
          <GridList cellHeight={200} className={classes.gridList} cols={3}>
            {tileData.map(tile => (
              <GridListTile key={tile.img} cols={tile.cols || 1} onClick={this.handleClickOpen}>
                <img src={tile.img} alt={tile.title} />
              </GridListTile>
            ))}
          </GridList>
        </div>
        <ProductDialog {...this.props} productDialogOpen={productDialogOpen} handleClose={this.handleClose} openSnackbar={this.handleClickOpenSnackbar} />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">🎊 Woo hoo 🎊 ! Another potential buyer, we are working hard to allow making orders via this website. In the mean time please send your order enquiry to 0727383066 and please tell your friends about us. ❤️</span>} />
      </div>
    )
  }
}

export default withStyles(styles)(App)
