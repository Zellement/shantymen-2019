import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import Hero from '../components/Hero'
import FullImageBg from '../components/FullImageBg'

function ThanksPage({ data }) {
  return (
    <div className="wrapper">
      <FullImageBg bgImage={data.allFile.edges[0].node.childImageSharp.fluid} className="home-page" />
      <Header />
      <Hero h1="Thanks" h2="Thanks for requesting a booking." />
      <div className="main-content">
        <div className="main-content__copy">
          <h2>Thank you.</h2>
          <p>We'll get right back to you.</p>
          <Button to="/" className="btn--deep-blue" displayText="Go to the home page" />
        </div>
        <div className="main-content__aside">
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ThanksPage

export const ThanksPageQuery = graphql`
{
  allFile (filter:{relativePath:{eq:"thanks-page.jpg"}}){
    edges {
      node {
        childImageSharp {
          fluid(quality: 100, maxWidth:2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`