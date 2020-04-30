import React from "react"

import FomMailChimp from "../form-mailchimp/form-mailchimp"
import SectionHeader from "../section-header/section-header"

import ctaStyles from "./cta.module.scss"

const CallToAction = ({ lang, placeHolderTxt, ctaTxt }) => (
  <div className={ctaStyles.cta}>
    <FomMailChimp
      lang={lang}
      center="center"
      ctaTxt={ctaTxt}
      placeHolderTxt={placeHolderTxt}
    ></FomMailChimp>
  </div>
)

export default CallToAction
