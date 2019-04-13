import React from "react"
import { GiGuitar } from 'react-icons/gi'

const SpotifyPlayer = class extends React.Component {

	render() {

		// Function called below by onClick, then replaces content with iframe
		function spotifyClick () {
			document.getElementById("spotifyPlaceholder").innerHTML = '<iframe title="Shantymen Spotify Player" src="https://open.spotify.com/embed/artist/06bi895n8wIOUi35sk65gJ" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
		}
	
		return(
			<div className="spotify-player">
				<h2><GiGuitar /> Interested in hearing some of our music?</h2>
				<p>Music player courtesy of Spotify</p>
				<div id="spotifyPlaceholder">
					<button onClick={spotifyClick} className="btn btn--orange">Show the music player</button>
				</div>
			</div>
		)
	}
}


export default SpotifyPlayer