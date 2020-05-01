import React from "react"
import PropTypes from "prop-types"

import Social from "../social/social"

import TwitterImgWhite from "../../images/socials/twitter.svg"
import LinkedinImgWhite from "../../images/socials/linkedin.svg"
import ProductHuntImgWhite from "../../images/socials/product_hunt.svg"

import TwitterImgColor from "../../images/socials/twitter_color.svg"
import LinkedinImgColor from "../../images/socials/linkedin_color.svg"
import ProductHuntImgColor from "../../images/socials/product_hunt_color.svg"

import socialsStyles from "./socials.module.scss"

const Socials = ({ colorType }) => {
  const TwitterImg = colorType === "color" ? TwitterImgColor : TwitterImgWhite
  const LinkedinImg =
    colorType === "color" ? LinkedinImgColor : LinkedinImgWhite
  const ProductHuntImg =
    colorType === "color" ? ProductHuntImgColor : ProductHuntImgWhite
  return (
    <div className={socialsStyles.socials}>
      <Social
        link="https://twitter.com/OncieLive"
        name="twitter"
        img={TwitterImg}
      ></Social>
      <Social
        link="https://www.linkedin.com/company/oncie"
        name="linkedin"
        img={LinkedinImg}
      ></Social>
      <Social
        link="https://www.producthunt.com/upcoming/oncie"
        name="Product Hunt"
        img={ProductHuntImg}
      ></Social>
    </div>
  )
}

export default Socials
