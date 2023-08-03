var images = document.querySelectorAll('.image img');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var galleryImg = document.querySelector('.gallery-inner img');

var currentIndex = 0;
function showGallery(){
    if (currentIndex == 0)
        prev.classList.add('hide')
    else
        prev.classList.remove('hide')
    if (currentIndex == images.length-1)
        next.classList.add('hide');
    else
        next.classList.remove('hide');
    

    // Remove all class 'border' cua images
    images.forEach(item =>
        item.parentElement.classList.remove('border')
    )

    // Show Image
    galleryImg.src = images[currentIndex].src;
    images[currentIndex].parentElement.classList.add('border')
}

images.forEach((item, index) => 
    item.addEventListener('click', function(){
        currentIndex = index;
        showGallery();
    })
)

prev.addEventListener('click', function(){
    if (currentIndex > 0) {
        currentIndex--;
        showGallery();
    }
})

next.addEventListener('click', function(){
    if (currentIndex < images.length-1) {
        currentIndex++;
        showGallery();
    }
})
document.addEventListener('keydown', function(e){
    if (e.key === 'ArrowLeft')
        prev.click();
    if (e.key === 'ArrowRight')
        next.click();
})
// // Chay Auto
// setInterval(function(){
//     if (currentIndex == images.length-1)
//         currentIndex = -1;
//     next.click();
// }, 3000)