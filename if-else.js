                                // if-else
// check whether a password has atleast 8 characters.
let password = "Tejasri123";
if (password.length >= 8){
    console.log("Password is strong ");
} else {
    console.log("Password is short");
}

// -------------------------------------------
// 2.check whether a number is multiple of 10.
let num = 70;
if (num % 10 == 0) {
    console.log("Number is multiple by 10");
} else {
    console.log("Number is not multiple by 10");
}

// ------------------------------------------------
// 3.check exam eligibility basec on attedence.
let attendence = 70;
if(attendence >= 65){
    console.log("Eligible for the Exam");
} else {
    console.log("Not Eligible for the Exam");
}

// -----------------------------------------------
// 4.check whether free delivery is available.
let amount = 650;
if (amount >= 500){
    console.log("Free Delivery available");
} else {
    console.log("Delivery charges apply");
}

// -----------------------------------------------
// 5.check whether a number is a two-digit number.
let digit = 45;
if (digit >= 10 & digit <= 99){
    console.log("It is a Two-digit Number");
} else {
    console.log("It is not a Two-digit Number")
}

// -----------------------------------------------
// 6.check whether three angles from a valid traingle.
let a = 60;
let b = 70;
let c = 50;
if (a + b + c === 180 & a > 0 & b > 0 & c > 0){
    console.log("Valid Traingle");
} else {
    console.log("Invalid Traingle");
}