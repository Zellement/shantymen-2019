import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import AlbumListing from "../components/AlbumListing"
import GigsUpcoming from "../components/gigs/GigsUpcoming"


function DiscographyPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  return (
    <div>
      <Header />
      <div className="container container--before">
      <Layout>
        <section>
          <div className="flex800 main-content">
            <div className="copy">
              <h1>{post.frontmatter.title}</h1>
              <HTMLContent content={post.html} />
              <AlbumListing />
            </div>
            <aside className="aside">
              <GigsUpcoming />
              <SpotifyPlayer />
            </aside>
          </div>
        </section>
      </Layout>
      </div>
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
        }
        html
      }
    }
  }
}`