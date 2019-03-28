import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import GigsUpcoming from "../components/GigsUpcoming"



function OddfellowsHallPage({ data }) {

  const post = data.allMarkdownRemark.edges[0].node

  return (
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