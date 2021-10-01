let count = 3625
let counterText = document.querySelector("#counter")

function increase() {
    count += 1
    counterText.textContent = count
}

let coolBtn = document.querySelector("#cool-btn")
coolBtn.addEventListener('click', increase)

let reset = document.querySelector("#reset-btn")
reset.addEventListener("click", () => {
	alert("No takebacks. You already said John was cool!")
})

let color = document.querySelector("#color")
color.addEventListener("click", () => {
	alert("John's favorite color is orange!")
})

let place = document.querySelector("#place")
place.addEventListener("click", () => {
	alert("John's favorite place is the beach!")
})

let ritual = document.querySelector("#ritual")
ritual.addEventListener("click", () => {
	alert("John's favorite ritual is sleeping!")
})