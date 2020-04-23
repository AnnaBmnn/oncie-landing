import React from "react"

import featuresStyles from "./features.module.scss"
import Feature from "../feature/feature"

import img1 from "../../images/feature_1.png"
import img2 from "../../images/feature_2.png"
import img3 from "../../images/feature_3.png"

const Features = () => {
  return (
    <div className={featuresStyles.features}>
      <Feature
        imgSrc={img1}
        title="La meilleure façon d’interagir avec votre communauté en temps réel"
        description="Oncie vous permet de recevoir les questions et commentaires les plus pertinents via un système de vote. Sondages, réactions, partage d’émotions : le live chat laisse la place aux témoignages de votre communauté en temps réel.  Rencontrez vos auditeur.ices et de renforcez le lien qui vous rassemble."
      />

      <Feature
        imgSrc={img2}
        title="L’opportunité d’animer des émission à plusieurs"
        description="Avez-vous déjà pensé à inviter une personne lors d’une émission ? Planifier un interview à distance ou diffuser un témoignage spontané d’une
  de vos auditeur.ices est desormais possible grâce à la fonctionnalité mutli-live."
      />
      <Feature
        imgSrc={img3}
        title="Libre à vous de cultiver un univers qui vous ressemble"
        description="Personnalisez et caractérisez vos émissions en ajoutant jingles et bandes son. Accédez aux données relatives à votre activité (nombre d’écoutes, interactions) pour comprendre votre audimat et optimiser l’impact de vos interventions."
      />
    </div>
  )
}

export default Features
