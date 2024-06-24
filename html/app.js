// script.js

const audio = document.getElementById('audio');
const playPauseButton = document.getElementById('play-pause');
const volumeDownButton = document.getElementById('volume-down');
const volumeUpButton = document.getElementById('volume-up');
const playIcon = '<i class="fas fa-play"></i>';
const pauseIcon = '<i class="fas fa-pause"></i>';

// Initialize play/pause button based on autoplay
window.onload = () => {
    if (!audio.paused) {
        playPauseButton.innerHTML = pauseIcon;
    }
};

// Play/Pause functionality
playPauseButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = pauseIcon;
    } else {
        audio.pause();
        playPauseButton.innerHTML = playIcon;
    }
});

// Volume down functionality
volumeDownButton.addEventListener('click', () => {
    audio.volume = Math.max(audio.volume - 0.1, 0);
});

// Volume up functionality
volumeUpButton.addEventListener('click', () => {
    audio.volume = Math.min(audio.volume + 0.1, 1);
});

// Update play/pause button icon on audio end
audio.addEventListener('ended', () => {
    playPauseButton.innerHTML = playIcon;
});

// play song automatically when page loads


// audio list play song randomly
const audioList = [
    'https://cdn.pixabay.com/audio/2024/06/14/audio_0e2636099d.mp3',
    "https://cdn.pixabay.com/audio/2024/06/13/audio_8822cea290.mp3",
    "https://cdn.pixabay.com/audio/2024/03/22/audio_1ef53377ba.mp3"
];

const randomAudio = audioList[Math.floor(Math.random() * audioList.length)];
audio.src = randomAudio;

// show song name
const songName = document.getElementById('song-name');
songName.innerHTML = randomAudio;

