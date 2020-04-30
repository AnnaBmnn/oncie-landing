import React from "react"
import PropTypes from "prop-types"

import Logo from "../logo/logo"
import { Link } from "gatsby"

import Socials from "../socials/socials"
import Section from "../section/section"

import footerStyles from "./footer.module.scss"

const Footer = ({ urlLang, cookieTxt, legalsTxt, followTxt }) => {
  return (
    <footer className={footerStyles.footer}>
      <Section>
        <div className={footerStyles.wrapper}>
          <div className={footerStyles.footerLogo}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              <Logo colorStyle="color" />
            </Link>
          </div>
          <div className={footerStyles.linksContainer}>
            <Link
              className={footerStyles.link}
              state={{ langUrl: urlLang }}
              to={`${urlLang}/cookies`}
            >
              {cookieTxt}
            </Link>

            <Link
              className={footerStyles.link}
              state={{ langUrl: urlLang }}
              to={`${urlLang}/legals`}
            >
              {legalsTxt}
            </Link>
            <a
              className={footerStyles.link}
              target="_blank"
              href="mailto:oncie.live@gmail.com"
            >
              Contact
            </a>
          </div>
          <div className={footerStyles.footerSocials}>
            <span>{followTxt}</span>
            <Socials colorType="color"></Socials>
          </div>
        </div>
      </Section>
    </footer>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
