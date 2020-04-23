import React from "react"

import feature from "../../images/feature.png"
import SectionHeader from "../section-header/section-header"

import { COLORS } from "../../styles/constants"
import contentStyles from "./content.module.scss"

const Content = () => (
  <div className={contentStyles.content}>
    <SectionHeader
      title="Minimal Features"
      description="Don't spend time ripping out unneeded plugins and bloat."
    />
    <content className={contentStyles.content__container}>
      <div>
        <h3>What you need to Start</h3>
        <p style={{ color: COLORS.gray }}>
          Includes plugins for analytics, building sitemaps, and optimizing
          images
        </p>
      </div>
      <div>
        <img src={feature} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
  </div>
)

export default Content
