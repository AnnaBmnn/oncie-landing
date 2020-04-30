import React, { useEffect } from "react"
import { navigate } from "gatsby"

const getRedirectLanguage = () => {
  if (typeof navigator === `undefined`) {
    return "en"
  }

  const lang =
    navigator && navigator.language && navigator.language.split("-")[0]
  if (!lang) return "en"

  switch (lang) {
    case "fr":
      return "fr"
    default:
      return "en"
  }
}

const LegalsPage = () => {
  useEffect(() => {
    const urlLang = getRedirectLanguage()

    navigate(`/${urlLang}/legals`)
  }, [])

  return null
}

export default LegalsPage
