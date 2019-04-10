import React from 'react'

var today = new Date();
var yyyy = today.getFullYear();

const Footer = ({displayText, className, to, title}) => (
	<div className="footer">
		<p>The Sheringham Shantymen &copy; {yyyy}</p>
		<p>Website by <a href="http://www.zellement.com">Zellement</a></p>
	</div>
)

export default Footer