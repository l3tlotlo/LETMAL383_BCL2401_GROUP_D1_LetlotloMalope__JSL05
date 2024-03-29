// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
  { title: "Imagine", artist: "John Lennon", genre: "Pop" },
  { title: "Respect", artist: "Aretha Franklin", genre: "R&B" },
  { title: "What's Going On", artist: "Marvin Gaye", genre: "R&B" },
  { title: "My Girl", artist: "The Temptations", genre: "R&B" },
  { title: "I Will Survive", artist: "Gloria Gaynor", genre: "Pop" }
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  "Gamora": "Pop",
  "Drax": "R&B",
  "Rocket": "Rock",
  "Groot": "Pop",
  // Add preferences for Drax, Rocket, and Groot
};

function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  const playlists = Object.entries(guardians).map(([name, genre]) => {
    // Filter the songs array based on the specified genre
    const songsOfPreferredGenre = songs.filter(song => song.genre === genre);

    // Generate a random playlist of songs
    const playlist = songsOfPreferredGenre

    // Add the guardian's name as the first element of the playlist
    playlist.unshift({ name });

    return playlist;
  });

  // Call function to display the playlists
  displayPlaylists(playlists);
}

// Helper function to display the playlists
function displayPlaylists(playlists) {
// Create a container div for playlists
const playlistsDiv = document.createElement('div');
playlistsDiv.id = 'playlists';

// Add pointer cursor style
document.documentElement.style.cursor = 'pointer';

// Loop through each playlist
playlists.forEach((playlist) => {
  // Create a playlist container div
  const playlistDiv = document.createElement('div');
  playlistDiv.classList.add('playlist');

  // Create a title h2
  const title = document.createElement('h2');
  title.textContent = playlist[0].name + "'s Playlist";
  playlistDiv.appendChild(title)

  // Create an unordered list
  const list = document.createElement('div');

  // Loop through each song in the playlist
  playlist.slice(1).forEach((song) => {
    // Create a list items
    const listItem = document.createElement('div');
    listItem.className = 'song';

    // Set the song title and artist
    const songTitle = document.createElement('span');
    songTitle.textContent = `${song.title}`;
    songTitle.className = 'song-title';
    const songArtist = document.createElement('span');
    songArtist.textContent = ` by ${song.artist}`;

    // Append the title and artist to the list item
    listItem.appendChild(songTitle);
    listItem.appendChild(songArtist);

    // Append the list item to the list
    list.appendChild(listItem);
  });

  // Append the list to the playlist container
  playlistDiv.appendChild(list);

  // Append the playlist container to the container div
  playlistsDiv.appendChild(playlistDiv);
});

// Append the container div to the document
document.body.appendChild(playlistsDiv);
}

// Call function to generate and display playlists
generatePlaylist(guardians, songs);