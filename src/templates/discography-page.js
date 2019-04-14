import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import SocialIcons from "../components/Social"
import AlbumListing from "../components/AlbumListing"
import GigsUpcoming from "../components/gigs/GigsUpcoming"
import Hero from '../components/Hero'
import FullImageBg from '../components/FullImageBg'


function DiscographyPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  return (
    <div>
      <FullImageBg bgImage={post.frontmatter.image.childImageSharp.fluid} />
      <Header />
      <Hero h1={post.frontmatter.title} h2={post.frontmatter.subtitle} />
      <div className="main-content">
        <div className="main-content__copy">
          <HTMLContent content={post.html} />
          <AlbumListing />
        </div>
        <div className="main-content__aside">
          <GigsUpcoming />
          <SpotifyPlayer />
          <SocialIcons />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DiscographyPage

export const DiscographyPageQuery = graphql`
  query 
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "discography-page"}}}) {
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