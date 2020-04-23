import React from "react"

import FomMailChimp from "../form-mailchimp/form-mailchimp"
import SectionHeader from "../section-header/section-header"

import ctaStyles from "./cta.module.scss"

const CallToAction = () => (
  <div className={ctaStyles.cta}>
    <FomMailChimp center="center"></FomMailChimp>
  </div>
)

export default CallToAction
