import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { HTMLContent } from '../../components/Content'

const GigsAll = () => (
	<StaticQuery
	    query={graphql`
        query 
        {
          allMarkdownRemark(
          sort: {
            fields: [frontmatter___date]
            order: ASC
          }
            filter: {frontmatter: {templateKey: {eq: "gig-listing"}}}
            ) {
            edges {
              node {
                html
                frontmatter {
                  location
                  date
                  datetime
                }
              }
            }
          }
        }
	    `}
	    render={data => (
          <div>
            {data.allMarkdownRemark.edges.map(gigdata => (
              <div key={gigdata.node.frontmatter.location + gigdata.node.frontmatter.datetime}>
              <hr />
                <h3 key={gigdata.node.frontmatter.datetime}>{gigdata.node.frontmatter.datetime}</h3>
                <h4 key={gigdata.node.frontmatter.location}>{gigdata.node.frontmatter.location}</h4>
                <HTMLContent key={gigdata.node.html} content={gigdata.node.html} />
              </div>
            ))}
          </div>
	    )}
	  />
)

export default GigsAll