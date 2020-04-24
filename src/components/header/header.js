import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Socials from "../socials/socials"

import Logo from "../logo/logo"
import LogoWhite from "../../images/logo.svg"

import headerStyles from "./header.module.scss"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.container}>
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      >
        <Logo colorStyle="white" />
      </Link>
      <Socials></Socials>
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
