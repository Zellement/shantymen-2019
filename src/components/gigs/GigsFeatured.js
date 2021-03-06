import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AnimatedLink from "../AnimatedLink"
import { GiCalendar } from 'react-icons/gi'

const GigsFeatured = () => (
  <StaticQuery
      query={graphql`
        {
          allMarkdownRemark(sort: {
            fields: [frontmatter___datetime], order: ASC},
            filter: {
              frontmatter: {
                templateKey: {eq: "gig-listing"},
                featuredGig:{eq: true}
              }
            }) {
            edges {
              node {
                html
                id
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
          <div className="gigs">
            <h2>Featured Gigs</h2>
            <p>We have some great gigs lined up, see them below. Alternatively, you can <AnimatedLink className="btn btn--orange" to="/gigs">see all our gigs</AnimatedLink></p>
            {data.allMarkdownRemark.edges.map(gigdata => (
              <div className="gigs__gig" key={gigdata.node.frontmatter.location + gigdata.node.frontmatter.datetime}>
                <h3 key={gigdata.node.frontmatter.datetime}><GiCalendar /> { timeConverter(gigdata.node.frontmatter.datetime) }</h3>
                <p className="gigs__location" key={gigdata.node.frontmatter.location}>{gigdata.node.frontmatter.location}</p>
              </div>
            ))}
          </div>
      )}
    />
)

function timeConverter(unixTimestamp){
  var a = new Date(unixTimestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var min = a.getMinutes();
  if (min === 0) {
    min = '00';
  }
  var time = date + ' ' + month + ' ' + year + ' @ ' + hour + ':' + min;
  return time;
}

export default GigsFeatured