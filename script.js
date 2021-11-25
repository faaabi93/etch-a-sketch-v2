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
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createDivs(newSize);
    const cells = document.querySelectorAll(".item");
    cells.forEach(cell => cell.addEventListener("mouseover", addColor))
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
        currentMode = "color";  
    });
};

function blackBtn() {
    const cells = document.querySelectorAll(".item");
    cells.forEach(function(cell) {
        clear();
        cell.removeEventListener("mouseover", addColor);
        cell.addEventListener("mouseover", addBlack);
        currentMode = "black";
    });
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

function createDivs(n) {
    for(let i = 0; i < n*n; i++) {
        let newDiv = document.createElement("div")
        newDiv.classList.add("item");
        container.appendChild(newDiv)
    };
    const cells = document.querySelectorAll(".item");
    addContainerTemplate(n);
    cells.forEach(cell => cell.addEventListener("mouseover", addColor));
};


createDivs(16)