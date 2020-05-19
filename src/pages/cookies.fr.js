import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Header from "../components/header/header"
import TemplateTxt from "../components/template-txt/template-txt"
import Footer from "../components/footer/footer"
import CookieConsent from "react-cookie-consent"
import Button from "../components/button/button"

const CookiesFrenchPage = ({ location }) => {
  return (
    <Layout>
      <SEO />
      <Header color="color" />
      <TemplateTxt>
        <Link to={`/`}>
          <Button>Retourner à la page d'accueil</Button>
        </Link>
        <h1 className="title2 title2--margin">Cookies</h1>
        <h2 className="title4 title4--margin ">Qu’est ce qu’un Cookie ?</h2>
        <p>
          Un cookie est un fichier texte qui est déposé sur le disque dur de
          votre Terminal lorsque vous visitez notre site et si vous ne vous y
          opposez pas. Il est déposé soit par Oncie, soit par un tiers
          (partenaires publicitaires).
        </p>
        <h2 className="title4 title4--margin ">A quoi servent-ils ?</h2>
        <p>
          Lors de votre navigation sur notre site, nous relevons des données qui
          nous sont destinées. Cela nous permet notamment de mesurer l'audience
          de notre site. Le but étant de vous assurer la meilleure utilisation
          possible. Il est à noter que la suppression de ces Cookies peut avoir
          des conséquences sur votre expérience utilisateur.
        </p>
        <h2 className="title4 title4--margin ">
          Quels sont les Cookies utilisés par Oncie ?
        </h2>
        <p>Il y a 2 différentes catégories de Cookies sont utilisées:</p>
        <p>
          Mesure d'audience <br></br>Les Cookies de mesure d'audience permettent
          d'établir des statistiques, de manière anonyme, sur les visites mais
          également sur l'utilisation de notre site.
        </p>
        <p>
          Affichage publicitaire <br></br>Les Cookies permettant l'affichage de
          publicité sont déposés par des tiers (régie publicitaire par exemple).
          Ils sont utilisés afin que ces derniers puissent mesurer la campagne
          publicitaire mise en ligne.
        </p>
        <h2 className="title4 title4--margin ">
          Comment refuser et / ou supprimer les cookies?
        </h2>
        <p>
          Il est possible de refuser l'utilisation des cookies en cliquant sur
          le bouton "Je refuse" situé dans le bandeau des cookies en bas de
          l'écran. Il vous est également possible de bloquer ou supprimer les
          cookies en modifiant les paramètres de votre navigateur. Pour
          désactiver les cookies :
        </p>
        <p>
          Microsoft Edge
          (https://support.microsoft.com/fr-fr/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy)
          <br></br>Internet Explorer
          (https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies)
          <br></br>Firefox
          (https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information)
          <br></br>Safari (https://www.apple.com/legal/privacy/fr-ww/cookies/)
          <br></br>Chrome (https://support.google.com/chrome/answer/95647?hl=fr)
          <br></br>Opera
          (https://help.opera.com/en/latest/security-and-privacy/)
          <br></br>Pour en savoir plus nous vous invitons à vous rendre sur le
          site de la CNIL :
          http://www.cnil.fr/vos-droits/vos-traces/les-cookies/
        </p>
      </TemplateTxt>
      <Footer
        urlLang={location.state ? location.state.langUrl : ""}
        legalsTxt="Mentions légales"
        cookieTxt="Cookies"
        followTxt="Suivez-nous"
      />
      <div className="sectionCookie">
        <CookieConsent
          enableDeclineButton
          location="bottom"
          buttonText="Accepter"
          declineButtonText="Refuser"
          cookieName="gatsby-gdpr-google-analytics"
          style={{
            borderRadius: "16px",
            background: "#FBFBFD",
            color: "#2A2537",
            padding: "2px 10px 2px",
            border: "2px solid #A17DFB",
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
            color: "#2A2537",
            background: "#FBFBFD",
            borderRadius: "8px",
            border: "2px solid #FBFBFD",
            fontSize: "13px",
            margin: "0px ",
            padding: "4px 18px 7px",
          }}
        >
          Ce site web utilise des cookies pour améliorer votre expérience.
        </CookieConsent>
      </div>
    </Layout>
  )
}

export default CookiesFrenchPage
