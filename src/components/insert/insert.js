import React from "react"

import Section from "../section/section"
// import MockupContent from "../image/image"

import microphone from "../../images/microphone.png"

import insertStyles from "./insert.module.scss"

const Insert = ({ title }) => (
  <Section>
    <div className={insertStyles.container}>
      <div className={insertStyles.insert}>
        <h2 className={insertStyles.title}>{title}</h2>
        <img
          className={insertStyles.img}
          src={microphone}
          alt="microphone en 3d et illustration"
        />
      </div>
    </div>
  </Section>
)

export default Insert
