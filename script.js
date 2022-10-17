console.log('Welcome to Spotify !');
// Initialize the variables
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPLay = document.getElementById('masterplay');
let myProgressBar = document.getElementById('myProgressBar')
let songs = [
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
    {songName : "Salam-e-Ishq", filePath : "songs/1.mp3", coverPath : "covers/1.jpg"}
]

//handle play and pause click
 

// Listen to events
myProgressBar.addEventListener('timeupdates', () => {
    console.log('timeupdate');
    
    //update seekbar
})