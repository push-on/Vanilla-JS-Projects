'use strict';

// gets javascript elements

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

// when i click the right button color Moves to right

next.addEventListener('click', () => {
    currentActive++;
    if (currentActive > circles.length) {
        currentActive = circles.length;
    }
    update();
});

// when i click the left button color Moves to left

prev.addEventListener('click', () => {
    currentActive--;
    if (currentActive < 1) {
        currentActive = 1;
    }
    update();
});

// this function updates the changes in html

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });
    const actives = document.querySelectorAll('.active');
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    if (currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}



