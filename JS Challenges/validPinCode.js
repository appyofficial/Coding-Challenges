/*ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

    eg:

validatePIN("1234") === true
validatePIN("12345") === false
validatePIN("a234") === false*/

function validatePIN(pin) {
    if (pin.toString().length === 4 || pin.toString().length === 6) {
        let regex = /^\d+$/;
        if (regex.test(pin)) {
            console.log("Valid Pin")
        } else {
            console.log("InValid:  Please only enter numbers. ");
        }
    } else {
        console.log("Not valid");
    }
}

validatePIN(4930);