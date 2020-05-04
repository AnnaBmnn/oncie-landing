import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Header from "../components/header/header"
import TemplateTxt from "../components/template-txt/template-txt"
import Footer from "../components/footer/footer"
import CookieConsent from "react-cookie-consent"
import Button from "../components/button/button"

const CookiesEnglishPage = ({ location }) => {
  return (
    <Layout>
      <SEO />
      <Header color="color" />
      <TemplateTxt>
        <Link to={`/`}>
          <Button>Back to Home Page</Button>
        </Link>
        <h1 className="title2 title2--margin">Cookies</h1>
        <h2 className="title4 title4--margin ">What is a cookie ?</h2>
        <p>
          A cookie is a text file that is placed on the hard drive of your
          Terminal when you visit our site and if you do not object. It is filed
          either by Oncie or by a third party (advertising partners).
        </p>
        <h2 className="title4 title4--margin ">What are they for ?</h2>
        <p>
          When you browse our site, we collect data that is intended for us.
          This allows us in particular to measure the audience of our site. The
          goal is to ensure the best possible use.<br></br> It should be noted
          that the deletion of these Cookies can have consequences on your user
          experience.
        </p>
        <h2 className="title4 title4--margin ">
          What cookies are used by Oncie?
        </h2>
        <p>There are 2 different categories of Cookies used:</p>
        <p>
          Audience measurement<br></br>Audience measurement cookies make it
          possible to establish statistics, anonymously, on visits but also on
          the use of our site.
        </p>
        <p>
          Advertisment display <br></br>Cookies allowing the display of
          advertising are deposited by third parties (advertising management for
          example). They are used so that they can measure the online
          advertising campaign.
        </p>
        <h2 className="title4 title4--margin ">
          How to refuse and / or delete cookies?
        </h2>
        <p>
          It is possible to refuse the use of cookies by clicking on the "I
          refuse" button located in the cookies banner at the bottom of the
          screen. You can also block or delete cookies by changing your browser
          settings. To deactivate cookies:
        </p>
        <p>
          (https://support.microsoft.com/en-us/help/4468242/microsoft-edge-browsing-data-and-privacy-microsoft-privacy)
          <br></br>Internet Explorer
          (https://support.microsoft.com/fr-fr/help/17442/windows-internet-explorer-delete-manage-cookies)
          <br></br>Firefox
          (https://support.mozilla.org/fr/kb/effacer-les-cookies-pour-supprimer-les-information)
          <br></br>Safari (https://www.apple.com/legal/privacy/fr-ww/cookies/)
          <br></br>Chrome (https://support.google.com/chrome/answer/95647?hl=fr)
          <br></br>Opera
          (https://help.opera.com/en/latest/security-and-privacy/)
          <br></br>For more information, we invite you to visit the CNIL
          website: http://www.cnil.fr/vos-droits/vos-traces/les-cookies/
        </p>
      </TemplateTxt>
      <Footer
        urlLang={location.state ? location.state.langUrl : ""}
        legalsTxt="Legal notices"
        cookieTxt="Cookies"
        followTxt="Follow us"
      />
      <div className="sectionCookie">
        <CookieConsent
          enableDeclineButton
          location="bottom"
          buttonText="Accepter"
          declineButtonText="Refuser"
          cookieName="gatsby-gdpr-google-tagmanager"
          style={{
            borderRadius: "16px",
            background: "#FBFBFD",
            color: "#2A2537",
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
            color: "#2A2537",
            background: "#FBFBFD",
            borderRadius: "8px",
            border: "2px solid #FBFBFD",
            fontSize: "13px",
            margin: "0px ",
            padding: "4px 18px 7px",
          }}
        >
          This website uses cookies to improve your experience.
        </CookieConsent>
      </div>
    </Layout>
  )
}

export default CookiesEnglishPage
