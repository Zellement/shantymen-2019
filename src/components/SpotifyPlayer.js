import React from "react"

const SpotifyPlayer = class extends React.Component {

	render() {


		// This currently replaces the content with the Spotify iframe
		function spotifyClick () {
			document.getElementById("spotifyPlaceholder").innerHTML = '<iframe title="Shantymen Spotify Player" src="https://open.spotify.com/embed/artist/06bi895n8wIOUi35sk65gJ" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
		}
	
		return(
			<div>
				<div id="spotifyPlaceholder" onClick={spotifyClick}>
					Show me Spotify player
				</div>
			</div>
		)
	}
}


export default SpotifyPlayer