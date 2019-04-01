import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image'
import AnimatedLink from "../components/AnimatedLink"

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
          <AnimatedLink to="/" className="logo__image" title="Go home">
              <Img fluid={data.allFile.edges[0].node.childImageSharp.fluid} />
          </AnimatedLink>
        )}
      />
  </div>
)

export default Logo