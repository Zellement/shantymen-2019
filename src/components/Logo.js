import React from "react"
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Logo = () => (
  <StaticQuery
      query={graphql`
        {
          allFile (filter:{relativePath:{eq:"logo-badge.png"}}){
            edges {
              node {
                childImageSharp {
                  fixed(width: 150, height: 150) {
                    ...GatsbyImageSharpFixed_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Link to="/" className="logo" title="Logo">
            <Img fixed={data.allFile.edges[0].node.childImageSharp.fixed} />
        </Link>
      )}
    />
)

export default Logo