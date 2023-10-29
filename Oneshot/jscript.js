var videoElement = document.getElementById('local-video');

videoElement.addEventListener('loadedmetadata', function() {
    videoElement.removeAttribute('controls');

    videoElement.addEventListener('ended', function() {
        window.close();
    });
});

setTimeout(function() {
    window.close();
}, 17000);