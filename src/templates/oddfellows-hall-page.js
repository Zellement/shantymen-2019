import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import GigsUpcoming from "../components/gigs/GigsUpcoming"

function OddfellowsHallPage({ data }) {

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

export default OddfellowsHallPage

export const OddfellowsHallPageQuery = graphql`
  query 
{
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "oddfellows-hall-page"}}}) {
    edges {
      node {
        frontmatter {
          title
        }
        html
      }
    }
  }
}
`