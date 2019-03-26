import React from "react"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"

const Header = () => (
	<header>
		<div className="container">
			<Logo />
			<Navigation />
		</div>
	</header>
)

export default Header