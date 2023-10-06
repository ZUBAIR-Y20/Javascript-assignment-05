//                Assignment # 26-30

//1. Write a program that takes a positive integer from user & display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

//ANS #1:

//var userInput = prompt("Enter a positive integer:");
//var number = parseInt(userInput);
//if (isNaN(number) || number <= 0) {
//    document.write("Please enter a valid positive integer.");
//} else {
//    document.write("<h1>Number Information</h1>");
//    document.write("<p>Number: " + number + "</p>");
//    document.write("<p>Rounded Value: " + Math.round(number) + "</p>");
//    document.write("<p>Floor Value: " + Math.floor(number) + "</p>");
//    document.write("<p>Ceiling Value: " + Math.ceil(number) + "</p>");
//}

//2. Write a program that takes a negative floating point number from user & display the following in your browser.
//a. number
//b. round off value of the number
//c. floor value of the number
//d. ceil value of the number

///ANS #2:
//var userInput = prompt("Enter a negative floating-point number:");
//var number = parseFloat(userInput);
//if (isNaN(number) || number >= 0) {
//    document.write("Please enter a valid negative floating-point number.");
//} else {
//    document.write("<h1>Number Information</h1>");
//    document.write("<p>Number: " + number + "</p>");
//    document.write("<p>Rounded Value: " + Math.round(number) + "</p>");
//    document.write("<p>Floor Value: " + Math.floor(number) + "</p>");
//    document.write("<p>Ceiling Value: " + Math.ceil(number) + "</p>");
//}

//3. Write a program that displays the absolute value of a number.
//E.g. absolute value of -4 is 4 & absolute value of 5 is 5

//ANS #3:
//var userInput = prompt("Enter a number:");
//var number = parseFloat(userInput);
//if (isNaN(number)) {
//    document.write("Please enter a valid number.");
//} else {
//    document.write("<h1>Absolute Value</h1>");
//    document.write("<p>The absolute value of " + number + " is " + (number < 0 ? -number : number) + "</p>");
//}

//4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:

//ANS #4:
//var diceValue = Math.floor(Math.random() * 6) + 1;
//document.write("<h1>Dice Roll Simulation</h1>");
//document.write("<p>The dice rolled: " + diceValue + "</p>");

//5. Write a program that simulates a coin toss using random()method of JS Math class. Display the value of coin in your browser

//ANS #5:
//var coinValue = Math.floor(Math.random() * 2); 
//var result = (coinValue === 0) ? "Heads" : "Tails";
//document.write("<h1>Coin Toss Simulation</h1>");
//document.write("<p>The coin landed on: " + result + "</p>");

//6. Write a program that shows a random number between 1 and 100 in your browser.

//ANS #6:
//var randomNumber = Math.floor(Math.random() * 100) + 1;
//document.write("<h1>Random Number Generator</h1>");
//document.write("<p>Random number between 1 and 100: " + randomNumber + "</p>");

//7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
//Possible user inputs can be:
//a. 50
//b. 50kgs
//c. 50.2kgs
//d. 50.2kilograms

//ANS #7:
//var userInput = prompt("Please enter your weight (in kgs or kilograms):");
//var weight = parseFloat(userInput);
//if (isNaN(weight)) {
//    document.write("Invalid input. Please enter your weight as a number.");
//} else {
//    document.write("<h1>Weight Information</h1>");
//   document.write("<p>Your weight is: " + weight + " kilograms</p>");
//}

//8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.
//var secretNumber = Math.floor(Math.random() * 10) + 1;
//var userInput = prompt("Guess the secret number (between 1 and 10):");
//var userGuess = parseInt(userInput);
//if (isNaN(userGuess)) {
//    document.write("Please enter a valid number.");
//} else if (userGuess >= 1 && userGuess <= 10) {
//    if (userGuess === secretNumber) {
//        document.write("<h1>Congratulations!</h1>");
//        document.write("<p>You guessed the secret number (" + secretNumber + ") correctly!</p>");
//    } else {
//        document.write("<h1>Try Again</h1>");
//        document.write("<p>Your guess (" + userGuess + ") is incorrect. The secret number was " + secretNumber + ".</p>");
//    }
//} else {
//    document.write("Please enter a number between 1 and 10.");
//}

//                      Assignment # 31-34

//1. Write a program that displays current date and time in your browser.

//ANS #1:
//var currentDate = new Date();
//var dateString = currentDate.toDateString();
//var timeString = currentDate.toLocaleTimeString();

//var datetimeElement = document.getElementById("datetime");
//datetimeElement.innerHTML = "Current Date: " + dateString + "<br>Current Time: " + timeString;


//2. Write a program that alerts the current month in words. 
//For example December.

//ANS #2:
//var currentDate = new Date();
//var monthNames = [
//    "January", "February", "March", "April", "May", "June",
//    "July", "August", "September", "October", "November", "December"
//];
//var currentMonthName = monthNames[currentDate.getMonth()];
//alert("The current month is " + currentMonthName);


//3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

//ANS #3:
//var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//var currentDate = new Date();
//var currentDayName = dayNames[currentDate.getDay()];
//alert("The first 3 letters of the current day are " + currentDayName);

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

//ANS #4:
//var currentDate = new Date();
//var currentDay = currentDate.getDay();
//if (currentDay === 6 || currentDay === 0) {
//    alert("It's Fun day");
//} else {
//    alert("It's not Fun day");
//}

//5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.

//ANS #5:
//var currentDate = new Date();
//var currentDayOfMonth = currentDate.getDate();
//if (currentDayOfMonth <= 15) {
//    alert("First fifteen days of the month");
//} else {
//    alert("Last days of the month");
//}

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

//ANS #6:
//var currentDate = new Date();
//var minutesSinceEpoch = (currentDate - new Date(currentDate.getFullYear(), 0, 1)) / (60 * 1000);
//console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);

//7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.

//ANS #7:
//var currentDate = new Date();
//var currentHour = currentDate.getHours();
//if (currentHour < 12) {
//    alert("It's AM");
//} else {
//    alert("It's PM");
//}

//8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.

//ANS #8:
//var currentDate = new Date(2021, 0, 1);
//currentDate.setUTCDate(0);
//var laterDate = currentDate;
//console.log("The value of laterDate:", laterDate);

//9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
//Note: 1st Ramadan was on June 18, 2015

//ANS #9:
//var ramadanStartDate = new Date(2015, 5, 18); // Note that months are 0-based, so 5 represents June
//var currentDate = new Date();
//var timeDifference = currentDate - ramadanStartDate;
//var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
//alert("Number of days passed since 1st Ramadan 2015: " + daysPassed);

//10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

//ANS #10:
//var referenceDate = new Date("2023-01-01"); // Use the desired reference date in "YYYY-MM-DD" format
//var beginningOf2015 = new Date("2015-01-01");
//var timeDifference = beginningOf2015 - referenceDate;
//var secondsElapsed = Math.floor(timeDifference / 1000);
//document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);

//11. Create a Date object for the current date and time.Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.

//ANS #11:
//var currentDate = new Date();
//var currentHour = currentDate.getHours();
//currentDate.setHours(currentHour + 1);
//document.write("Current Date and Time: " + currentDate);

//12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

//ANS #12:
//var currentDate = new Date();
//currentDate.setFullYear(currentDate.getFullYear() - 100);
//alert("Date reset to 100 years back: " + currentDate);

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser.

//ANS #13:
//var age = prompt("Please enter your age:");
//var currentYear = new Date().getFullYear();
//var birthYear = currentYear - parseInt(age);
//document.write("You were born in the year " + birthYear + ".");

//14. Write a program to generate your K-Electric bill in yourbrowser. All the amounts should be rounded off to 2 decimal places. Display the following fields:
//a. Customer Name
//b. Current Month
//c. Number of units
//d. Charges per unit
//e. Net Amount Payable (within Due Date)
//f. Late Payment Surcharge
//g. Gross Amount Payable (after Due Date) Where,
//Net Amount Payable (within Due Date) = Number of units * Charges per unit
//& Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

//ANS #14:
//var customerName = prompt("Enter Customer Name:");
//var currentMonth = prompt("Enter Current Month:");
//var numberOfUnits = parseFloat(prompt("Enter Number of Units:"));
//var chargesPerUnit = parseFloat(prompt("Enter Charges per Unit:"));
//var dueDate = prompt("Enter Due Date (YYYY-MM-DD):");
//var latePaymentSurchargeRate = parseFloat(prompt("Enter Late Payment Surcharge Rate (%):"));

//var netAmountPayable = numberOfUnits * chargesPerUnit;

//var currentDate = new Date();
//var dueDateObject = new Date(dueDate);

//if (currentDate > dueDateObject) {
//    var daysLate = Math.floor((currentDate - dueDateObject) / (1000 * 60 * 60 * 24));
//    var latePaymentSurcharge = (latePaymentSurchargeRate / 100) * netAmountPayable;
//} else {
//    var daysLate = 0;
//    var latePaymentSurcharge = 0;
//}

//var grossAmountPayable = netAmountPayable + latePaymentSurcharge;

//document.write("<h1>K-Electric Bill</h1>");
//document.write("<p>Customer Name: " + customerName + "</p>");
//document.write("<p>Current Month: " + currentMonth + "</p>");
//document.write("<p>Number of Units: " + numberOfUnits.toFixed(2) + "</p>");
//document.write("<p>Charges per Unit: $" + chargesPerUnit.toFixed(2) + "</p>");
//document.write("<p>Net Amount Payable (within Due Date): $" + netAmountPayable.toFixed(2) + "</p>");
//document.write("<p>Late Payment Surcharge: $" + latePaymentSurcharge.toFixed(2) + " (for " + daysLate + " days late)</p>");
//document.write("<p>Gross Amount Payable (after Due Date): $" + grossAmountPayable.toFixed(2) + "</p>");
