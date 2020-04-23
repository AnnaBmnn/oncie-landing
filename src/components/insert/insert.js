import React from "react"

import Section from "../section/section"
// import MockupContent from "../image/image"

import microphone from "../../images/microphone.svg"

import insertStyles from "./insert.module.scss"

const Insert = () => (
  <Section>
    <div className={insertStyles.container}>
      <div className={insertStyles.insert}>
        <h1 className={insertStyles.title}>
          Oncie fait vibrer votre audience.
        </h1>
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
