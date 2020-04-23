import React from "react"
import PropTypes from "prop-types"

import Cta from "../cta/cta"
import MockupContent from "../image/image"
import mockupFrame from "../../images/mockup-frame.png"

import heroStyles from "./hero.module.scss"

const Header = ({ siteTitle }) => (
  <header className={heroStyles.hero}>
    <h1 style={{ textAlign: "center" }}>Oncie is live</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Oncie Landing page very soon
    </p>
    <Cta />
    <div style={{ margin: 60, width: `250px`, position: "relative" }}>
      <div style={{ clipPath: "inset(2% 5% round 2% 5%)" }}>
        <MockupContent />
      </div>
      <div
        style={{
          position: "absolute",
          width: "250px",
          top: 0,
        }}
      >
        <img
          src={mockupFrame}
          alt="outlines of shapes and confetti in the background "
        />
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
