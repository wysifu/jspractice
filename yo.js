//in the html file or dom, the each color's count has an id associated with them. we will access these elements using a document method
//and store them in a variable according to color. 

let redCount = document.getElementById("rmc")
let blueCount = document.getElementById("bmc")
let greenCount = document.getElementById("gmc")

//when we click on the button to increase buy one or decrease by one, we want something to happen, a function specifically. We will hire 
//a function and give em a phone, when we call em, they will follow the instructions we gave to them on the hire date.  

//below, the instructions indicate to increment the value of the color specific count and change the inner html of the element specified by
//id to match the value of that color specific count

addOneR = () => {
    redCount++
    rmc.innerText = redCount
};

minusOneR = () => {
    redCount--
    rmc.innerText = redCount
};

addOneB = () => {
    blueCount++
    bmc.innerText = blueCount
};

minusOneB = () => {
    blueCount--
    bmc.innerText = blueCount
};

addOneG = () => {
    greenCount++
    gmc.innerText = greenCount
};

minusOneG = () => {
    greenCount--
    gmc.innerText = greenCount
};

