import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import { HTMLContent } from '../components/Content'
import SpotifyPlayer from "../components/SpotifyPlayer"
import Img from 'gatsby-image'


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
            <SpotifyPlayer />
          </aside>
        </div>
            <div>
              {post.frontmatter.oddfellowsGallery.map(oddfellowsGalleryData => (
                  <div>
                    <Img fluid={oddfellowsGalleryData.image} />
                    <h2>{oddfellowsGalleryData.title}</h2>
                  </div>
              ))}
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
          oddfellowsGallery {
            title
            image
          }
        }
        html
      }
    }
  }
}
`