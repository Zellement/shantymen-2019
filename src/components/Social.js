import React from "react"
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa'

const SocialIcons = class extends React.Component {

	render() {
	
		return(
			<div className="social-icons">
				<a href="https://en-gb.facebook.com/Sheringhamshantymen/"><FaFacebookSquare /></a>
				<a href="https://twitter.com/s_shantymen"><FaTwitterSquare /></a>
			</div>
		)
	}
}


export default SocialIcons