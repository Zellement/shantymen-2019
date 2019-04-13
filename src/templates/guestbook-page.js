import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { HTMLContent } from '../components/Content'
import { DiscussionEmbed } from "disqus-react"
import SpotifyPlayer from "../components/SpotifyPlayer"
import GigsUpcoming from "../components/gigs/GigsUpcoming"
import Hero from '../components/Hero'
import FullImageBg from '../components/FullImageBg'

function GuestbookPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  const disqusShortname = "shantymen";
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title
  }

  return (
    <div>
      <FullImageBg bgImage={post.frontmatter.image.childImageSharp.fluid} />
      <Header />
      <Hero h1={post.frontmatter.title} h2={post.frontmatter.subtitle} bgImage={post.frontmatter.image.childImageSharp.fluid} />
      <div className="main-content">
        <div className="main-content__copy">
          <HTMLContent content={post.html} />
        <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
        <div className="main-content__aside">
          <GigsUpcoming />
          <SpotifyPlayer />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GuestbookPage

export const GuestbookPageQuery = graphql`
  query 
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "guestbook-page"}}}) {
    edges {
      node {
        id
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