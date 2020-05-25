import React from "react"
import PropTypes from "prop-types"

import FomMailChimp from "../form-mailchimp/form-mailchimp"
import Section from "../section/section"

import microphone from "../../images/microphone.png"

import heroStyles from "./hero.module.scss"

const Hero = ({ lang, title, ctaTxt, placeHolderTxt }) => (
  <div className={`${heroStyles.hero} js-hero`}>
    <Section>
      <div className={heroStyles.container}>
        <h1 className={heroStyles.title}>{title}</h1>
        <FomMailChimp
          lang={lang}
          ctaTxt={ctaTxt}
          placeHolderTxt={placeHolderTxt}
        />
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
  title: PropTypes.string,
}

Hero.defaultProps = {
  title: ``,
}

export default Hero
