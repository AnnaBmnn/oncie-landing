import React from "react"
import PropTypes from "prop-types"

import Logo from "../logo/logo"
import { Link } from "gatsby"

import Socials from "../socials/socials"
import Section from "../section/section"

import footerStyles from "./footer.module.scss"

const Footer = ({ cookieTxt, legalsTxt, presseTxt, followTxt }) => (
  <footer className={footerStyles.footer}>
    <Section>
      <div className={footerStyles.wrapper}>
        <div className={footerStyles.footerLogo}>
          <Logo colorStyle="color" />
        </div>
        <div className={footerStyles.linksContainer}>
          <Link className={footerStyles.link} to="/cookies">
            {cookieTxt}
          </Link>
          <Link className={footerStyles.link} to="/mentions-legales">
            {legalsTxt}
          </Link>
          <Link className={footerStyles.link} to="/presse">
            {presseTxt}
          </Link>
        </div>
        <div className={footerStyles.footerSocials}>
          <span>{followTxt}</span>
          <Socials colorType="color"></Socials>
        </div>
      </div>
    </Section>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
