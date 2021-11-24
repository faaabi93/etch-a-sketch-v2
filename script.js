const container = document.querySelector(".container");


function addColor(e) {
    if(e.target.style.backgroundColor) return;
    e.target.style.backgroundColor = `rgb(${getRandomColor()})`;
};

function getRandomColor() {
    return `${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)}`;
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

function createDivs(n) {
    for(let i = 0; i <= n; i++) {
        let newDiv = document.createElement("div")
        newDiv.classList.add("item");
        container.appendChild(newDiv)
    };

    const cells = document.querySelectorAll(".item");
    cells.forEach(cell => cell.addEventListener("mouseover", addColor));
};

createDivs(16)