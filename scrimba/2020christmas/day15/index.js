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
// const next=document.querySelector('.next')
// const previous=document.querySelector('.previous')
// const card=document.querySelector('.card')
// const galleryBtn=document.querySelector('.gallery')

// const gallery=document.getElementById('gallery').children
// const slidelength=gallery.length

// let currentPic=0;
// let movePic=220;

// // if (currentPic===0){
// //     previous.classList.add('hidden')

// // }
// previous.addEventListener('click',prevSlide)

// next.addEventListener('click', nextSlide)



// function nextSlide(){
   
//     if (currentPic < 880){
//         galleryBtn.style.transform = `translateX(-${currentPic += movePic}px)`;
//         previous.style.opacity = '1';
//         previous.style.visibilty= 'visible';
//     }else if(currentPic===880){
//         next.style.opacity = '0';
//         next.style.visibilty= 'hidden';
//     }
    
// }

// function prevSlide(){
   
//     if (currentPic===0){
//         prev.style.opacity = '0';
//         prev.style.visibilty= 'hidden';
//     }else if(currentPic > 0){
//         gallery.style.transform = `translateX(-${currentPic -= movePic}px)`; 
//         next.style.opacity = '1';
//         next.style.visibilty= 'visible';
//     }
    
// }