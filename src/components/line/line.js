import React from "react"
import { useInView } from "react-intersection-observer"

import lineStyles from "./line.module.scss"

const Line = ({ isReverse }) => {
  const reverseClass = isReverse ? lineStyles.reverse : lineStyles.noReverse
  const reverseOtherClass = isReverse ? "reverse" : "noReverse"
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  })
  return (
    <div
      ref={ref}
      className={`${lineStyles.container} ${
        inView ? lineStyles.animate : lineStyles.noAnimate
      } reverseOtherClass ${reverseClass}`}
    >
      <div className={`${lineStyles.lineContainer}`}>
        <div
          className={`${lineStyles.line}  lineBig ${lineStyles.lineBig}`}
        ></div>
        <div
          className={`${lineStyles.line} lineMedium ${lineStyles.lineMedium}`}
        ></div>
        <div
          className={`${lineStyles.line} lineSmall ${lineStyles.lineSmall}`}
        ></div>
      </div>
      <div className={`${lineStyles.roundContainer}`}>
        <div
          className={`${lineStyles.round} roundBig ${lineStyles.roundBig}`}
        ></div>
        <div
          className={`${lineStyles.round} roundSmall ${lineStyles.roundSmall}`}
        ></div>
      </div>
    </div>
  )
}

export default Line
