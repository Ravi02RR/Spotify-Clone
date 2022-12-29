// adding song in arrey and initailizing element
var songNumber = 0;
var audioElement = new Audio("songs/1.mp3");
var Play = document.getElementById("play");
var progressBar = document.getElementById("time");
var gif = document.getElementById("gif");
var gaana = document.getElementsByClassName("Gaana");
let songItems = Array.from(document.getElementsByClassName('songItem'));

var song = [
    { songName: "NCs 1st song", songPath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "NCs 2ndsong", songPath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "NCs 3rd song", songPath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "NCs 4thsong", songPath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "NCs 5thsong", songPath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "NCs 6th song", songPath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "NCs 7th song", songPath: "songs/7.mp3", coverPath: "covers/7.jpg" },
    { songName: "NCs 8th song", songPath: "songs/8.mp3", coverPath: "covers/8.jpg" },
    { songName: "NCs 9th song", songPath: "songs/9.mp3", coverPath: "covers/9.jpg" },
    { songName: "NCs 10th song", songPath: "songs/10.mp3", coverPath: "covers/10.jpg" },

]




Play.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        Play.classList.remove("fa-circle-play");
        Play.classList.add("fa-circle-pause");
        gif.style.opacity = "1";
    }
    else {
        audioElement.pause();
        Play.classList.remove("fa-circle-pause");
        Play.classList.add("fa-circle-play");
        gif.style.opacity = "0";


    }
});


audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;
});
progressBar.addEventListener('change', () => {
    audioElement.currentTime = progressBar.value * audioElement.duration / 100;
});

const makeAllPalys = () => {

    Array.from(document.getElementsByClassName('songitemPLay')).forEach((element) => {
        e.target.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    });
}


Array.from(document.getElementsByClassName('songitemPLay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPalys();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
    });

})
