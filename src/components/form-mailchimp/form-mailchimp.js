import React, { useState } from "react"

import Button from "../button/button"

import addToMailchimp from "gatsby-plugin-mailchimp"
import formMailchimpStyles from "./form-mailchimp.module.scss"

const FormMailchimp = () => {
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()

  const handleSubmit = async event => {
    event.preventDefault()
    setMessage("Sending...")
    const response = await addToMailchimp(email)
    if (response.result === "error") {
      if (response.msg.toLowerCase().includes("already subscribed")) {
        setMessage("Vous êtes déjà sur la liste, merci!")
      } else {
        setMessage(
          "Il y a eu des erreurs lors de votre inscription à la newsletter."
        )
      }
    } else {
      setMessage(
        "Merci ! Vérifiez vos emails et cliquez sur le lien de confirmation."
      )
    }
  }

  return (
    <div className={formMailchimpStyles.formMailchimp__wrapper}>
      <form
        onSubmit={handleSubmit}
        className={formMailchimpStyles.formMailchimp}
      >
        <input
          className={formMailchimpStyles.formMailchimp__input}
          aria-label="Email address"
          onChange={event => setEmail(event.target.value)}
          placeholder="Entrez votre email"
          required
          type="email"
        />
        <div>
          <Button>Accédez à la béta</Button>
        </div>
      </form>
      <div>{message}</div>
    </div>
  )
}

export default FormMailchimp
