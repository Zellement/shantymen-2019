import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { HTMLContent } from '../../components/Content'
import { GiPositionMarker, GiCalendar } from 'react-icons/gi'

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
            <h2>Gig Listings</h2>
            {data.allMarkdownRemark.edges.map(gigdata => (

              <div key={gigdata.node.frontmatter.location + gigdata.node.frontmatter.datetime + gigdata.node.frontmatter.location + gigdata.node.frontmatter.datetime}>

              {
                checkPassedGig(gigdata.node.frontmatter.datetime)
              }

              <div className="gigs-all__gig">
                <div className="gigs-all__card">
                  <div className="gigs-all__card-content">
                    <GiCalendar className="gigs-all__icon" />
                    <h3
                      className="gigs-all__datetime">
                      { timeConverter(gigdata.node.frontmatter.datetime) }
                    </h3>
                  </div>
                </div>
                <div className="gigs-all__card gigs-all__card-orange">
                  <div className="gigs-all__card-content">
                    <GiPositionMarker className="gigs-all__icon" />
                    <h3
                      className="gigs-all__location"> {gigdata.node.frontmatter.location}</h3>
                  </div>
                </div>
                <HTMLContent className="gigs-all__content" content={gigdata.node.html} />
              </div>
              </div>
            ))}
          </div>
        </div>
	    )}
	  />
)

function timeConverter(unixTimestamp){
  var a = new Date(unixTimestamp * 1000);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var day = days[a.getDay()];
  var hour = a.getHours();
  var min = a.getMinutes();
  if (min === 0) {
    min = '00';
  }
  var time = day + ", " + date + ' ' + month + ' ' + year + ' @ ' + hour + ':' + min;
  return time;
}

function checkPassedGig(dateGig){
  const dateNow = (Date.now()/1000);
  //console.log("The date now is " + dateNow + ". The date of this gig is " + dateGig)
  if (dateNow < dateGig) {
    //console.log("Hello")
    const gigHasPassed = true;
  }
}

export default GigsAll