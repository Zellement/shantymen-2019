import React from "react"
import { StaticQuery, graphql } from "gatsby"
import GigsUpcoming from "../../components/gigs/GigsUpcoming"
import GigsPast from "../../components/gigs/GigsPast"

const GigsAll = () => (

	<StaticQuery
	    query={graphql`
        query 
        {
          allMarkdownRemark(
          sort: {
            fields: [frontmatter___datetime]
            order: ASC
          }
            filter: {frontmatter: {templateKey: {eq: "gig-listing"}}}
            ) {
            edges {
              node {
                html
                frontmatter {
                  location
                  datetime
                }
              }
            }
          }
        }
	    `}

	    render={data => (
        <div>
          <div className="gigs-all">
            <h2>Upcoming Gigs</h2>
            {data.allMarkdownRemark.edges.map(gigdata => (

              <GigsUpcoming
                key={gigdata.node.frontmatter.datetime}
                gigDate={gigdata.node.frontmatter.datetime}
                gigLocation={gigdata.node.frontmatter.location}
                gigDetails={gigdata.node.html}
              />
              
            ))}
          </div>
          <div className="gigs-all">
            <h2>Past Gigs</h2>
            {data.allMarkdownRemark.edges.map(gigdata => (

              <GigsPast
                key={gigdata.node.frontmatter.datetime}
                gigDate={gigdata.node.frontmatter.datetime}
                gigLocation={gigdata.node.frontmatter.location}
              />
              
            ))}
          </div>
        </div>
	    )}
	  />
)

export default GigsAll