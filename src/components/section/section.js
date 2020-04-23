import React from "react"

import PropTypes from "prop-types"

import sectionStyles from "./section.module.scss"

import "../../styles/typographie.scss"
import "../../styles/constants.scss"
import "../../styles/default.scss"

const Section = ({ children }) => (
  <section className={sectionStyles.section}>{children}</section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Section
