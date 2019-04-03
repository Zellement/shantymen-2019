import React from 'react'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const Button = ({displayText, className, to, title}) => (
	<AniLink fade className={"btn " + className} to={to} title={title}>
		{ displayText }
    </AniLink>
)

export default Button