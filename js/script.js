document.writeln('<h1>Entering user info</h1>' + "<hr>")
var mobPattern = /^(010|011|012)\d*$/
var emailPattern = /^[a-z]{3}@[0-9]{3}\.[a-z]{3}$/
var gname, phum, mnum, email
var fChoice


while (true) {
    gname = prompt("Please enter your name")
    console.log(gname)
    if (!isNaN(gname) || gname === "")
        alert("Please enter a valid name")
    else
        break
}

while (true) {
    phum = prompt("Please enter your phone numer")
    console.log(phum)
    if (isNaN(phum) || phum === "")
        alert("Please enter a valid number")

    else if (phum.length != 8)
        alert("Phone number must be 8 numbers.")
    else
        break
}


while (true) {
    mnum = prompt("Please enter your mobile numer")
    console.log(mnum)
    if (isNaN(mnum) || mnum === "") {
        alert("Please enter a valid number")
    }
    else if (mnum.length != 11) {
        alert("Mobile number must be 11 numbers.")
    }
    else if (!mobPattern.test(mnum))
        alert("Mobile number must start with 010 or 011 or 012.")

    else
        break
}

while (true) {
    email = prompt("Please enter your email address")
    console.log(email)
    if (!emailPattern.test(email))
        alert("Please enter the following email format: abc@123.com")
    else
        break
}
while (true) {
    fChoice = prompt('Please choose format color between "red, green or blue"')
    if (fChoice == "red" || fChoice == "green" || fChoice == "blue")
        break
    else
        alert("Invalid input, please choose from the given colors")
}

var today = new Date();
var year = today.getFullYear();
let month = today.getMonth() + 1
let day = today.getDate()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var fullDate = today.toLocaleDateString('en-US', options);


document.writeln('<h3 style="color:' + fChoice + '">Welcome dear guest <span style="color:black !important">' + gname + '</span>' + '</h3>' + '<h3 style="color:' + fChoice + '">Your phone number is <span style="color:black !important">' + phum + '</span>' + '</h3>' + '<h3 style="color:' + fChoice + '">Your mobile number is <span style="color:black !important">' + mnum + '</span>' + '</h3>' + '<h3 style="color:' + fChoice + '">Your email address is <span style="color:black !important">' + email + '</span>' + '</h3>')
document.writeln('<h3 style="color:' + fChoice + '">Day is <span style="color:black !important">' + day + '</span>' + '</h3>' + '<h3 style="color:' + fChoice + '">We are in month <span style="color:black !important">' + month + '</span>' + '</h3>' + '<h3 style="color:' + fChoice + '">Year is <span style="color:black !important">' + year + '</span>' + '</h3>' + '<h3 style="color:' + fChoice + '">Today is <span style="color:black !important">' + fullDate + '</span>' + '</h3>')


