let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);

pbCol.textContent = "Tryk på mig for at set color";

let bdy = document.querySelector("body");
console.log(bdy);

function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

pbCol.addEventListener('click',setBackgroundColor);

document.addEventListener('keydown', setBackgroundColor);

const inpColorValue = document.querySelector(".inpColorValue");
console.log(inpColorValue);

const inpColorPicker = document.getElementById("inpColorPicker");

function useColorPicker() {
    let col = inpColorPicker.value;
    bdy.style.backgroundColor = col;
    pbCol.style.color = col;
    inpColorValue.value = bdy.style.backgroundColor;
}

pbCol.addEventListener('click', setBackgroundColor);

document.addEventListener('keydown', setBackgroundColor)
inpColorPicker.addEventListener('input', useColorPicker);


const pTags = document.getElementsByTagName('p');
console.log(pTags);

const pArray = Array.from(pTags)

pArray.forEach(increaseFont)
pArray.forEach(decreaseFont);


function increaseFont() {
    const pTags = document.querySelectorAll("p");
    pTags.forEach(p => {
        let currentSize = window.getComputedStyle(p).fontSize;
        let newSize = parseFloat(currentSize) + 2;
        p.style.fontSize = newSize + "px";
    });
}

function decreaseFont() {
    const pTags = document.querySelectorAll("p");
    pTags.forEach(p => {
        let currentSize = window.getComputedStyle(p).fontSize;
        let newSize = parseFloat(currentSize) - 2;
        p.style.fontSize = newSize + "px";
    });
}

const fontIncreaser = document.querySelector(".fontIncreaser")
const fontDecreaser = document.querySelector(".fontDecreaser")

fontIncreaser.addEventListener('click', increaseFont)
fontDecreaser.addEventListener('click', decreaseFont)




