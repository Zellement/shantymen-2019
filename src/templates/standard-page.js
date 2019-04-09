import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import GigsUpcoming from "../components/gigs/GigsUpcoming"
import Hero from '../components/Hero'
import FullImageBg from '../components/FullImageBg'

function StandardPage({ data }) {

  const post = data.markdownRemark

  return (
    <div>
      <FullImageBg bgImage={post.frontmatter.image.childImageSharp.fluid} />
      <Header />
      <Hero h1={post.frontmatter.title} h2={post.frontmatter.subtitle} bgImage={post.frontmatter.image.childImageSharp.fluid} />
      <div className="main-content">
          <HTMLContent content={post.html} />
          <GigsUpcoming />
          <SpotifyPlayer />
      </div>
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