const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');


function isPalindrome(input) {
    const cleanInput = input.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    return cleanInput === cleanInput.split('').reverse().join(``);
}

function isInvalidInput(input) {
    if (input.trim() === '') {
        return true;
    } else {
        return false;
    }
}

function check(e) {
    e.preventDefault();
    const input = userInput.value;
    if (!isInvalidInput(input)) {
        result.innerHTML = '';
        result.innerHTML = isPalindrome(input) ? `&#x2705; ${userInput.value} is a palindrome` : `&#x274C; ${userInput.value} is not a palindrome`;
    } else {
        alert('Please input a value');
    }
}

checkButton.addEventListener('click', check);