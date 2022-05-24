import React from 'react'
import classes from './home.module.css'
import globe from '../../assets/globe.png'
import toy1 from '../../assets/006.png'
import toy2 from '../../assets/005.png'

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div>
          <p className={classes.heading}>Dynamic NFT Climate</p>
          <p className={classes.heading}>
            Club <span className={classes.span}>Metaverse</span>
          </p>
        </div>
        <div className={classes.subHeading}>
          <p>
            Dynamic NFT Climate Club Metaverse (DCCM) aims to connect NFT and voluntarily carbon
            market to encourage carbon emissions offsetting and become carbon neutral.
          </p>
        </div>

        <div className={classes.firstCard}>
          <div className={classes.name}>Greentech Emissions</div>
          <div className={classes.reductions}>Reductions</div>
          <div className={classes.amount}>USD $45.00 / ETH </div>
          <div className={classes.quantity}>0.01500 per tonne</div>
          <div className={classes.owner}>Owned by 4tbtsY</div>
          <div className={classes.carbonToy}>
            <img src={toy1} className={classes.toy11} />
          </div>
        </div>
        <div className={classes.secondCard}>
          <div className={classes.name2}>Greentech Emissions</div>
          <div className={classes.reductions2}>Reductions</div>
          <div className={classes.amount2}>USD $45.00 / ETH </div>
          <div className={classes.quantity2}>0.01500 per tonne</div>
          <div className={classes.owner2}>Owned by 4tbtsY</div>
          <div className={classes.carbonToy2}>
            <img src={toy2} className={classes.toy22} />
          </div>
        </div>
      </div>
      <div className={classes.right}>
        <img src={globe} className={classes.globe} />
      </div>
    </div>
  )
}

export default Home
