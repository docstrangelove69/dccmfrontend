import React from 'react'
import classes from './navbar.module.css'
import Logo from '../../assets/fulllogo.svg'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'

const Navbar = () => {
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
          <AccountBalanceWalletOutlinedIcon style={{ height: '30px', width: '35px' }} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
