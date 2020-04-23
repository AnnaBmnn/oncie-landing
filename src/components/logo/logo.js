import React from "react"

import logoImg from "../../images/logo.svg"
import logoStyles from "./logo.module.scss"

const logo = ({ children }) => (
  <div className={logoStyles.logo}>
    <img className={logoStyles.logo__img} src={logoImg} alt="Oncie logo" />
    <h3 className={logoStyles.logo__title}>Oncie</h3>
  </div>
)

export default logo
