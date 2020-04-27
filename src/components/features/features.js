import React from "react"

import featuresStyles from "./features.module.scss"
import Feature from "../feature/feature"

import img1 from "../../images/feature_1.png"
import img2 from "../../images/feature_2.png"
import img3 from "../../images/feature_3.png"

const Features = ({
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
}) => {
  return (
    <div className={featuresStyles.features}>
      <Feature
        imgSrc={img1}
        title={title1}
        description={description1}
        colorType="orange"
      />
      <Feature
        imgSrc={img2}
        title={title2}
        description={description2}
        colorType="blue"
      />
      <Feature
        imgSrc={img3}
        title={title3}
        description={description3}
        colorType="green"
      />
    </div>
  )
}

export default Features
