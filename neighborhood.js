let randomBtn = document.querySelector(".randomBtn")
randomBtn.addEventListener("click", randomize)

function randomize() {
    let list = ["Meat U Anywhere", "Chuys", "Old House Barbecue"]
    const randomElement = [Math.floor(Math.random() * list.length)]
    console.log(list[randomElement])
    alert(`Your random restaraunt is ${list[randomElement]}!`)
}