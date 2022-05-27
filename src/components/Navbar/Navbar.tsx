import React, { useState } from 'react'
import classes from './navbar.module.css'
import Logo from '../../assets/fulllogo.svg'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import {
  Button,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  SvgIcon,
} from '@mui/material'
import { useEthers } from '@usedapp/core'
import MetamaskIcon from '../../assets/metamask-fox.svg'
const WALLET_NOT_CONNECT = 'Not Connect'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { activateBrowserWallet, deactivate, account } = useEthers()

  const handleWalletDialog = () => {
    open ? setOpen(false) : setOpen(true)
  }

  return (
    <div className={classes.container}>
      <div className={classes.logoWrapper}>
        <img className={classes.logo} src={Logo} />
      </div>
      <div className={classes.navLinks}>
        <div className={`${classes.links} ${classes.active}`}>Home</div>
        <div className={classes.links}>Explore</div>
        <div className={classes.links}>Ranking</div>
        <div className={classes.links}>Resources</div>
        <div className={classes.links}>
          <AccountCircleOutlinedIcon style={{ height: '30px', width: '35px' }} />
        </div>
        <div className={classes.links}>
          <Button
            variant="text"
            startIcon={
              <AccountBalanceWalletOutlinedIcon style={{ height: '30px', width: '35px' }} />
            }
            onClick={handleWalletDialog}
          >
            {account ?? WALLET_NOT_CONNECT}
          </Button>
        </div>
      </div>
      <Dialog onClose={handleWalletDialog} open={open}>
        <DialogTitle>Wallet</DialogTitle>
        <List>
          <ListItem>
            <ListItemButton
              onClick={() => {
                activateBrowserWallet()
                account ?? setOpen(false)
              }}
            >
              <ListItemIcon>{/* <MetamaskIcon /> */}</ListItemIcon>
              Metamask
            </ListItemButton>
          </ListItem>
        </List>
      </Dialog>
    </div>
  )
}

export default Navbar
