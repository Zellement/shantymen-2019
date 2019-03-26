import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { HTMLContent } from '../components/Content'

const AlbumListing = () => (
  <StaticQuery
      query={graphql`
        query 
        {
          allMarkdownRemark(
          sort: {
            fields: [frontmatter___templateKey]
            order: DESC
          }
            filter: {frontmatter: {templateKey: {eq: "album-listing"}}}
            ) {
            edges {
              node {
                html
                frontmatter {
                  title
                  release_year
                }
              }
            }
          }
        }
      `}
      render={data => (
          <div>
            {data.allMarkdownRemark.edges.map(albumdata => (
              <div key={albumdata.node.frontmatter.title}>
                <h3 key={albumdata.node.frontmatter.title}>{albumdata.node.frontmatter.title}</h3>
                <h3 key={albumdata.node.frontmatter.release_year}>{albumdata.node.frontmatter.release_year}</h3>
                <HTMLContent content={albumdata.node.html} />
              </div>
            ))}
          </div>
      )}
    />
)

export default AlbumListing