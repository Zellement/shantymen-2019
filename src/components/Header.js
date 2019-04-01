import React from "react"
import Helmet from 'react-helmet'
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import { StaticQuery, graphql } from "gatsby"
import '../scss/master.scss'

const HeaderWrapper = () => (
	<div>
	<StaticQuery
	    query={graphql`
	      query HeadingQuery {
	          site {
	            siteMetadata {
	              title,
	              description,
	            }
	          }
	        }
	    `}
	    render={data => (
	      <div>
			<Helmet>
			  <html lang="en" />
			  <title>{data.site.siteMetadata.title}</title>
			  <meta name="description" content={data.site.siteMetadata.description} />
			  <meta name="theme-color" content="#172957" />
			  <meta property="og:type" content="business.business" />
			  <meta property="og:title" content={data.site.siteMetadata.title} />
			  <meta property="og:url" content="/" />
			  <meta property="og:image" content="./src/img/logo-badge.jpg" />
			</Helmet>
			<header>
				<div className="container">
					<Logo />
					<Navigation />
				</div>
			</header>
	      </div>
	    )}
	  />
	</div>
)

export default HeaderWrapper