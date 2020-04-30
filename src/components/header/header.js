import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Socials from "../socials/socials"

import Logo from "../logo/logo"
import LogoWhite from "../../images/logo.svg"

import headerStyles from "./header.module.scss"

export default class Header extends React.Component {
  state = { x: 0, y: 0, heroHeight: 0, color: this.props.color }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = ev => {
    const heroHeightDom = document.querySelector(".js-hero")
    if (heroHeightDom) {
      const heroHeight = document.querySelector(".js-hero").clientHeight

      if (heroHeight !== this.state.heroHeight) {
        this.setState({
          heroHeight,
        })
      }

      // console.log(window.innerHeight)
      // console.log(this.state.y)
      this.setState({
        x: window.scrollX,
        y: window.scrollY,
      })
      if (
        this.state.y > this.state.heroHeight - 100 &&
        this.state.color === "white"
      ) {
        this.setState({
          color: "color",
        })
      }
      if (
        this.state.y < this.state.heroHeight - 100 &&
        this.state.color === "color"
      ) {
        this.setState({
          color: "white",
        })
      }
    }
  }

  render() {
    return (
      <header className={`${headerStyles.header} js-header`}>
        <div className={headerStyles.container}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <Logo colorStyle={this.state.color} />
          </Link>
          <Socials colorType={this.state.color}></Socials>
        </div>
      </header>
    )
  }
}

// export default Header
