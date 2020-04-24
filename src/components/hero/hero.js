import React from "react"
import PropTypes from "prop-types"

import FomMailChimp from "../form-mailchimp/form-mailchimp"
import Section from "../section/section"
// import MockupContent from "../image/image"

import microphone from "../../images/microphone.svg"

import heroStyles from "./hero.module.scss"

const Hero = ({ siteTitle }) => (
  <div className={heroStyles.hero}>
    <Section>
      <div className={heroStyles.container}>
        <h1 className={heroStyles.title}>
          L'application de live audio qui propulse votre voix dans une nouvelle
          dimension
        </h1>
        <FomMailChimp />
        <img
          className={heroStyles.img}
          src={microphone}
          alt="microphone en 3d et illustration"
        />
      </div>
    </Section>
  </div>
)

Hero.propTypes = {
  siteTitle: PropTypes.string,
}

Hero.defaultProps = {
  siteTitle: ``,
}

export default Hero
