$(document).ready( function() {

	//our loaded audio variables. Each one is assigned a file and also a title
	var audio1 = document.createElement("audio");
	audio1.setAttribute("src", "res/audio/audio1.mp3");
	audio1.title = "Big Sean Instrumental";
	var audio2 = document.createElement("audio");
	audio2.setAttribute("src", "res/audio/audio2.mp3");
	audio2.title="Kanye West - Wouldn't Leave"
	var audio3 = document.createElement("audio");
	audio3.setAttribute("src", "res/audio/audio3.mp3"); 
	audio3.title= "Donald Glover - This Is America";

	//current track from the playlist
	var currentTrack = audio1;
	//variable used to keep track of where we are in the array
	var trackIndex = 0;

	var playlist = [audio1, audio2, audio3];

	for(var i = 0; i < playlist.length; i++) {
		$("#menu").append("<a>" + playlist[i].title + "</a>");
	}

	$("#play").click( function() {
		currentTrack.play();
		$("#currentPlay").html("Playing: " + currentTrack.title);
	});

	$("#pause").click( function() {
		currentTrack.pause();
		$("#currentPlay").html("Paused: " + currentTrack.title);
	});

	//restarts current song and increments the trackIndex
	$("#next").click( function() {
		currentTrack.currentTime = 0;
		currentTrack.pause();
		trackIndex++;
		if(trackIndex == playlist.length) {
			trackIndex = 0;
		}
		currentTrack = playlist[trackIndex];
		currentTrack.play();
		$("#currentPlay").html("Playing: " + currentTrack.title);

	});

	//restarts the current song then pauses it, and decriments the trackIndex. Checks if trackIndex falls out of index and then resets it
	$("#previous").click( function() {
		currentTrack.currentTime = 0;
		currentTrack.pause();
		trackIndex--;
		if(trackIndex < 0) {
			trackIndex = playlist.length - 1;
		}
		currentTrack = playlist[trackIndex];
		currentTrack.play();
		$("#currentPlay").html("Playing: " + currentTrack.title);
	})

	//This method is for the Playlist. Takes the title from the clicked event and checks the array of songs of the playlist to find a match
	$("a").click( function(e) {
		currentTrack.currentTime = 0;
		currentTrack.pause();
		 var title = $(e.target).text();
		for(var i = 0; i < playlist.length; i++) {
			if(title === playlist[i].title) {
				currentTrack = playlist[i];
				trackIndex = i;
				currentTrack.play();
				$("#currentPlay").html("Playing: " + currentTrack.title);

			}
		}
	})

});