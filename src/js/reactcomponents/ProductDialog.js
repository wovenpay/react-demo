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

const Transition = (props) => {
  return <Slide direction="up" {...props} />
}

const ProductDialog = ({ productDialogOpen, handleClose, classes, openSnackbar }) => {
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
          <Button color="inherit" onClick={openSnackbar}>
            Add to cart
                    </Button>
        </Toolbar>
      </AppBar>
      <div justify="center" className={classes.rootProd}>
        <img src={'https://source.unsplash.com/collection/920387/600x400'} className={classes.rootProdContents} />
        <div className={classes.productDescription}>
          <Typography variant="display1" color="inherit" className={classes.flex}>
            Product details
          </Typography>

          <Typography variant="body1" gutterBottom>
            Occaecat voluptate proident irure anim reprehenderit veniam adipisicing. Id in cillum aliqua pariatur enim amet enim nostrud irure nulla. Aliqua consectetur velit magna qui magna consequat dolore irure pariatur consectetur minim dolor. Occaecat ea aute sunt nostrud eiusmod consectetur. Duis et dolore laboris minim aliquip Lorem do ut proident sint voluptate dolor eu. Eiusmod nostrud in cillum proident culpa minim labore adipisicing dolore officia pariatur aliquip ad.
          </Typography>
        </div>
      </div>
    </Dialog>
  )
}

export default ProductDialog
