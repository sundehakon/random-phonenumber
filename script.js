const prompt = require('prompt-sync')();

const result = prompt("Do you wish for a random telephone number? (y/n)");

const phoneNumber = [];
for (i = 0; i < 8; i += 1) {
    phoneNumber[i] = Math.round(Math.random() * 9)
}

phoneNumber.splice(3, 0, ' ')
phoneNumber.splice(6, 0, ' ')

if (result.toString().startsWith('y')) {
    console.log(("Awesome, here's a random telephone number! :"),(`+47 ${phoneNumber.join("")}`))
} else if (result.toString().startsWith('n')) {
    console.log(('Goodbye.'))
} else if (result !== 'y') {
    console.log("Please enter either y or n")
} else if (result !== 'n') {
    console.log("Please enter either y or n")
}

for (i = 0; i < 8; i += 1) {
    phoneNumber[i] = Math.round(Math.random() * 9)
}