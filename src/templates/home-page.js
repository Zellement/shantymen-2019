import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Button from '../components/Button'

import BackgroundImage from 'gatsby-background-image'

function HomePage({ data }) {
  return (
    <BackgroundImage className="home-page-image" fluid={data.allFile.edges[0].node.childImageSharp.fluid}>
      <Header />
      <div className="home-page-content">
        <h1 className="color-white">The Sheringham Shantymen</h1>
        <h2 className="color-deep-blue--l-50">Supporters of the RNLI and other charities.</h2>
        <Button to="/gigs" className="btn--orange">See our gigs</Button>
      </div>
    </BackgroundImage>
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