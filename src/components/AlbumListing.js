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
          <div className="discography">
            {data.allMarkdownRemark.edges.map(albumdata => (
              <div className="discography__album" key={albumdata.node.frontmatter.title}>
                <div className="discography__overview">
                  <h3 className="discography__title" key={albumdata.node.frontmatter.title}>{albumdata.node.frontmatter.title}</h3>
                  <h4 className="discography__year" key={albumdata.node.frontmatter.year}>({albumdata.node.frontmatter.year})</h4>
                  <Img className="discography__image" fixed={albumdata.node.frontmatter.artwork.childImageSharp.fixed} />
                </div>
                <div className="discography__listing">
                  <HTMLContent content={albumdata.node.html} />
                </div>
              </div>
            ))}
          </div>
      )}
    />
)

export default AlbumListing