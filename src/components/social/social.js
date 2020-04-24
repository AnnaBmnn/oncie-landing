import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import socialStyles from "./social.module.scss"

const Social = ({ link, img, name }) => (
  <Link className={socialStyles.social} to={link}>
    <img className={socialStyles.img} src={img} alt="logo réseau social"></img>
    <span className={socialStyles.name}>{name}</span>
  </Link>
)

export default Social
