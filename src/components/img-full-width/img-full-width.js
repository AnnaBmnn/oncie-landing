import React, { Fragment } from "react"
import { Parallax } from "react-parallax"

import Section from "../section/section"
import SectionHeader from "../section-header/section-header"

import GridRound from "../../inline/Grid_Round_rec_big.inline.svg"

import imgFullWidthStyles from "./img-full-width.module.scss"

const ImgFullWidth = ({ imgSrc, txt }) => {
  return (
    <div className={imgFullWidthStyles.imgFullWidth}>
      <Section>
        <Parallax
          bgImage={"/"}
          strength={500}
          renderLayer={percentage => (
            <Fragment>
              <div
                style={{
                  transition: "transform 0.2s ease-out",
                  transform: `scale(${percentage * 0.5 + 1})`,
                }}
                className={imgFullWidthStyles.bigCircle}
              ></div>
              <div
                style={{
                  transition: "transform 0.1s ease-in",
                  transform: `scale(${percentage * 0.4 + 1})`,
                }}
                className={imgFullWidthStyles.smallCircle}
              ></div>
              <GridRound
                style={{
                  transition: "transform 0.2s ease-out",
                  transform: `translate(${percentage * -8}%, ${percentage *
                    -2}%) scale(${percentage * 0.1 + 1})`,
                }}
              />
            </Fragment>
          )}
        >
          <img
            className={imgFullWidthStyles.img}
            src={imgSrc}
            alt="iphone en 3d et illustration"
          />
        </Parallax>
        <h3
          className={`description ${imgFullWidthStyles.title}`}
          data-sal="slide-up"
          data-sal-delay="800"
          data-sal-easing="ease"
        >
          {txt}
        </h3>
      </Section>
    </div>
  )
}

export default ImgFullWidth
