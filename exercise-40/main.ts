function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}

// Create three albums
let album1 = make_album('Artist1', 'Album1');
let album2 = make_album('Artist2', 'Album2', 12); // Example with number of tracks
let album3 = make_album('Artist3', 'Album3');

// Print each album information
console.log(album1);
console.log(album2);
console.log(album3);
