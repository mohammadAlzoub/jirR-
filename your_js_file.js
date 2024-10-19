// Preload image
function preloadImage() {
    var image = new Image();
    image.src = 'image/pexels-photo-260922.jpeg';
}

// Restore image
function restoreImage() {
    var img = document.getElementById('Image1');
    img.src = 'image/istockphoto-1198052920-612x612.jpg';
}

// Swap image
function swapImage() {
    var img = document.getElementById('Image1');
    img.src = 'image/pexels-photo-260922.jpeg';
}
