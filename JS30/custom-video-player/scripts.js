// guides
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement

// HTMLMediaElement
const video = document.querySelector('video');
let playing = false;

// DOM listeners
document.querySelector('.player__button').addEventListener('click', e => {
    if (!playing) {
        video.play().then(() => {
            e.target.innerText = '\u275A' + '\u275A'; // pause symbol
            playing = true;
        });
    } else {
        video.pause();
        e.target.innerText = '\u25BA'; // play symbol
        playing = false;
    }
});

document.querySelector('input[name=volume]').addEventListener('input', e => {
    const newVol = e.target.value;
    console.log('Volume: ', newVol);
    video.volume = newVol;
});

document.querySelector('input[name=playbackRate]').addEventListener('input', e => {
    const newRate = e.target.value;
    console.log('playbackRate: ', newRate);
    video.playbackRate = newRate;
});

document.querySelector('button[data-skip="-10"]').addEventListener('click', e => {
    console.log('Go backward 10 seconds');
    const back10 = video.currentTime - 10;
    video.currentTime = back10 < 0 ? 0 : back10;
});

document.querySelector('button[data-skip="25"]').addEventListener('click', e => {
    console.log('Go forward 25 seconds');
    const forward25 = video.currentTime + 25;
    video.currentTime = forward25 > video.duration ? video.duration : forward25;
});

// progress bar
const progressBar = document.querySelector('.progress__filled');
video.addEventListener('timeupdate', e => {
    const prog = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${prog}%`;
});

// click and go
const fullProgressBar = document.querySelector('.progress');
fullProgressBar.addEventListener('click', e => {
    moveProgress(e);
});

// click and drag
fullProgressBar.addEventListener('mousemove', e => {
    if (e.buttons === 1) { // left button depressed
        moveProgress(e);
    }
});

function moveProgress(e) {
    // get full width of progress bar
    // get distance from edge
    // calculate ratio
    const ratio = e.offsetX / fullProgressBar.offsetWidth;
    console.log(`Progress: ${ratio * 100}%`);
    // move playback to new time
    video.currentTime = ratio * video.duration;
}

