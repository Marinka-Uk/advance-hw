function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

function resizeImage() {
    const sliderValue = sliderInput.value;
    const newSize = sliderValue * 3; 
    sliderImage.style.width = `${newSize}px`;
    sliderImage.style.height = `${newSize}px`;
}

const debouncedResizeImage = debounce(resizeImage, 100);

sliderInput.addEventListener('input', debouncedResizeImage);




const box = document.getElementById('box');

function moveBox(event) {
    box.style.left = `${event.clientX - box.offsetWidth / 2}px`;
    box.style.top = `${event.clientY - box.offsetHeight / 2}px`;
}

const debouncedMoveBox = _.debounce(moveBox, 100);


document.addEventListener('mousemove', debouncedMoveBox);