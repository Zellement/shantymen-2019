import React from 'react'
import { graphql } from 'gatsby'
import Header from '../components/Header'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import GigsUpcoming from "../components/GigsUpcoming"

function StandardPage({ data }) {

  const post = data.markdownRemark

  return (
    <div>
      <Header />
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
  )
}

export default StandardPage

export const StandardPageQuery = graphql`
  query StandardPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`