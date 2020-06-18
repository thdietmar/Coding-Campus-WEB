function changeslide(slideNumber) {
    var imageContainer = document.getElementById("image-container")
    switch(slideNumber) {
        case 1: {
            imageContainer.style.backgroundImage = 'url(../IMAGES/zoo_front.jpg)'
            break;
        }
        case 2: {
            imageContainer.style.backgroundImage = 'url(../IMAGES/slide-2.jpg)'
            break;
        }
        case 3: {
            imageContainer.style.backgroundImage = 'url(../IMAGES/slide-3.jpg)'
            break;
        }
    }
    
}