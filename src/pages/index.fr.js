import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Header from "../components/header/header"
import Section from "../components/section/section"
import SectionHeader from "../components/section-header/section-header"
import Hero from "../components/hero/hero"
import BlocImgText from "../components/bloc-img-txt/bloc-img-txt"
import BlocPhone from "../components/bloc-phone/bloc-phone"
import Features from "../components/features/features"
import Insert from "../components/insert/insert"
import CallToAction from "../components/cta/cta"

import img from "../images/antenne.png"
import phoneTop from "../images/phone_top.svg"
import phoneBottom from "../images/phone_bottom.svg"

const IndexFrenchPage = () => (
  <Layout>
    <SEO />
    <Header />
    <Hero
      placeHolderTxt="Entrez votre email"
      ctaTxt="Accédez à la béta"
      title="L'application de live audio qui propulse votre voix dans une nouvelle dimension"
    />

    <Section>
      <SectionHeader
        width="big"
        title="Oncie permet à tous les podcasteur.ices d’offrir à leur communauté une nouvelle expérience audio "
        titleHighlight=" en live"
      />
      <BlocImgText
        imgSrc={img}
        title="C'est à votre tour de prendre l'antenne"
        description="Vous qui partagez vos passions, racontez des histoires, critiquez l’actualité, parlez de société, commentez le sport... Prenez l’antenne et offrez à votre communauté un show unique et interactif. "
      />
    </Section>
    <BlocPhone
      imgSrc={phoneTop}
      title="L’heure est venue de vous connecter avec votre audience"
      description="Démarrez simplement votre diffusion audio...."
    ></BlocPhone>
    <Section>
      <SectionHeader
        width="small"
        title="C'est partie, vous êtes en live"
        description="Oncie vous accompagne dans la création et la gestion de vos diffusions audio en direct, pour des interventions simplifiées et de qualité."
      />
      <Features
        title1="La meilleure façon d’interagir avec votre communauté en temps réel"
        description1="Oncie vous permet de recevoir les questions et commentaires les plus pertinents via un système de vote. Sondages, réactions, partage d’émotions : le live chat laisse la place aux témoignages de votre communauté en temps réel.  Rencontrez vos auditeur.ices et de renforcez le lien qui vous rassemble."
        title2="L'opportunité d’animer des émission à plusieurs"
        description2="Avez-vous déjà pensé à inviter une personne lors d’une émission ? Planifier un interview à distance ou diffuser un témoignage spontané d’une de vos auditeur.ices est desormais possible grâce à la fonctionnalité mutli-live."
        title3="Libre à vous de cultiver un univers qui vous ressemble"
        description3="Personnalisez et caractérisez vos émissions en ajoutant jingles et bandes son. Accédez aux données relatives à votre activité (nombre d’écoutes, interactions) pour comprendre votre audimat et optimiser l’impact de vos interventions."
      ></Features>
    </Section>

    <BlocPhone
      order="reverse"
      imgSrc={phoneBottom}
      title="Votre travail est précieux, il doit être rémunéré."
      description="Recherches, rédaction, interviews, animation, communication... La création de contenu audio de qualité est une activité complète et exigente. Votre contribution a une forte valeur ajoutée pour les auditeur.ice.s. C’est pourquoi, nous souhaitons que votre travail soit rémunéré."
    ></BlocPhone>
    <Insert title="Oncie fait vibrer votre audience."></Insert>
    <Section>
      <SectionHeader
        width="big"
        title="Vous souhaitez tester en exclusivité la bêta ?"
        description="Soyez le.a premier.e à utiliser Oncie avant sa sortie publique."
      />
      <CallToAction
        placeHolderTxt="Entrez votre email"
        ctaTxt="Accédez à la béta"
      ></CallToAction>
    </Section>
  </Layout>
)

export default IndexFrenchPage