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
import ShoppingCart from 'material-ui-icons/ShoppingCart'
import Badge from 'material-ui/Badge'
import CartDialog from './CartDialog';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
  button: {
    margin: theme.spacing.unit,
    width: '100%'
  },
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
  textField: {
    textAlign: 'center'
  },
  quantityHolder: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
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
    marginTop: '80px'
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
    open: false,
    cart: [],
    cartOpen: false
  }

  addCartItem = (item) => {
    this.setState({ cart: [...this.state.cart, item] }, this.handleClose)
  }

  handleClickOpen = () => {
    this.setState({ productDialogOpen: true })
  }

  handleClose = () => {
    this.setState({ productDialogOpen: false })
  }

  handleCartOpen = () => {
    if (this.state.cart.length === 0) {
      this.handleClickOpenSnackbar()
      return
    }
    this.setState({ cartOpen: true })
  }

  handleCartClose = () => {
    this.setState({ cartOpen: false })
  }

  handleClickOpenSnackbar = () => {
    this.setState({ open: true })
  }

  handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    this.setState({ open: false })
  };

  render() {
    const { classes } = this.props
    const { productDialogOpen } = this.state

    return (
      <div className={classes.root}>
        <AppBar>
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Crocheteers
            </Typography>
            <IconButton onClick={this.handleCartOpen}>
              <Badge badgeContent={this.state.cart.length} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
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
        <ProductDialog {...this.props} productDialogOpen={productDialogOpen} handleClose={this.handleClose} openSnackbar={this.handleClickOpenSnackbar} onAddCartItem={this.addCartItem} />
        <CartDialog cartItems={this.state.cart} cartOpen={this.state.cartOpen} onHandleCartClose={this.handleCartClose} {...this.props} />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleCloseSnackbar}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">Empty cart, please add items to cart 🛒 to check out</span>} />
      </div>
    )
  }
}

export default withStyles(styles)(App)
