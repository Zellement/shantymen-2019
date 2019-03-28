import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'

const GigsUpcoming = () => (
	<StaticQuery
	    query={graphql`
        query 
        {
          allMarkdownRemark(
          sort: {
            fields: [frontmatter___date]
            order: ASC
          }
            limit: 3
            filter: {frontmatter: {templateKey: {eq: "gig-listing"}}}
            ) {
            edges {
              node {
                html
                id
                frontmatter {
                  date
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
            <h2>Upcoming Gigs</h2>
            <p>Fancy coming out to sing some shanties and have a merry laugh? Our next 3 gigs are listed below, or <Link to="/gigs">see all our gigs</Link></p>
            {data.allMarkdownRemark.edges.map(gigdata => (
              <div key={gigdata.node.frontmatter.location + gigdata.node.frontmatter.datetime}>
                <h3 key={gigdata.node.frontmatter.datetime}>{gigdata.node.frontmatter.datetime}</h3>
                <p key={gigdata.node.frontmatter.location}>{gigdata.node.frontmatter.location}</p>
              </div>
            ))}
          </div>
	    )}
	  />
)

export default GigsUpcoming