import React from "react"
import GridRound from "../../inline/Grid_Round.inline.svg"

import featureStyles from "./feature.module.scss"

const Feature = ({ imgSrc, title, description, colorType }) => {
  let colorTypeClass
  if (colorType === "green") {
    colorTypeClass = featureStyles.green
  } else if (colorType === "orange") {
    colorTypeClass = featureStyles.orange
  } else {
    colorTypeClass = featureStyles.blue
  }
  return (
    <div className={`${featureStyles.feature} ${colorTypeClass}`}>
      <div className={featureStyles.imgContainer}>
        <img src={imgSrc} alt="features" />
        <div className={featureStyles.smallCircle}></div>
        <div className={featureStyles.bigCircle}></div>
        <GridRound />
      </div>
      <div className={featureStyles.txtContainer}>
        <h3 className={`title4 ${featureStyles.title}`}>{title}</h3>
        <div className={`description`}>{description}</div>
      </div>
    </div>
  )
}

export default Feature
