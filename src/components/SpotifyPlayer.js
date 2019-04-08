import React from "react"

const SpotifyPlayer = class extends React.Component {

	render() {

		// https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null/30063375
		// Set a variable for "el" to check event listener is not null
		var el = document.getElementById('spotifyPlaceholder');
		// If not null, do this
		if(el){
			el.addEventListener("click", spotifyClick);
		}

		// This currently replaces the content with the Spotify iframe
		function spotifyClick () {
			document.getElementById("spotifyPlaceholder").innerHTML = '<iframe title="Shantymen Spotify Player" src="https://open.spotify.com/embed/artist/06bi895n8wIOUi35sk65gJ" width="100%" height="400" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>';
		}
	
		return(
			<div>
				<div id="spotifyPlaceholder">
					Show me Spotify player
				</div>
			</div>
		)
	}
}


export default SpotifyPlayer