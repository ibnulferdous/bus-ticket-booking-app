const nameInput = document.getElementById("name-input")
const phoneInput = document.getElementById("phone-input")
const dateInput = document.getElementById("date-input")
let dateInputValue = dateInput.value


const submitBtn = document.getElementById("submit-btn")
const busBody = document.querySelector(".bus-body")
const seats = document.querySelectorAll(".row .seat:not(.occupied)")
const ticketTypeInput = document.getElementById("ticket-type")
let ticketPrice = +ticketTypeInput.value


const ticketDiv = document.getElementById("ticket-div")
const showName = document.getElementById("show-name")
const showNumber = document.getElementById("show-number")
const showDate = document.getElementById("show-date")
const showCoachType = document.getElementById("show-coach-type")
const showPrice = document.getElementById("show-price")
const showSeats = document.getElementById("show-seats")
const showTotalSeats = document.getElementById("show-total-seats")
const showTotalPrice = document.getElementById("show-total-price")



// Function for selected seats
function updateSelectedSeats() {
    if(ticketPrice == 800) {
        showCoachType.innerText = "AC Normal"
    } else if(ticketPrice == 1200) {
        showCoachType.innerText = "AC Business"
    } else if(ticketPrice == 1200) {
        showCoachType.innerText = "Non AC"
    }

    const selectedSeats = document.querySelectorAll(".row .seat.selected")
    const SelectedSeatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
    const selectedSeatsLength = selectedSeats.length
    showTotalSeats.innerText = selectedSeatsLength
    let selectedSeatsText = []
    SelectedSeatsIndex.forEach(function(seat) {
        selectedSeatsText.push(seats[seat].innerText)
    })
    showTotalPrice.innerText = ticketPrice * selectedSeatsLength
    showSeats.innerText = selectedSeatsText.join(", ")
}

// Submit button event handeler
submitBtn.addEventListener("click", function(e) {
    showName.innerText = nameInput.value
    showNumber.innerText = phoneInput.value
    dateInputValue = dateInput.value
    dateInputValue = dateInputValue.split("-").reverse().join("-")
    showDate.innerText = dateInputValue
    ticketPrice = +ticketTypeInput.value
    showPrice.innerText = ticketPrice

    updateSelectedSeats()

    if(nameInput.value.length != 0 && phoneInput.value.length != 0 && dateInput.value.length != 0) {
        ticketDiv.classList.remove("hidden")
    }
})

// Busbody event handeler 
busBody.addEventListener("click", function(e) {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")) {
        e.target.classList.toggle("selected")
    }
})