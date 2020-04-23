import React from "react"

import blocImgTxtStyles from "./bloc-img-txt.module.scss"

const BlocImgTxt = ({ imgSrc, title, description }) => (
  <div className={blocImgTxtStyles.blocImgTxt}>
    <div className={blocImgTxtStyles.imgContainer}>
      <img src={imgSrc} alt="blocImgTxts" />
    </div>
    <div className={blocImgTxtStyles.txtContainer}>
      <h3 className={`title3`}>{title}</h3>
      <div className={`description`}>{description}</div>
    </div>
  </div>
)

export default BlocImgTxt
