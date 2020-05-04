import React, { Fragment } from "react"
import { Parallax } from "react-parallax"

import Section from "../section/section"
import SectionHeader from "../section-header/section-header"

import GridRound from "../../inline/Grid_Round.inline.svg"
import Blop01 from "../../images/blop_01_Purple.png"
import Blop02 from "../../images/blop_02_Purple.png"

import blocPhoneStyles from "./bloc-phone.module.scss"

const BlocPhone = ({ title, description, imgSrc, order }) => {
  const orderClass =
    order === "reverse" ? blocPhoneStyles.reverse : blocPhoneStyles.noReverse
  const padding = order === "reverse" ? "noPadding" : "padding"
  const titleType = order === "reverse" ? "title3" : "title2"
  return (
    <div className={blocPhoneStyles.blocPhone}>
      <Section>
        <div className={`${orderClass} ${blocPhoneStyles.container}`}>
          <div className={blocPhoneStyles.containerHeader}>
            <SectionHeader
              width="big"
              padding={padding}
              title={title}
              description={description}
              titleType={titleType}
            />
          </div>
          <div className={blocPhoneStyles.imgContainer}>
            <Parallax
              bgImage={"/"}
              strength={500}
              renderLayer={percentage => (
                <Fragment>
                  <img
                    src={Blop01}
                    alt="blop deco"
                    className={blocPhoneStyles.blop01}
                    style={{
                      zIndex: "3",
                      transition: "transform 0.2s ease-out",
                      transform: ` rotate(${percentage * 35}deg)`,
                    }}
                  />
                  <img
                    src={Blop02}
                    alt="blop deco"
                    className={blocPhoneStyles.blop02}
                    style={{
                      zIndex: "3",
                      transition: "transform 0.2s ease-out",
                      transform: ` rotate(${percentage * -31}deg)`,
                    }}
                  />
                  <div
                    style={{
                      transition: "transform 0.2s ease-out",
                      transform: `scale(${percentage * 0.9 + 1})`,
                    }}
                    className={blocPhoneStyles.bigCircle}
                  ></div>
                  <GridRound
                    style={{
                      transition: "transform 0.2s ease-out",
                      transform: `translate(${percentage * -10}%, ${percentage *
                        -13}%) scale(${percentage * 0.1 + 1})`,
                    }}
                  />
                </Fragment>
              )}
            >
              <img
                className={blocPhoneStyles.img}
                src={imgSrc}
                alt="iphone en 3d et illustration"
              />
            </Parallax>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default BlocPhone
