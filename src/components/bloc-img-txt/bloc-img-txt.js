import React from "react"
import GridRoundRec from "../../inline/Grid_Round_rec.inline.svg"
import Blop from "../../images/Blop_Salmon.png"

import blocImgTxtStyles from "./bloc-img-txt.module.scss"

const BlocImgTxt = ({ imgSrc, title, description }) => (
  <div className={blocImgTxtStyles.blocImgTxt}>
    <div className={blocImgTxtStyles.imgContainer}>
      <img src={imgSrc} alt="blocImgTxts" />
      <img src={Blop} alt="blop deco" className={blocImgTxtStyles.blop} />
      <div className={blocImgTxtStyles.smallCircle}></div>
      <div className={blocImgTxtStyles.bigCircle}></div>
      <GridRoundRec />
    </div>
    <div className={blocImgTxtStyles.txtContainer}>
      <h3 className={`title4`}>{title}</h3>
      <div
        className={`description`}
        data-sal="slide-down"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        {description}
      </div>
    </div>
  </div>
)

export default BlocImgTxt
