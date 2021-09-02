const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const previousBtn = document.querySelector('#previous');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#title');
const cover = document.querySelector('#cover');


// Song titles
const songs = ['Bloodstream', 'Jewel', 'just say yeah', 'So Much Better', 'Something Just Like This', 'Stressed Out', 'Summer', 'Virtual Friends', 'Young']

// Keep track of the songs
let songIndex = 7

// Initially load song into the DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpg`
};

function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fa').classList.remove('fa-play');
    playBtn.querySelector('i.fa').classList.add('fa-pause');

    audio.play()
};

function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fa').classList.add('fa-play');
    playBtn.querySelector('i.fa').classList.remove('fa-pause');

    audio.pause()
};

function previousSong(){
    songIndex--

    if(songIndex < 0){
        songIndex = songs.length -1
    }

    loadSong(songs[songIndex])

    playSong()
};

function nextSong(){
    songIndex++

    if(songIndex > songs.length -1){
        songIndex = 0
    }
    loadSong(songs[songIndex])

    playSong()
};

function updateProgress(e){
    const {duration, currentTime} = e.srcElement
    const progressPecent = (currentTime / duration)*100
    progress.style.width = `${progressPecent}%`
};

function setProgress(e){
    const width = this.clientWidth
    const clickX = e.offsetX
    const duration = audio.duration

    audio.currentTime = (clickX / width)*duration
};

// Event listeners
playBtn.addEventListener('click', function(){
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
});


// Change song events
previousBtn.addEventListener('click', previousSong);

nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);
