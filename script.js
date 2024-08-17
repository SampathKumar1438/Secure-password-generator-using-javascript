const passwordField = document.getElementById('password');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const lengthInput = document.getElementById('length');

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+{}:"<>?|[];\',./`~';

function generatePassword() {
    let characters = '';
    if (uppercaseCheckbox.checked) {
        characters += uppercaseLetters;
    }
    if (lowercaseCheckbox.checked) {
        characters += lowercaseLetters;
    }
    if (numbersCheckbox.checked) {
        characters += numbers;
    }
    if (symbolsCheckbox.checked) {
        characters += symbols;
    }

    let passwordLength = parseInt(lengthInput.value);
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    passwordField.value = password;
}

function copyPassword() {
    passwordField.select();
    passwordField.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Password copied to clipboard!');
}

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);
