import React from "react"
import Section from "../section/section"

import PropTypes from "prop-types"

import templateTxtStyles from "./template-txt.module.scss"

const TemplateTxt = ({ children }) => (
  <Section>
    <div className={templateTxtStyles.container}>{children}</div>
  </Section>
)

TemplateTxt.propTypes = {
  children: PropTypes.node.isRequired,
}

export default TemplateTxt
