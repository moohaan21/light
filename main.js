let light = document.querySelector("#light")
let buttonOn = document.querySelector("#btnOn")
let buttonOff = document.querySelector("#btnOf")

buttonOn.addEventListener("click", () => {
    light.style.backgroundColor="yellow"
})
buttonOff.addEventListener("click", () => {
    light.style.backgroundColor="blue"
})