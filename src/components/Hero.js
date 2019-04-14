import React from "react"

const Hero = ( {h1, h2} ) => (
	<div className="hero">
		<div className="container">
			<h1 className="hero__title">{h1}</h1>
			<h2 className="hero__subtitle">{h2}</h2>
		</div>
	</div>
)

export default Hero