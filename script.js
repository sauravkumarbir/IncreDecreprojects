let currentWidth = 0;
let step = 5; 
let increaseTimeout, decreaseTimeout;

function Incre() {
    let innerDiv = document.getElementById("inner");
    let display = document.getElementById("display");
    currentWidth += step;

    if (currentWidth >= 100) {
        currentWidth = 100;
    }

    if (currentWidth % 5 === 0) {
        innerDiv.style.backgroundColor = getRandomColor();
    }

    innerDiv.style.width = currentWidth + "%";
    display.innerText = currentWidth + "%";
}

function Decre() {
    let innerDiv = document.getElementById("inner");
    let display = document.getElementById("display");
    currentWidth -= step;

    if (currentWidth < 0) {
        currentWidth = 0;
    }

    if ((currentWidth + step) % 5 === 0) {
        innerDiv.style.backgroundColor = getRandomColor();
    }

    innerDiv.style.width = currentWidth + "%";
    display.innerText = currentWidth + "%";
}

function startIncreasing() {
    if (currentWidth < 100) {
        Incre();
        increaseTimeout = setTimeout(startIncreasing, 300);
    }
}

function startDecreasing() {
    if (currentWidth > 0) {
        Decre();
        decreaseTimeout = setTimeout(startDecreasing, 300);
    }
}

function stop() {
    clearTimeout(increaseTimeout);
    clearTimeout(decreaseTimeout);
}

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
}