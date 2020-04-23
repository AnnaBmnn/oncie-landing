import React from "react"

import featureStyles from "./feature.module.scss"

const Feature = ({ imgSrc, title, description }) => (
  <div className={featureStyles.feature}>
    <div className={featureStyles.imgContainer}>
      <img src={imgSrc} alt="features" />
    </div>
    <div className={featureStyles.txtContainer}>
      <h3 className={`title3`}>{title}</h3>
      <div className={`description`}>{description}</div>
    </div>
  </div>
)

export default Feature
