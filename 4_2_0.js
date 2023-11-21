// Import the crypto-js module
const CryptoJS = require("crypto-js");

// The password from which the key will be derived
const password = "Xinhai Zou";

// The salt (should be a random value and unique per user)
const salt = CryptoJS.lib.WordArray.random(128 / 8);

// Number of iterations (the more the better from a security standpoint, but also more resource-intensive)
const iterations = 1000;

// Key size in words
const keySize = 128 / 32;

// Deriving a key from the password
const key = CryptoJS.PBKDF2(password, salt, {
    keySize: keySize,
    iterations: iterations
});

console.log("Derived Key:", key.toString());
