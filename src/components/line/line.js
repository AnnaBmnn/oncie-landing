import React from "react"
import GridRound from "../../inline/Grid_Round.inline.svg"

import lineStyles from "./line.module.scss"

const Line = ({ isReverse }) => {
  const reverseClass = isReverse ? lineStyles.reverse : lineStyles.noReverse
  return (
    <div className={`${lineStyles.container} ${reverseClass}`}>
      <div className={`${lineStyles.lineContainer}`}>
        <div className={`${lineStyles.line} ${lineStyles.lineBig}`}></div>
        <div className={`${lineStyles.line} ${lineStyles.lineMedium}`}></div>
        <div className={`${lineStyles.line} ${lineStyles.lineSmall}`}></div>
      </div>
      <div className={`${lineStyles.roundContainer}`}>
        <div className={`${lineStyles.round} ${lineStyles.roundBig}`}></div>
        <div className={`${lineStyles.round} ${lineStyles.roundSmall}`}></div>
      </div>
    </div>
  )
}

export default Line
