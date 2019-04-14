import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import FullImageBg from '../components/FullImageBg'

function ThanksPage({ data }) {
  return (
    <div className="wrapper">
      <FullImageBg bgImage={data.allFile.edges[0].node.childImageSharp.fluid} className="home-page" />
      <Header />
      <Hero h1="Thanks" h2="Cheers" />
      <div className="main-content">
        <div className="main-content__copy">
          Thanks.
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ThanksPage

export const ThanksPageQuery = graphql`
{
  allFile (filter:{relativePath:{eq:"book-us-page.jpg"}}){
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