// size is 16 by defualt, however this can be changed on creation of a newBoard
let size = 16;
let container = document.getElementById("container");
// create an event listener to determine if the ROM has been loaded before accessing the container
window.addEventListener('load', function(){  
    createGrid(size);
});

// function which changes the background of all div elements with class grid-item to white
// resetBoard(): Void
function resetBoard(){ 
    document.querySelectorAll("div.grid-item").forEach(e => e.style.backgroundColor="white");
}

// Function which takes x,a size, and container, an element, and creates a x by x grid in that element
// createGrid(x: Number, container: Element): Void
function createGrid(x){
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    if (x>60){
        console.log("Too many pixels");
    }
    console.log(container);
    for (let i=0; i < x*x; ++i){
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        cell.onmouseover = () => cell.style.backgroundColor = "black";
        container.appendChild(cell);
    }
}

// function which prompts the user for a new size, clears the board, and then creates a new grid of the given size
// newBoard(): Void
function newBoard(){
    size = prompt("enter a size");
    size = parseInt(size);
    if (size === ""){
        newBoard();
    }
    clearBoard();
    createGrid(size);

}

// function which removes all div elements inside the container
// clearBoard(): Void
function clearBoard(){
    let grids = Array.from(container.childNodes);
    grids.forEach(element => {
        container.removeChild(element);
    });
}

// function which iterates over grids, and gives a 50% chance of the background color of each grid being white or black
// randomPattern(): Void
function randomPattern(){
    let grids = Array.from(container.childNodes);
    grids.forEach(element => {
        let res = Math.floor(Math.random()*2);
        if (element.style === undefined){
            return;
        }
        element.style.backgroundColor = res === 0 ? "white" : "black";
    });
}



