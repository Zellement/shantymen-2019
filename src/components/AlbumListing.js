import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { HTMLContent } from '../components/Content'
import Img from 'gatsby-image'

const AlbumListing = () => (
  <StaticQuery
      query={graphql`
        query 
        {
          allMarkdownRemark(
          sort: {
            fields: [frontmatter___year],
            order: DESC
          }
            filter: {frontmatter: {templateKey: {eq: "album-listing"}}}
            ) {
            edges {
              node {
                html
                frontmatter {
                  title
                  year
                  artwork {
                    childImageSharp {
                      fixed(width: 200, height: 200) {
                        ...GatsbyImageSharpFixed_tracedSVG
                      }
                    }
                  }
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
                <Img fixed={albumdata.node.frontmatter.artwork.childImageSharp.fixed} />
                <h3 key={albumdata.node.frontmatter.year}>{albumdata.node.frontmatter.year}</h3>
                <HTMLContent content={albumdata.node.html} />
              </div>
            ))}
          </div>
      )}
    />
)

export default AlbumListing