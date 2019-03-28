import React from "react"
import { Link } from 'gatsby'
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'

const Logo = () => (
  <div className="logo">
    <StaticQuery
        query={graphql`
          {
            allFile (filter:{relativePath:{eq:"logo-badge.png"}}){
              edges {
                node {
                  childImageSharp {
                    fluid {
                      ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <Link to="/" className="logo__image" title="Logo">
              <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
          </Link>
        )}
      />
  </div>
)

export default Logo