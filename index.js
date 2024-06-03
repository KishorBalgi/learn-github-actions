const moment = require("moment");
const Table = require("cli-table");

// Get the current month and year
const now = moment();
const month = now.month();
const year = now.year();

// Create a table for the calendar
const table = new Table({
  head: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
});

// Get the first day of the month
let firstDay = moment({ year, month, day: 1 }).day();

// Create an array to store the days of the month
let days = [];

// Fill in the days of the month
for (let i = 0; i < firstDay; i++) {
  days.push("");
}
for (let day = 1; day <= now.daysInMonth(); day++) {
  days.push(day);
}

// Fill the table rows with the days
while (days.length) {
  table.push(days.splice(0, 7));
}

// Print the calendar
console.log(table.toString());
