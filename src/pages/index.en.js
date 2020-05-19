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
import ImgFullWidth from "../components/img-full-width/img-full-width"
import CallToAction from "../components/cta/cta"
import Line from "../components/line/line"
import Footer from "../components/footer/footer"
import CookieConsent from "react-cookie-consent"

import img from "../images/antenne.png"
import maquetteImg from "../images/maquette.png"
import phoneTop from "../images/phone_top.png"
import phoneBottom from "../images/phone_bottom.png"

const IndexEnglishPage = ({ location }) => (
  <Layout>
    <SEO />
    <Header color="white" />
    <Hero
      lang={location.pathname}
      placeHolderTxt="Enter your email"
      ctaTxt="Get early access"
      title="The live audio app that pushes your voice to a new dimension"
    />
    <Section>
      <SectionHeader
        width="big"
        title=" EN Oncie permet à tous les podcasteur.ices d’offrir à leur communauté une nouvelle expérience audio "
        title="Oncie enables podcasters to offer a new experience for their communities through "
        titleHighlight="live audio"
      />
      <ImgFullWidth
        imgSrc={maquetteImg}
        txt="Une interface simple et accessible, au service d’émissions interactives et exclusives."
      ></ImgFullWidth>
      <BlocImgText
        imgSrc={img}
        title="It's your turn to be on air"
        description="You, who shares your passions, tell stories, dissect the news, discuss society, comment on sports... Go on air and gift your audience with a unique and interactive show."
      />
    </Section>
    <BlocPhone
      imgSrc={phoneTop}
      title="It's time to connect with your audience"
      description="Simply start your live streaming...."
    ></BlocPhone>
    <Section>
      <Line isReverse={false} />
      <SectionHeader
        width="small"
        title="Ready, set, go! You're on air"
        description="EN Oncie vous accompagne dans la création et la gestion de vos diffusions audio en direct, pour des interventions simplifiées et de qualité."
        description="Oncie helps you create and manage your live audio streams, for simple and high-quality shows."
      />
      <Features
        title1="The best way to interact with your community in real time"
        description1="Receive the most relevant questions and comments thanks to an upvote system. Polls, reactions, emotions sharing : the live chat lets your community participate in real time. Meet your listeners and find what brings you together."
        title2="The chance to host a show together"
        description2="Did you ever want to invite someone on your show&nbsp;? Planning a remote interview or letting a listener join you on air is now possible thanks to the multi-live feature."
        title3="The freedom to make it your own"
        description3="Customize and give character to your shows by adding jingles and music.  Get access to your shows data (number of listeners, interactions) to understand your audience and optimize the impact of your interventions."
      ></Features>
      <Line isReverse={true} />
    </Section>
    <BlocPhone
      order="reverse"
      imgSrc={phoneBottom}
      title="Your work is valuable, it should be remunerated"
      description="Research, writing, interviews, animation, communication... The creation of quality audio content is a complete and demanding activity. Your contribution has a lot of value for your listeners. This is why, we would like your work to be remunerated."
    ></BlocPhone>
    <Insert title="Oncie makes your audience vibrate"></Insert>
    <Section>
      <SectionHeader
        width="big"
        title="Would you like to get exclusive early access ?"
        description="Be amongst the firsts to discover Oncie before the official release."
      />
      <CallToAction
        lang={location.pathname}
        placeHolderTxt="Enter your email"
        ctaTxt="Get early access"
      ></CallToAction>
    </Section>
    <Footer
      urlLang={location.pathname}
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

export default IndexEnglishPage
