import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import socialStyles from "./social.module.scss"

const Social = ({ link, img, name }) => (
  <a className={socialStyles.social} traget="_blank" href={link}>
    <img className={socialStyles.img} src={img} alt="logo réseau social"></img>
    <span className={socialStyles.name}>{name}</span>
  </a>
)

export default Social
