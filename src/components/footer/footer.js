import React from "react"
import PropTypes from "prop-types"

import Logo from "../logo/logo"
import { Link } from "gatsby"

import Socials from "../socials/socials"
import Section from "../section/section"

import { COLORS } from "../../styles/constants"

import footerStyles from "./footer.module.scss"

const Footer = ({ siteTitle }) => (
  <footer className={footerStyles.footer}>
    <Section>
      <div className={footerStyles.wrapper}>
        <div class={footerStyles.footerLogo}>
          <Logo colorStyle="color" />
        </div>
        <div className={footerStyles.linksContainer}>
          <Link className={footerStyles.link} to="/cookies">
            Cookies
          </Link>
          <Link className={footerStyles.link} to="/mentions-legales">
            Mentions légales
          </Link>
          <Link className={footerStyles.link} to="/presse">
            Presse
          </Link>
        </div>
        <div class={footerStyles.footerSocials}>
          <span>Suivez-nous : </span>
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
