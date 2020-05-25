import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Header from "../components/header/header"
import TemplateTxt from "../components/template-txt/template-txt"
import Footer from "../components/footer/footer"
import CookieConsent from "react-cookie-consent"
import Button from "../components/button/button"

const LegalsEnglishPage = ({ location }) => {
  return (
    <Layout>
      <SEO />
      <Header color="color" />
      <TemplateTxt>
        <Link to={`/`}>
          <Button>Back to homepage</Button>
        </Link>
        <h1 className="title2 title2--margin">Legal Notice</h1>
        <h2 className="title4 title4--margin ">Website editor</h2>
        <p>
          Editing and publication management of the oncie.live site is provided
          by Lesouef Félix, domiciled at 223 rue de paris. <br></br>
          Phone number : 0602289430. <br></br> E-mail address
          oncie.live@gmail.com.
        </p>
        <h2 className="title4 title4--margin ">Website host</h2>
        <p>
          The host of the oncie.live site is the company netlify, whose head
          office is located at 610 22nd Street Suite 315 San Francisco, CA 94107
          United States, with the telephone number: 844-899-7312.
        </p>
        <h2 className="title4 title4--margin ">Cookie statement</h2>
        <p>
          By using the Oncie.live website, you agree to our placing cookies on
          your device, as described in our Privacy Policy and in this
          Declaration.
        </p>
        <p>
          The user has a right of access, withdrawal and modification of
          personal data communicated through cookies under the conditions
          indicated above.
        </p>
        <h2 className="title4 title4--margin ">Intellectual property </h2>
        <p>
          Any total or partial representation of this site, by any person
          whatsoever, without the express authorization of the publisher of the
          site is prohibited and would constitute an infringement punishable by
          articles of the Code of intellectual property.
        </p>
        <h2 className="title4 title4--margin ">Claim</h2>
        <p>
          Oncie is committed to constantly providing you with the best quality
          of service. We remain attentive to any complaints.
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
          buttonText="Accept"
          declineButtonText="Decline"
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
          This website uses cookies to improve your experience.
        </CookieConsent>
      </div>
    </Layout>
  )
}

export default LegalsEnglishPage
