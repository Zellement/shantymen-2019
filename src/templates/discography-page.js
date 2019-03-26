import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import AlbumListing from "../components/AlbumListing"

function DiscographyPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  return (
    <Layout>
      <section>
        <div className="flex800 main-content">
          <div className="copy">
            <h1>{post.frontmatter.title}</h1>
            <HTMLContent content={post.html} />
            <AlbumListing />
          </div>
          <aside className="aside">
            <SpotifyPlayer />
          </aside>
        </div>
      </section>
    </Layout>
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