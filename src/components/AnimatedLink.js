import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const AnimatedLink = ({children, className, activeClassName, to, title}) => (
	<AniLink fade className={className} activeClassName={activeClassName} to={to} title={title}>
		{ children }
    </AniLink>
)

export default AnimatedLink