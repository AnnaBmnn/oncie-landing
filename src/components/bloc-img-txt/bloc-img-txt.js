import React, { Fragment } from "react"
import { Parallax } from "react-parallax"

import GridRoundRec from "../../inline/Grid_Round_rec.inline.svg"
import Blop from "../../images/Blop_Salmon.png"

import blocImgTxtStyles from "./bloc-img-txt.module.scss"

const BlocImgTxt = ({ imgSrc, title, description }) => (
  <div className={blocImgTxtStyles.blocImgTxt}>
    <div className={blocImgTxtStyles.imgContainer}>
      <Parallax
        bgImage={"/"}
        strength={500}
        renderLayer={percentage => (
          <Fragment>
            <img
              style={{
                zIndex: "3",
                transition: "transform 0.2s ease-out",
                transform: ` rotate(${percentage * 22}deg)`,
              }}
              src={Blop}
              alt="blop deco"
              className={blocImgTxtStyles.blop}
            />
            <div
              style={{
                transition: "transform 0.2s ease-out",
                transform: `translate(${percentage * 17}%, ${percentage *
                  -20}%)`,
              }}
              className={blocImgTxtStyles.bigCircle}
            ></div>
            <div
              style={{
                transition: "transform 0.1s ease-in",
                transform: `scale(${percentage * 0.4 + 1})`,
              }}
              className={blocImgTxtStyles.smallCircle}
            ></div>
            <GridRoundRec
              style={{
                transition: "transform 0.2s ease-out",
                transform: `translate(${percentage * -7}%, ${percentage *
                  7}%) scale(${percentage * 0.1 + 1})`,
              }}
            />
          </Fragment>
        )}
      >
        <img src={imgSrc} alt="blocImgTxts" />
      </Parallax>
    </div>
    <div className={blocImgTxtStyles.txtContainer}>
      <h3 className={`title4`}>{title}</h3>
      <div
        className={`description`}
        data-sal="slide-up"
        data-sal-delay="300"
        data-sal-easing="ease"
      >
        {description}
      </div>
    </div>
  </div>
)

export default BlocImgTxt
