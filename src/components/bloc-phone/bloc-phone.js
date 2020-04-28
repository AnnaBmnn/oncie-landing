import React from "react"

import Section from "../section/section"
import SectionHeader from "../section-header/section-header"

import GridRound from "../../inline/Grid_Round.inline.svg"
import Blop01 from "../../images/blop_01_Purple.png"
import Blop02 from "../../images/blop_02_Purple.png"

import blocPhoneStyles from "./bloc-phone.module.scss"

const BlocPhone = ({ title, description, imgSrc, order, titleType }) => {
  const orderClass =
    order === "reverse" ? blocPhoneStyles.reverse : blocPhoneStyles.noReverse
  const padding = order === "reverse" ? "noPadding" : "padding"
  return (
    <div className={blocPhoneStyles.blocPhone}>
      <Section>
        <div className={`${orderClass} ${blocPhoneStyles.container}`}>
          <div className={blocPhoneStyles.containerHeader}>
            <SectionHeader
              width="big"
              padding={padding}
              title={title}
              description={description}
              titleType={titleType}
            />
          </div>
          <div className={blocPhoneStyles.imgContainer}>
            <img
              src={Blop01}
              alt="blop deco"
              className={blocPhoneStyles.blop01}
            />
            <img
              src={Blop02}
              alt="blop deco"
              className={blocPhoneStyles.blop02}
            />
            <div className={blocPhoneStyles.bigCircle}></div>
            <GridRound />
            <img
              className={blocPhoneStyles.img}
              src={imgSrc}
              alt="iphone en 3d et illustration"
            />
          </div>
        </div>
      </Section>
    </div>
  )
}

export default BlocPhone
