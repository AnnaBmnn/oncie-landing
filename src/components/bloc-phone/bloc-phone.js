import React from "react"

import Section from "../section/section"
import SectionHeader from "../section-header/section-header"

import blocPhoneStyles from "./bloc-phone.module.scss"

const BlocPhone = ({ title, description, imgSrc, order, titleType }) => {
  const orderClass = order === "reverse" ? blocPhoneStyles.reverse : ""
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

          <img
            className={blocPhoneStyles.img}
            src={imgSrc}
            alt="iphone en 3d et illustration"
          />
        </div>
      </Section>
    </div>
  )
}

export default BlocPhone
