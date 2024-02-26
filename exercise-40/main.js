function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Create three albums
var album1 = make_album('Artist1', 'Album1');
var album2 = make_album('Artist2', 'Album2', 12); // Example with number of tracks
var album3 = make_album('Artist3', 'Album3');
// Print each album information
console.log(album1);
console.log(album2);
console.log(album3);
