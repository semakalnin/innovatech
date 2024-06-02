document.addEventListener('DOMContentLoaded', function() {
    const clip = document.querySelectorAll(".hover-to-play");
    clip.forEach(video => {
        video.addEventListener("mouseenter", function() {
            video.play();
        });
        video.addEventListener("mouseout", function() {
            video.pause();
        });
    });
});