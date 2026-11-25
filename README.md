# VELORA — Your music, your sky

A responsive, animated sky-blue and white music-player website with a personal audio-upload feature.

## Features
- Responsive design for mobile and desktop
- Animated sky-blue/white interface
- Search songs, artists and genres
- Genre filters and playlist cards
- Sample streaming tracks
- Upload multiple audio files from your device (audio files are played locally in the browser; they are not uploaded to a server)
- Play, pause, next, previous, seek and liked-track buttons

## Run it

### Option 1: Open directly
Open `index.html` in your browser. The upload and player interface works without a server for local files. Sample streaming tracks require an internet connection.

### Option 2: Run the Node server
1. Install Node.js if it is not already installed.
2. Open a terminal in this folder.
3. Run `node server.js`.
4. Open `http://localhost:3000` in your browser.

No npm packages are required.

## Audio upload privacy
The audio file picker uses browser-local object URLs. Your selected audio is not sent to this Node server. Uploaded audio stays available for the current page session and is not permanently stored by the website.
