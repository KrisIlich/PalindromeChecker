# Palindrome Checker

## Description
The Palindrome Checker is a simple web application that allows users to check if a given word or phrase is a palindrome. A palindrome is a word, phrase, or sequence of characters that reads the same backward as forward, ignoring spaces, punctuation, and case.

## Features
- Input text to check for palindromes.
- Provides real-time feedback on whether the input is a palindrome.
- Alerts users when the input is empty.

## Technologies Used
- HTML
- CSS
- JavaScript

## How It Works
1. Users enter a word or phrase into the input field.
2. The application cleans the input by removing non-alphanumeric characters and converting it to lowercase.
3. It checks if the cleaned input is equal to its reverse.
4. The result is displayed on the screen, indicating whether the input is a palindrome.

## JavaScript Code
```javascript
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
