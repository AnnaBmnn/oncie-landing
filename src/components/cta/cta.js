import React from "react"

import FomMailChimp from "../form-mailchimp/form-mailchimp"
import SectionHeader from "../section-header/section-header"

import ctaStyles from "./cta.module.scss"

const CallToAction = () => (
  <div className={ctaStyles.cta}>
    <SectionHeader
      title="Stay Updated"
      description="Give a final call to action because that's what the cool kids are doing."
    />
    <FomMailChimp>Get Early Access</FomMailChimp>
  </div>
)

export default CallToAction
