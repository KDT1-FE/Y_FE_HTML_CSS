const videoElement = document.getElementById('scrollVideo');
const videoContainer = document.getElementById('videoContainer');

function handleIntersect(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            videoElement.play();
        } else {
            videoElement.pause();
        }
    });
}

const observer = new IntersectionObserver(handleIntersect, {
    threshold: 0.5,
});
observer.observe(videoContainer);

videoElement.addEventListener('ended', function () {
    this.currentTime = 0;
    this.play();
});
