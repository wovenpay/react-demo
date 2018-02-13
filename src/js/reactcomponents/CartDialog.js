import React from 'react'
import Dialog from 'material-ui/Dialog'
import CloseIcon from 'material-ui-icons/Close'
import Slide from 'material-ui/transitions/Slide'
import IconButton from 'material-ui/IconButton'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemText } from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Button from 'material-ui/Button'

const Transition = (props) => {
  return <Slide direction="up" {...props} />
}

const mapListItems = (cartItems, classes) => {
  let items = []
  cartItems.forEach(element => {
    items.push(
      <ListItem>
        <Avatar>
          <img src={'https://source.unsplash.com/collection/920387/600x400'} className={classes.rootProdContents} alt='Avatar' />
        </Avatar>
        <ListItemText primary={`(${element.quantity} X) ${element.itemName}`} secondary={`Total: Ksh.${element.total}`} />
      </ListItem>
    )
  })
  return items
}

const CartDialog = ({ cartOpen, onHandleCartClose, classes, cartItems }) => {
  return (
    <Dialog
      fullScreen
      open={cartOpen}
      onClose={onHandleCartClose}
      transition={Transition}>
      <AppBar className={classes.appBar} position='static'>
        <Toolbar>
          <IconButton color="inherit" onClick={onHandleCartClose} aria-label="Close">
            <CloseIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Cart
          </Typography>
          <Button color="inherit">
            Checkout
          </Button>
        </Toolbar>
      </AppBar>
      <div justify="center" className={classes.rootProd}>
        <List>
          {mapListItems(cartItems, classes)}
        </List>
      </div>
    </Dialog>
  )
}

export default CartDialog
