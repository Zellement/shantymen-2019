import React from "react"
import BackgroundImage from 'gatsby-background-image'

const FullImageBg = ( {bgImage} ) => (

	<div className="full-background-image-wrapper">
		<BackgroundImage className="full-background-image" fluid={bgImage} />
	</div>
)

export default FullImageBg