let textData;
let flagger = false; // flag to track div already exists

const img = document.getElementById("image")
const text = document.getElementById("text")
const title = document.getElementById("flower-title")
const content = document.getElementById("tab-content")

//array of button ids
let buttons = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4")
]

//adding style to each button/tab through js
buttons.forEach(button => {
    const btnStyle = button.style
    
    btnStyle.width = "200px"
    btnStyle.height = "80px"
    btnStyle.borderRadius = "15%"
    btnStyle.border = "4px solid rgb(171, 75, 91)"
    btnStyle.color = "rgb(106, 0, 22)"
    btnStyle.backgroundColor = "rgb(238, 223, 199)"
    btnStyle.fontSize = "30px"
});

// create white bg on user click that encapsulates the content
function bgChange() {
    if (flagger) return; //if false -> continue, if true -> stop

    //create new element
    const newDiv = document.createElement("div")

    //style new element
    newDiv.style.backgroundColor = "white"
    newDiv.style.borderRadius = "3%"
    newDiv.style.border = "2px solid black"
    newDiv.style.padding = "20px"

    //assign children to new element
    if (title) newDiv.appendChild(title)
    if (img) newDiv.appendChild(img)
    if (text) newDiv.appendChild(text)

    //assign new element to parent
    content.prepend(newDiv)

    flagger = true
}

// fetching flower description from json file
fetch("/data/textdata.json")
    .then(response => response.json())
    .then(data => {
        textData = data
    })
    .catch(error => console.error("Error loading text data:", error));


//button or tab functionality and context
function tabOne() {
    content.style.backgroundImage = "none"
    title.innerHTML = "Chrysanthemums"
    img.src = "/images/Chrysanthemum.jpeg"
    img.style.border = "20px ridge rgb(226, 165, 198)"
    text.innerHTML = textData.chrysanthemums.replace(/\n/g, "<br>")
    
    bgChange()
}

function tabTwo() {
    content.style.backgroundImage = "none"
    title.innerHTML = "Lavender"
    img.src = "/images/lavender.jpeg"
    img.style.border = "20px ridge purple"
    text.innerHTML = textData.lavender.replace(/\n/g, "<br>")

    bgChange()
}

function tabThree() {
    content.style.backgroundImage = "none"
    title.innerHTML = "Orchids"
    img.src = "/images/orchids.jpeg"
    img.style.border = "20px ridge rgb(255, 253, 198)"
    text.innerHTML = textData.orchids.replace(/\n/g, "<br>")

    bgChange()
}

function tabFour() {
    content.style.backgroundImage = "none"
    title.innerHTML = "Spider Lily"
    img.src = "/images/spider-lily.jpeg"
    img.style.border = "20px ridge rgb(70, 3, 16)"
    text.innerHTML = textData.spiderlily.replace(/\n/g, "<br>")

    bgChange()
}