let prev = document.querySelector('.previous');
let next = document.querySelector('.next');
let gallery = document.querySelector('.gallery');
gallery.style.transition = 'all .2s ease';

let current = 0;
let move = 220;

// Initial Prev load as hidden button
if (current == 0) {
    prev.style.opacity = '0';
    prev.style.visibilty= 'hidden';
    prev.style.cursor= 'default';
}

next.addEventListener('click', () => {
    if(current < 880) {
        gallery.style.transform = `translateX(-${current += move}px)`;

        prev.style.opacity = '1';
        prev.style.visibilty= 'visible';
        prev.style.cursor= 'pointer';
    } 
    if (current == 880) {
        next.style.opacity = '0';
        next.style.visibilty= 'hidden';
        next.style.cursor= 'default';
    }
});

prev.addEventListener('click', () => {
    if (current > 0) {
        gallery.style.transform = `translateX(-${current -= move}px)`; 

        next.style.opacity = '1';
        next.style.visibilty= 'visible';
        next.style.cursor= 'pointer';
    } 
    if (current == 0) {
        prev.style.opacity = '0';
        prev.style.visibilty= 'hidden';
        prev.style.cursor= 'default';
    }
});

// //scrimba solution
// const gallery = document.getElementsByClassName('gallery')[0]
// const prevBtn = document.getElementsByClassName('previous')[0]
// const nextBtn = document.getElementsByClassName('next')[0]
// const galleryCardCount = document.getElementsByClassName('card').length

// let currentGalleryXOffset = 0
// const endGalleryXOffset = (galleryCardCount - 1) * -220

// prevBtn.addEventListener("click", galleryClickHandler)
// nextBtn.addEventListener("click", galleryClickHandler)

// function galleryClickHandler(event) {
//     let targetBtn = event.target.className
//     if (targetBtn == "previous" && currentGalleryXOffset < 0){
//         currentGalleryXOffset += 220
//     } else if (targetBtn == "next" && currentGalleryXOffset > endGalleryXOffset ) {
//         currentGalleryXOffset -= 220
//     }
    
//     if (currentGalleryXOffset == 0) {
//         prevBtn.style.opacity = 0.3
//         prevBtn.style.cursor = 'default'
//     } else {
//         prevBtn.style.opacity = 1
//         prevBtn.style.cursor = 'pointer'
//     } 
    
//     if (currentGalleryXOffset == endGalleryXOffset) {
//         nextBtn.style.opacity = 0.3
//         nextBtn.style.cursor = 'default'
//     } else {
//         nextBtn.style.opacity = 1
//         nextBtn.style.cursor = 'pointer'
//     }

//     gallery.style.transform = `translateX(${currentGalleryXOffset}px)`
// }
