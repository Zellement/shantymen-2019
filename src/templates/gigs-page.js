import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import GigsAll from "../components/gigs/GigsAll"
import Hero from '../components/Hero'
import FullImageBg from '../components/FullImageBg'

function GigsPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  return (
    <div>
      <FullImageBg bgImage={post.frontmatter.image.childImageSharp.fluid} />
      <Header />
      <Hero h1={post.frontmatter.title} h2={post.frontmatter.subtitle} bgImage={post.frontmatter.image.childImageSharp.fluid} />
      <div className="main-content">
        <div className="main-content__copy">
          <HTMLContent content={post.html} />
          <GigsAll />
        </div>
        <div className="main-content__aside">
          <SpotifyPlayer />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GigsPage

export const GigsPageQuery = graphql`
  query 
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "gigs-page"}}}) {
    edges {
      node {
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
        html
      }
    }
  }
}`