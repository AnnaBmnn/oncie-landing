import React, { useEffect } from "react"
import { navigate } from "gatsby"

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
    <Hero />
    <Header />
    <Section>
      <SectionHeader
        width="big"
        title="Oncie permet à tous les podcasteur.ices d’offrir à leur communauté une nouvelle expérience audio "
        titleHighlight="en live"
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
      <Features></Features>
    </Section>

    <BlocPhone
      order="reverse"
      imgSrc={phoneBottom}
      titleType="title3"
      title="Votre travail est précieux, il doit être rémunéré."
      description="Recherches, rédaction, interviews, animation, communication... La création de contenu audio de qualité est une activité complète et exigente. Votre contribution a une forte valeur ajoutée pour les auditeur.ice.s. C’est pourquoi, nous souhaitons que votre travail soit rémunéré."
    ></BlocPhone>
    <Insert></Insert>
    <Section>
      <SectionHeader
        width="big"
        title="Vous souhaitez tester en exclusivité la bêta ?"
        description="Soyez le.a premier.e à utiliser Oncie avant sa sortie publique."
      />
      <CallToAction></CallToAction>
    </Section>
  </Layout>
)

export default IndexFrenchPage
