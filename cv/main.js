window.onload = function() {
    var imageContainer = document.getElementById('image-container');
    var images = imageContainer.getElementsByTagName('img');
    var currentIndex = 0;

    setInterval(function() {
        var currentImage = images[currentIndex];
        var nextIndex = (currentIndex + 1) % images.length;
        var nextImage = images[nextIndex];

        currentImage.classList.remove('active');
        currentImage.classList.add('inactive');
        nextImage.classList.remove('inactive');
        nextImage.classList.add('active');

        currentIndex = nextIndex;
    }, 2000);
};
