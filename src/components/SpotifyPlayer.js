import React from "react"

const SpotifyPlayer = class extends React.Component {

	render() {

		// Function called below by onClick, then replaces content with iframe
		function spotifyClick () {
			document.getElementById("spotifyPlaceholder").innerHTML = '<iframe title="Shantymen Spotify Player" src="https://open.spotify.com/embed/artist/06bi895n8wIOUi35sk65gJ" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
		}
	
		return(
			<div>
				<div id="spotifyPlaceholder" className="spotifyPlaceholder" onClick={spotifyClick}>
					Show me Spotify player
				</div>
			</div>
		)
	}
}


export default SpotifyPlayer