
 let size = 40;
let storage = 0;
window.addEventListener('load', function(){  let container = document.getElementById("container")
    createGrid(size, container);
    storage = container;
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    return container;
});
console.log(storage);


let grids=undefined;
function resetBoard(size){ 
    grids = document.querySelectorAll("div.grid-item")
    while (grids[0]) {
        grids[0].parentNode.removeChild(grids[0]);
    }
    createGrid(size, storage);
}

let button = document.getElementsByTagName("button");
button.addEventListener("onclick", resetBoard(16));

// Function which takes x,a size, and container, an element, and creates a x by x grid in that element
// createGrid(x: Number, container: Element): Void
function createGrid(x, container){
    if (x>100){
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




