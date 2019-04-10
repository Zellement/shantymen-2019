import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Button from '../components/Button'
import FullImageBg from '../components/FullImageBg'

function HomePage({ data }) {
  return (
    <div className="wrapper">
      <FullImageBg bgImage={data.allFile.edges[0].node.childImageSharp.fluid} className="home-page" />
      <Header />
      <div className="hero hero--home">
        <div className="container">
          <h1 className="color-white">The Sheringham Shantymen</h1>
          <h2 className="color-deep-blue--l-50">Supporters of the RNLI and other charities.</h2>
          <Button to="/gigs" className="btn--orange" displayText="See our gigs" />
        </div>
      </div>
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