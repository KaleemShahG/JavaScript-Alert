// ================= 1. CITY NAME =================
var city = prompt("Enter your city name:");
if (city === "Karachi" || city === "karachi") {
    alert("Welcome to city of lights");
}

// ================= 2. GENDER =================
var gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
    alert("Good Morning Sir");
} else if (gender === "female") {
    alert("Good Morning Ma’am");
}

// ================= 3. TRAFFIC SIGNAL =================
var signal = prompt("Enter traffic signal color (red/yellow/green):");
if (signal === "red") {
    alert("Must Stop");
} else if (signal === "yellow") {
    alert("Ready to move");
} else if (signal === "green") {
    alert("Move now");
}

// ================= 4. FUEL CHECK =================
var fuel = prompt("Enter remaining fuel in litres:");
if (fuel < 0.25) {
    alert("Please refill the fuel in your car");
}

// ================= 5. CONDITIONS CHECK =================

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
}

// b
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
}

// c
var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
}
if (c === 13) {
    alert("condition 2 is true");
}
if (++c < 14) {
    alert("condition 3 is true");
}
if (c === 14) {
    alert("condition 4 is true");
}

// d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
}

// e
if (true) {
    alert("True");
}
if (false) {
    alert("False");
}

// f
if ("car" < "cat") {
    alert("car is smaller than cat");
}

// ================= 6. MARKS & GRADE =================
var sub1 = +prompt("Enter marks of subject 1:");
var sub2 = +prompt("Enter marks of subject 2:");
var sub3 = +prompt("Enter marks of subject 3:");
var totalMarks = +prompt("Enter total marks:");

var obtained = sub1 + sub2 + sub3;
var percentage = (obtained / totalMarks) * 100;

var grade, remarks;

if (percentage >= 80) {
    grade = "A-one";
    remarks = "Excellent";
} else if (percentage >= 70) {
    grade = "A";
    remarks = "Good";
} else if (percentage >= 60) {
    grade = "B";
    remarks = "You need to improve";
} else {
    grade = "Fail";
    remarks = "Sorry";
}

document.write("<h3>Marks Sheet</h3>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtained + "<br>");
document.write("Percentage: " + percentage + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks + "<hr>");

// ================= 7. GUESS GAME =================
var secret = 7;
var guess = +prompt("Guess the secret number (1 to 10):");

if (guess === secret) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secret) {
    alert("Close enough to the correct answer");
}

// ================= 8. DIVISIBLE BY 3 =================
var num = +prompt("Enter a number:");
if (num % 3 === 0) {
    alert("Number is divisible by 3");
} else {
    alert("Number is NOT divisible by 3");
}

// ================= 9. EVEN OR ODD =================
var checkNum = +prompt("Enter a number to check even or odd:");
if (checkNum % 2 === 0) {
    alert("Number is Even");
} else {
    alert("Number is Odd");
}

// ================= 10. TEMPERATURE =================
var temp = +prompt("Enter temperature:");
if (temp > 40) {
    alert("It is too hot outside.");
} else if (temp > 30) {
    alert("The Weather today is Normal.");
} else if (temp > 20) {
    alert("Today’s Weather is cool.");
} else if (temp > 10) {
    alert("OMG! Today’s weather is so Cool.");
}

// ================= 11. CALCULATOR =================
var num1 = +prompt("Enter first number:");
var num2 = +prompt("Enter second number:");
var op = prompt("Enter operation (+, -, *, /, %):");

var result;

if (op === "+") {
    result = num1 + num2;
} else if (op === "-") {
    result = num1 - num2;
} else if (op === "*") {
    result = num1 * num2;
} else if (op === "/") {
    result = num1 / num2;
} else if (op === "%") {
    result = num1 % num2;
}

alert("Result: " + result);
