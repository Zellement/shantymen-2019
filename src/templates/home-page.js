import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import SocialIcons from "../components/Social"
import GigsUpcoming from "../components/gigs/GigsUpcoming"
import Hero from '../components/Hero'
import FullImageBg from '../components/FullImageBg'


function HomePage({ data }) {
  return (
    <div>
      <FullImageBg bgImage={data.allFile.edges[0].node.childImageSharp.fluid} />
      <Header />
      <Hero h1="The Sheringham Shantymen" h2="Supporters of the RNLI and other charities."/>
      <div className="main-content">
      </div>
      <Footer />
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