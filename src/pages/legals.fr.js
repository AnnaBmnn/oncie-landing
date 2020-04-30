import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Header from "../components/header/header"
import Section from "../components/section/section"
import TemplateTxt from "../components/template-txt/template-txt"
import CallToAction from "../components/cta/cta"
import Footer from "../components/footer/footer"
import CookieConsent from "react-cookie-consent"
import Button from "../components/button/button"

const LegalsFrenchPage = ({ location }) => {
  return (
    <Layout>
      <SEO />
      <Header color="color" />
      <TemplateTxt>
        <Link to={`/`}>
          <Button>Retourner à la page d'accueil</Button>
        </Link>
        <h1 className="title2 title2--margin">Mentions légales</h1>
        <h2 className="title4 title4--margin ">Éditeur du site internet</h2>
        <p>
          L’édition et la direction de la publication du site oncie.live est
          assurée par Lesouef Félix, domicilié au 223 rue de paris.<br></br>{" "}
          Numéro de téléphone : 0602289430. <br></br> Adresse e-mail
          oncie.live@gmail.com.
        </p>
        <h2 className="title4 title4--margin ">Hébergeur du site internet</h2>
        <p>
          L'hébergeur du site oncie.live est la société netlify, dont le siège
          social est situé à 610 22nd Street Suite 315 San Francisco, CA 94107
          United States, avec le numéro de téléphone : 844-899-7312.
        </p>
        <h2 className="title4 title4--margin ">
          Déclaration relative aux cookies
        </h2>
        <p>
          L'hébergeur du site oncie.live est la société netlify, dont le siège
          social est situé à 610 22nd Street Suite 315 San Francisco, CA 94107
          United States, avec le numéro de téléphone : 844-899-7312.
        </p>
        <p>
          L'utilisateur dispose d'un droit d'accès, de retrait et de
          modification des données à caractère personnel communiquées par le
          biais des cookies dans les conditions indiquées ci-dessus.
        </p>
        <h2 className="title4 title4--margin ">Propriété intellectuelle </h2>
        <p>
          Toute représentation totale ou partielle de ce site, par quelque
          personne que ce soit, sans l'autorisation expresse de l'éditeur du
          site est interdite et constituerait une contrefaçon sanctionnée par
          les articles du Code de la propriété intellectuelle.
        </p>
        <h2 className="title4 title4--margin ">Réclamation</h2>
        <p>
          Oncie a la volonté de vous apporter en permanence la meilleure qualité
          de service. Nous restons à l’écoute de toute réclamation.
        </p>
      </TemplateTxt>
      <Footer
        legalsTxt="Mentions légales"
        cookieTxt="Cookies"
        followTxt="Suivez-nous"
        urlLang={location.state ? location.state.langUrl : ""}
      />
      <CookieConsent
        enableDeclineButton
        location="bottom"
        buttonText="Accepter"
        declineButtonText="Refuser"
        cookieName="gatsby-gdpr-google-analytics"
        style={{
          background: "#f3effe",
          color: "#0a011f",
          padding: "2px 10px 2px",
        }}
        contentStyle={{ margin: "20px 15px", fontSize: "15px" }}
        buttonStyle={{
          color: "#fbfbfd",
          background: "#7038fa",
          borderRadius: "8px",
          border: "2px solid #d2c1fd",
          fontSize: "13px",
          margin: "0px 15px",
          padding: "4px 18px 7px",
        }}
        declineButtonStyle={{
          color: "#0a011f",
          background: "#e3d8fe",
          borderRadius: "8px",
          border: "2px solid #d2c1fd",
          fontSize: "13px",
          margin: "0px ",
          padding: "4px 18px 7px",
        }}
      >
        Ce siteweb utilise des cookies pour améliorer votre expérience.
      </CookieConsent>
    </Layout>
  )
}

export default LegalsFrenchPage
