const container = document.querySelector(".container");
const btnClear = document.querySelector(".btn-clear");
const btnColor = document.querySelector(".btn-color");
const btnBlack = document.querySelector(".btn-black");
const btnResize = document.querySelector(".btn-resize");
let currentMode = "color";

btnClear.addEventListener("click", clear);
btnBlack.addEventListener("click", blackBtn);
btnColor.addEventListener("click", colorBtn);
btnResize.addEventListener("click", resizeBtn);

function resizeBtn() {
    let newSize = window.prompt("Test");
    if(isNaN(newSize) || newSize > 64 || newSize < 3) return;

    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createDivs(newSize);
    const cells = document.querySelectorAll(".item");
    console.log(currentMode === "color")
};

function addContainerTemplate(n) {
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`
    container.style.gridTemplateRows = `repeat(${n}, 1fr)`
}

function addColor(e) {
    if(e.target.style.backgroundColor) return;
    e.target.style.backgroundColor = `rgb(${getRandomColor()})`;
};

function addBlack(e) {
    if(e.target.style.backgroundColor) return;
    e.target.style.backgroundColor = "rgb(0,0,0)"
};

function colorBtn() {
    const cells = document.querySelectorAll(".item");
    cells.forEach(function(cell) {
        clear();
        cell.removeEventListener("mouseover", addBlack);
        cell.addEventListener("mouseover", addColor);  
    });
    currentMode = "color";  
    setButtonActive(btnColor)
    console.log(currentMode);
};

function blackBtn() {
    const cells = document.querySelectorAll(".item");
    cells.forEach(function(cell) {
        clear();
        cell.removeEventListener("mouseover", addColor);
        cell.addEventListener("mouseover", addBlack);
    });
    currentMode = "black";
    setButtonActive(btnBlack)
    console.log(currentMode);
};

function clear() {
    const cells = document.querySelectorAll(".item");
    cells.forEach(cell => cell.style.backgroundColor = "")
};

function getRandomColor() {
    return `${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)}`;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function setButtonActive(btn) {
    if(btn === btnColor) {
        btnColor.classList.add("btn-active");
        btnBlack.classList.remove("btn-active");
    } else if (btn === btnBlack) {
        btnColor.classList.remove("btn-active");
        btnBlack.classList.add("btn-active");
    }
}

function createDivs(n) {
    for(let i = 0; i < n*n; i++) {
        let newDiv = document.createElement("div")
        newDiv.classList.add("item");
        container.appendChild(newDiv)
    };
    const cells = document.querySelectorAll(".item");
    addContainerTemplate(n);
    if(currentMode === "color") {
        cells.forEach(cell => cell.addEventListener("mouseover", addColor))
    } else {
        cells.forEach(cell => cell.addEventListener("mouseover", addBlack))
    }
    setButtonActive(btnColor);
};


createDivs(16)