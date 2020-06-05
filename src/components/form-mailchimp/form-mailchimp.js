import React, { useState } from "react"

import Button from "../button/button"

import addToMailchimp from "gatsby-plugin-mailchimp"
import formMailchimpStyles from "./form-mailchimp.module.scss"

const FormMailchimp = ({ lang, center, ctaTxt, placeHolderTxt }) => {
  const centerClass =
    center == "center"
      ? formMailchimpStyles.center
      : formMailchimpStyles.noCenter
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [messageClass, setMessageClass] = useState()

  const sendingMessage = lang === "/en" ? "Sending..." : "Envoi en cours..."
  const successMessage =
    lang === "/en"
      ? "Let's go ! You are on the list"
      : "C’est parti ! Vous êtes sur la liste"

  const errorMessage =
    lang === "/en"
      ? "It looks like there is a problem with your email"
      : "Il semblerait qu’il y ait un problème avec votre mail..."

  const alreadySubscribeMessage =
    lang === "/en"
      ? "You are already on the list"
      : "Vous êtes déjà sur la liste"

  const handleSubmit = async event => {
    event.preventDefault()
    setMessage(sendingMessage)
    const response = await addToMailchimp(email)
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        setMessage(alreadySubscribeMessage)
        setMessageClass(formMailchimpStyles.alreadySubscribe)
      } else {
        setMessage(errorMessage)
        setMessageClass(formMailchimpStyles.error)
      }
    } else {
      setMessageClass(formMailchimpStyles.success)
      setMessage(successMessage)
    }
  }

  return (
    <div className={`${formMailchimpStyles.wrapper} `}>
      <form
        onSubmit={handleSubmit}
        className={`${formMailchimpStyles.formMailchimp} ${centerClass}`}
      >
        <input
          className={`${formMailchimpStyles.formMailchimp__input} `}
          aria-label="Email address"
          onChange={event => setEmail(event.target.value)}
          placeholder={placeHolderTxt}
          required
          type="email"
        />
        <div>
          <Button>{ctaTxt}</Button>
        </div>
      </form>
      <div className={`${formMailchimpStyles.message} ${messageClass} `}>
        {message}
      </div>
    </div>
  )
}

export default FormMailchimp
