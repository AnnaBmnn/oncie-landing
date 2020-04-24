import React from "react"

import { COLORS } from "../../styles/constants"

import sectionHeaderStyles from "./section-header.module.scss"

const SectionHeader = ({
  title,
  titleHighlight,
  description,
  width,
  padding,
  titleType,
}) => {
  const widthClass =
    width === "big" ? sectionHeaderStyles.big : sectionHeaderStyles.small
  const titleClass = titleType === "title3" ? "title3" : "title2"
  const paddingClass =
    padding === "noPadding"
      ? sectionHeaderStyles.noPadding
      : sectionHeaderStyles.padding

  return (
    <header
      className={`${sectionHeaderStyles.sectionHeader} ${widthClass} ${paddingClass}`}
    >
      <h2 className={`${sectionHeaderStyles.title} ${titleClass}`}>
        {title}
        <span className={sectionHeaderStyles.titleHighlight}>
          {titleHighlight}
        </span>
      </h2>

      <p className={`${sectionHeaderStyles.description} text`}>{description}</p>
    </header>
  )
}

export default SectionHeader
