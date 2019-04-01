import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import { DiscussionEmbed } from "disqus-react"
import SpotifyPlayer from "../components/SpotifyPlayer"
import GigsUpcoming from "../components/GigsUpcoming"

function GuestbookPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  const disqusShortname = "shantymen";
  const disqusConfig = {
    identifier: post.id,
    title: post.frontmatter.title
  }

  return (
    <div>
      <Header />
      <Layout>
        <section>
          <div className="flex800 main-content">
            <div className="copy">
              <h1>{post.frontmatter.title}</h1>
              <HTMLContent content={post.html} />
              <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
            </div>
            <aside className="aside">
              <GigsUpcoming />
              <SpotifyPlayer />
            </aside>
          </div>
        </section>
      </Layout>
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
        }
        html
      }
    }
  }
}`