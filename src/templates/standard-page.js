import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import SocialIcons from "../components/Social"
import GigsFeatured from "../components/gigs/GigsFeatured"
import Hero from '../components/Hero'
import FullImageBg from '../components/FullImageBg'

function StandardPage({ data }) {

  const post = data.markdownRemark

  const pageName = post.frontmatter.title

  console.log(pageName)

  return (
    <div>
      <FullImageBg bgImage={post.frontmatter.image.childImageSharp.fluid} />
      <Header />
      <Hero h1={post.frontmatter.title} h2={post.frontmatter.subtitle} />
      <div className="main-content">
        <div className="main-content__copy">
          {
            ((pageName === 'Gallery') ? 
            <><div class='embed-container'><iframe src='https://www.youtube.com/embed/2ZCUn2-KLBA' frameBorder='0' allowFullScreen></iframe></div></> : null)
          }
          <HTMLContent content={post.html} />
        </div>
        <div className="main-content__aside">
          <GigsFeatured />
          <SpotifyPlayer />
          <SocialIcons />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default StandardPage

export const StandardPageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subtitle
        image {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`