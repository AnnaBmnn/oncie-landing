import React from "react"
import PropTypes from "prop-types"

import { COLORS } from "../../styles/constants"
import footerStyles from "./footer.module.scss"

const Footer = ({ siteTitle }) => (
  <footer className={footerStyles.footer}>
    <div className={footerStyles.footer__wrapper}>
      <div>
        <a
          style={{ textDecoration: "none" }}
          href="https://github.com/gillkyle/gatsby-starter-landing-page"
        >
          Contact Us
        </a>
      </div>
      <div style={{ color: COLORS.gray }}>
        © {new Date().getFullYear()}
        {` `}
        {siteTitle}
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
