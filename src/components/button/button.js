import React from "react"

import buttonStyles from "./button.module.scss"

const Button = ({ children }) => (
  <button className={buttonStyles.button}>{children}</button>
)

export default Button
