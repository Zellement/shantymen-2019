import React from "react"
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

const SocialIcons = class extends React.Component {

	render() {
	
		return(
			<div className="social-icons">
				<a aria-label="Find us on Facebook" href="https://en-gb.facebook.com/Sheringhamshantymen/"><FaFacebookSquare /></a>
				<a aria-label="Follow us on Twitter" href="https://twitter.com/s_shantymen"><FaTwitterSquare /></a>
			</div>
		)
	}
}


export default SocialIcons