// KM DA PERCORRERE
let km = document.getElementById(`kms`).value
// let km = getElementById("kms").innerText;
console.log(`km da percorrere: ${km}`)

// ETA
let age = document.getElementById(`eta`).value
// let age = getElementById("eta").innerText;
console.log(`eta: ${age}`)

// CALCOLO PREZZO PER KM
let price = document.getElementById(`kms`).value * 0.21 
console.log(`prezzo senza sconto: ${price}\$`)
document.getElementById("costo").innerText = (`Prezzo per il viaggio: ${price.toFixed(2)}\$`)


// PREZZO u18
if(document.getElementById(`eta`).value < 18){
    price = (km * 0.21) - (price * 0.2)
    document.getElementById("costo").innerText = (`Prezzo per il viaggio(-20%): ${price.toFixed(2)}\$`)
    console.log(`prezzo u18 ${price}\$`)
}

// PREZZO o65
if(document.getElementById(`eta`).value > 65){
    price = (km * 0.21) - (price * 0.4)
    document.getElementById("costo").innerText = (`Prezzo per il viaggio(-40%): ${price.toFixed(2)}\$`)
    console.log(`prezzo o65 ${price}\$`)
}


