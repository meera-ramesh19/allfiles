const body = document.body;
const min = 1;
const max = 6;

const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const forth = document.getElementById('forth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');


body.addEventListener('click', function () {
    let randomNum = Math.floor(Math.random() * max) + min;
    console.log(randomNum);

    // mapping dice faces
    let diceFaces = [
        { id: 1, el: first },
        { id: 2, el: second },
        { id: 3, el: third },
        { id: 4, el: forth },
        { id: 5, el: fifth },
        { id: 6, el: sixth },
    ];

    // show random number with faces
    diceFaces.map(face => {
        if (randomNum === face.id) {
            face.el.classList.add('show');
            face.el.classList.remove('hide');
        } else {
            face.el.classList.add('hide');
            face.el.classList.remove('show');
        }
    });

})