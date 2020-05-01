import React, { Fragment } from "react"
import { Parallax } from "react-parallax"
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
        <Parallax
          bgImage={"/path/to/another/image"}
          strength={500}
          renderLayer={percentage => (
            <Fragment>
              <div
                style={{
                  transition: "transform 0.1s ease-in",
                  transform: `scale(${percentage * 1 + 1})`,
                }}
                className={featureStyles.smallCircle}
              ></div>
              <div
                style={{
                  transition: "transform 0.2s ease-out",
                  transform: `translate(${percentage * 17}%, ${percentage *
                    -20}%)`,
                }}
                className={featureStyles.bigCircle}
              ></div>
              <GridRound
                style={{
                  transition: "transform 0.2s ease-out",
                  transform: `translate(${percentage * -10}%, ${percentage *
                    10}%)`,
                }}
              />
            </Fragment>
          )}
        >
          <img src={imgSrc} alt="features" />
        </Parallax>
      </div>
      <div className={featureStyles.txtContainer}>
        <h3 className={`title4 ${featureStyles.title}`}>{title}</h3>
        <div
          data-sal="slide-down"
          className={`description ${featureStyles.description}`}
        >
          {description}
        </div>
      </div>
    </div>
  )
}

export default Feature
