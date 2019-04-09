import React from "react"
import BackgroundImage from 'gatsby-background-image'

const Hero = ( {h1, h2, bgImage} ) => (
	<div class="hero">
		<BackgroundImage className="hero__bgimage" fluid={bgImage} />
		<div class="container">
			<h1 className="hero__title">{h1}</h1>
			<h2 className="hero__subtitle">{h2}</h2>
		</div>
	</div>
)

export default Hero