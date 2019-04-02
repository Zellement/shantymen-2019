import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({children, className, to, title}) => (
	<AniLink fade className={"btn " + className} to={to} title={title}>
		{ children }
    </AniLink>
)

export default Button