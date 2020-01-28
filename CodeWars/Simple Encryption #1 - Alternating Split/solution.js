/*
For building the encrypted string:
Take every 2nd char from the string, then the other chars, that are not every 2nd char, and concat them as new String.
Do this n times!

Examples:

"This is a test!", 1 -> "hsi  etTi sats!"
"This is a test!", 2 -> "hsi  etTi sats!" -> "s eT ashi tist!"
Write two methods:

function encrypt(text, n)
function decrypt(encryptedText, n)
For both methods:
If the input-string is null or empty return exactly this value!
If n is <= 0 then return the input text.
*/

//Solution
function encrypt(text, n) {
    let str = text.split("");
    let everySecond = [];
    let everyOther = [];

    for (let i = 1; i < str.length; i += 2) {
        everySecond.push(str[i]);
    }
    for (let i = 0; i < str.length; i += 2) {
        everyOther.push(str[i]);
    }
    console.log([...everySecond, ...everyOther].join(''));
}

encrypt("This is a test!", 1);

//Above works but only one time.