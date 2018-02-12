import React, { Component } from 'react'
import Dialog from 'material-ui/Dialog'
import CloseIcon from 'material-ui-icons/Close'
import Slide from 'material-ui/transitions/Slide'
import IconButton from 'material-ui/IconButton'
import Button from 'material-ui/Button'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import Add from 'material-ui-icons/Add'
import Remove from 'material-ui-icons/Remove'
import TextField from 'material-ui/TextField'


const Transition = (props) => {
  return <Slide direction="up" {...props} />
}

class ProductDialog extends Component {
  state = {
    quantity: 0,
    total: 0,
    price: 1200
  }

  addQuantity = () => {
    this.setState({ quantity: ++this.state.quantity }, this.calculateTotal)
  }

  deductQuantity = () => {
    if (this.state.quantity == 0) return
    this.setState({ quantity: --this.state.quantity }, this.calculateTotal)
  }

  calculateTotal = () => {
    this.setState({ total: this.state.quantity * this.state.price })
  }

  render() {
    const { productDialogOpen, handleClose, classes, openSnackbar, onAddCartItem } = this.props

    return (
      <Dialog
        fullScreen
        open={productDialogOpen}
        onClose={handleClose}
        transition={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Product name
              </Typography>
          </Toolbar>
        </AppBar>
        <div justify="center" className={classes.rootProd}>
          <img src={'https://source.unsplash.com/collection/920387/600x400'} className={classes.rootProdContents} />
          <div className={classes.productDescription}>
            <Typography variant="display1" color="inherit" align='center'>
              Product details
            </Typography>

            <Typography variant="body1" gutterBottom align='center'>
              Occaecat voluptate proident irure anim reprehenderit veniam adipisicing. Id in cillum aliqua pariatur enim amet enim nostrud irure nulla. Aliqua consectetur velit magna qui magna consequat dolore irure pariatur consectetur minim dolor. Occaecat ea aute sunt nostrud eiusmod consectetur. Duis et dolore laboris minim aliquip Lorem do ut proident sint voluptate dolor eu. Eiusmod nostrud in cillum proident culpa minim labore adipisicing dolore officia pariatur aliquip ad.
            </Typography>

            <Typography variant="headline" gutterBottom align='center'>
              Total Cost
            </Typography>

            <Typography variant="display1" gutterBottom align='center'>
              Ksh. {this.state.total}
            </Typography>

            <div className={classes.quantityHolder}>
              <IconButton className={classes.quantityHolderButton} onClick={this.deductQuantity}>
                <Remove />
              </IconButton>

              <TextField
                id="quantity"
                label="Quantity"
                value={this.state.quantity}
                onChange={() => console.log(arguments)}
                type="number"
                className={classes.textField}
                InputLabelProps={{
                  shrink: true,
                }}
                align='center'
                margin="normal"
              />
              <IconButton onClick={this.addQuantity} className={classes.quantityHolderButton}>
                <Add />
              </IconButton>
            </div>
            <Button variant="raised" disabled={this.state.total === 0} color="secondary" className={classes.button} onClick={() => onAddCartItem({ quantity: this.state.quantity, itemName: 'Ex excepteur eiusmod amet excepteur', unitPrice: this.state.price, total: this.state.total })}>
              Add to cart
            </Button>
          </div>
        </div>
      </Dialog>
    )
  }
}

export default ProductDialog
