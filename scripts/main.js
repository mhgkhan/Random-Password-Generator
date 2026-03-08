const lengthPassword = document.getElementById("length"),
    includeUppercase = document.getElementById("includeUppercase"),
    includeLowercase = document.getElementById("includeLowercase"),
    includeNumbers = document.getElementById("includeNumbers"),
    includeSymbols = document.getElementById("includeSymbols"),
    generateButton = document.getElementById("generateButton"),
    generatedPasswordContainer = document.getElementById("generatedPassword");

// Array for to push generated password 
// this will refill if user click on generate password button 
let passwordsAll = [];


window.onload = () => generatedPasswordContainer.textContent = "Your generated password will appear here...";


// generate password 
const generatePassword = () => {
    let letters = "abcdefghijklmnopqrstuvwxyz";
    let numbers = "12345678901234567890123456";
    let symbols = `!@#$%^&*()_+-=~>,./?'";:|`;

    let password = ""

    for (let i = 0; i < (lengthPassword.value / 6); i++) {
        password += symbols.split("")[Math.floor(Math.random() * lengthPassword.value)].toString();
        password += letters.split("")[Math.floor(Math.random() * lengthPassword.value)].toString().toLocaleLowerCase();
        password += numbers.split("")[Math.floor(Math.random() * lengthPassword.value)].toString();
        password += letters.split("")[Math.floor(Math.random() * lengthPassword.value)].toString().toLocaleLowerCase();
        password += symbols.split("")[Math.floor(Math.random() * lengthPassword.value)].toString();
        password += letters.split("")[Math.floor(Math.random() * lengthPassword.value)].toString().toUpperCase();
        password += numbers.split("")[Math.floor(Math.random() * lengthPassword.value)].toString();
        password += letters.split("")[Math.floor(Math.random() * lengthPassword.value)].toString().toUpperCase();
        password += numbers.split("")[Math.floor(Math.random() * lengthPassword.value)].toString();
        password += letters.split("")[Math.floor(Math.random() * lengthPassword.value)].toString().toLocaleLowerCase();
    }

    let newPassword = "";
    for (let index = 0; index < lengthPassword.value; index++) {
        newPassword += password.split("")[Math.floor(Math.random() * password.length)];
    }

    return newPassword;
}


// display password /
const displayPasswords = passwords => {
    generatedPasswordContainer.innerHTML = "";
    passwords.map((ele, ind) => {
        generatedPasswordContainer.innerHTML += `<div class="password1" id="${ind + 2}" onclick="selectPassword(this.id)">
                        <div class="span">${ind + 1}</div>
                        <div class="password">${ele}</div>
                        <div class="copy" id="${ind}" onclick="copyPassword(this.id)" ><img src="public/copyicon.png" alt="copyicon" /> </div>
                    </div>`
    })
}


// CLICK ON GENERATE PASSWORD BUTTON 
generateButton.addEventListener("click", e => {
    passwordsAll = [];
    for (let i = 0; i < 5; i++)passwordsAll.push(generatePassword());
    displayPasswords(passwordsAll)
})




// COPY PASSWORD FUNCTION THAT ARE ADD IN INNER HTML 
const copyPassword = e => {
    const selectCopy = passwordsAll[e]
    const copyingPassword = navigator.clipboard.writeText(selectCopy).then(ok => alert(`COPIED: ${selectCopy}`))
        .catch(err => {
            if (err.name === "NotAllowedError") {
                alert("Clipboard permission denied. Please allow clipboard access.");
            } else {
                console.error("Copy failed:", err);
                alert("Failed to copy text.");
            }
        })
}



// SELECT PASSWORD FUNCTION THAT ARE ADD IN INNER HTML 
const selectPassword = e => {
    const passwordSelect = document.getElementById(e);
    const selectPassword = passwordSelect.querySelector(".password");
    const range = document.createRange();
    range.selectNodeContents(selectPassword);

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}


// DONE
// SAY THANKS TO GHAZNA DEV 
// https://ghazna.online 