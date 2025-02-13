console.log("hej jeg er dropdown 2")
const colArray2 = [["red", "#ff0000"], ["green", "#00ff00"], ["yellow", "#ffff00"], ["purple", "#1f35a9"]]

const pbFillDropdown2 = document.getElementById("pbFillDropdown2")
const ddColor2 = document.getElementById("ddColor2")

function addColors2(btn) {
    ddColor2.innerHTML = ""
    colArray2.forEach(fillDropdown2)
    console.log(document.querySelectorAll("*"))
}

function fillDropdown2(item) {
    const el = document.createElement("option")
    el.textContent = item[0]
    el.value = item[1]
    ddColor2.appendChild(el)
}

function setBackgroundColor2(ev) {
    console.log(ev)
    const selindex = ddColor2.selectedIndex
    const selectedOption = ddColor2.options[selindex]
    const color = selectedOption.value
    bdy.style.backgroundColor = color
}

pbFillDropdown2.addEventListener("click", addColors2)
ddColor2.addEventListener("change", setBackgroundColor2)