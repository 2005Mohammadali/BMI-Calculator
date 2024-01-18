let weight = document.getElementById("weight")
let height = document.getElementById("height")
let calc_bmi = document.querySelector("button")
let show_bmi = document.querySelector("#bmi")
let msg = document.querySelector(".msg")
calc_bmi.addEventListener("click", function () {
    let bmi = ((weight.value) / (height.value) ** 2).toFixed(2)
    show_bmi.textContent = bmi
    bmi_scale(bmi)
})

function bmi_scale(b) {
    if (b < 18.5) {
        msg.textContent = "You are UNDERWEIGHT"
        show_bmi.style.color = "blue"
        msg.style.color = "blue"
    }
    else if (18.5 < b && b < 24.9) {
        msg.textContent = "You are NORMAL"
        show_bmi.style.color = "green"
        msg.style.color = "green"
    }
    else if (25 < b && b < 29.9) {
        msg.textContent = "You are OVERWEIGHT"
        show_bmi.style.color = "yellow"
        msg.style.color = "yellow"
    }
    else if (30 < b && b < 34.9) {
        msg.textContent = "You are OBESE"
        show_bmi.style.color = "orangered"
        msg.style.color = "orangered"
    }
    else if (b > 35) {
        msg.textContent = "You are EXTREMELY OBESE"
        show_bmi.style.color = "red"
        msg.style.color = "red"
    }
}