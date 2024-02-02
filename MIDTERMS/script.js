document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector('#play_button');
    const nextButton = document.querySelector('#next_button');
    const prevButton = document.querySelector('#prev_button');
    const title = document.querySelector('#title');
    const player = document.querySelector('.player');
    const containers = document.querySelectorAll('.container');
    const header = document.querySelector('.header'); 

    playButton.addEventListener('click', playMusic);
    nextButton.addEventListener('click', playNext);
    prevButton.addEventListener('click', playPrev);

    document.querySelectorAll('.container .box').forEach(function(box, index) {
        box.addEventListener('click', function() {
            currentSong = index;
            video.src = songs[currentSong].src;
            title.textContent = songs[currentSong].title; 
            title.classList.add('song-title'); 
            video.play();
            playButton.querySelector('i').className = "fas fa-pause";
            containers.forEach(container => container.classList.add('hidden'));
            player.classList.remove('hidden');
            header.classList.add('hidden'); 
        });
    });
});

var songs = [
    {src: "./songs/Sweet Venom.mp4", title: "Sweet Venom"},
    {src: "./songs/Bite Me.mp4", title: "Bite Me"},
    {src: "./songs/One and Only.mp4", title: "One and Only"},
    {src: "./songs/Criminal Love.mp4", title: "Criminal Love"},
    {src: "./songs/Pass the Mic.mp4", title: "Pass the Mic"},
    {src: "./songs/Polaroid Love.mp4", title: "Polaroid Love"}
];

var currentSong = 0;

var video = document.querySelector('.video');
video.controls = false;
video.src = songs[currentSong].src;

video.addEventListener('ended', function() {
    document.querySelector('#play_button i').className = "fas fa-play";
});

function playMusic() {
    var playButton = document.querySelector('#play_button i');
    if (video.paused) {
        video.play();
        playButton.className = "fas fa-pause";
        header.classList.add('hidden'); 
    } else {
        video.pause();
        playButton.className = "fas fa-play";
        header.classList.remove('hidden'); 
    }
}

function playNext() {
    currentSong++;
    if (currentSong > songs.length - 1) {
        currentSong = 0;
    }
    video.src = songs[currentSong].src;
    title.textContent = songs[currentSong].title; 
    title.classList.add('song-title'); 
    video.play();
    document.querySelector('#play_button i').className = "fas fa-pause";
    header.classList.add('hidden'); 
}

function playPrev() {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }
    video.src = songs[currentSong].src;
    title.textContent = songs[currentSong].title; 
    title.classList.add('song-title'); 
    video.play();
    document.querySelector('#play_button i').className = "fas fa-pause";
    header.classList.add('hidden'); 
}