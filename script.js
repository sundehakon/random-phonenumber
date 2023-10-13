const prompt = require('prompt-sync')();

const result = prompt("Do you want a Norwegian, or American phone number? (n/a)");

if (result.toString().startsWith('n')) {
    const phoneNumber = [];
    for (i = 0; i < 8; i += 1) {
        phoneNumber[i] = Math.round(Math.random() * 9)
    }

    phoneNumber.splice(3, 0, ' ')
    phoneNumber.splice(6, 0, ' ')

    console.log(("Here's a random Norwegian telephone number! :"),(`+47 ${phoneNumber.join("")}`))
} else if (result.toString().startsWith('a')) {
    const usPhoneNumber = [];
    const areaCode = [];

    for (i = 0; i < 3; i += 1) {
        areaCode[i] = Math.round(Math.random() * 9)
    }

    for (i = 0; i < 7; i += 1) {
        usPhoneNumber[i] = Math.round(Math.random() * 9)
    }
    
    console.log(("Here's a random American telephone number!"), (`(${areaCode.join("")}) ${usPhoneNumber.slice(0, 3).join("")}-${usPhoneNumber.slice(3).join("")}`))
    console.log("PS! Area code might be wrong, we're working on a solution.")
} else if (result !== 'a') {
    console.log("Please enter either a or n")
} else if (result !== 'n') {
    console.log("Please enter either a or n")
}