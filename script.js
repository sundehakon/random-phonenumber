const prompt = require('prompt-sync')();

const result = prompt("Do you want a Norwegian, or American phone number? (a/n)");

if (result.toString().startsWith('n')) {
    const phoneNumber = [];
    for (i = 0; i < 8; i += 1) {
        phoneNumber[i] = Math.round(Math.random() * 9)
    }

    phoneNumber.splice(3, 0, ' ')
    phoneNumber.splice(6, 0, ' ')

    console.log(("Awesome, here's a random Norwegian telephone number! :"),(`+47 ${phoneNumber.join("")}`))
} else if (result.toString().startsWith('u')) {
    const usPhoneNumber = [];
    for (i = 0; i < 7; i += 1) {
        usPhoneNumber[i] = Math.round(Math.random() * 9)
    }
    
    console.log(("Awesome here's a random American telephone number!"), (`${usPhoneNumber.slice(0, 3).join("")}-${usPhoneNumber.slice(3).join("")}`))
} else if (result !== 'a') {
    console.log("Please enter either a or n")
} else if (result !== 'n') {
    console.log("Please enter either a or n")
}