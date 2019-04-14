import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Button from '../components/Button'
import FullImageBg from '../components/FullImageBg'
import Hero from '../components/Hero'

function HomePage({ data }) {
  return (
    <div className="wrapper">
      <FullImageBg bgImage={data.allFile.edges[0].node.childImageSharp.fluid} className="home-page" />
      <Header />
      <Hero h1="The Sheringham Shantymen" h2="Supporters of the RNLI and other charities." className="hero--home" />
    </div>
  )
}

export default HomePage

export const HomePageQuery = graphql`
{
  allFile (filter:{relativePath:{eq:"home-page.jpg"}}){
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