document.addEventListener('DOMContentLoaded', function() {
    // 🌈 Function to calculate precise years, months, days, hours, and minutes passed
    function timePassed(sinceDate) {
        const currentDate = new Date(); // Get the current date
        const givenDate = new Date(sinceDate); // Convert the given date string to a Date object

        // Calculate the difference in components (years, months, days, hours, minutes)
        let yearsPassed = currentDate.getFullYear() - givenDate.getFullYear();
        let monthsPassed = currentDate.getMonth() - givenDate.getMonth();
        let daysPassed = currentDate.getDate() - givenDate.getDate();
        let hoursPassed = currentDate.getHours() - givenDate.getHours();
        let minutesPassed = currentDate.getMinutes() - givenDate.getMinutes();

        // Adjust the calculation if the current day is less than the birth day
        if (daysPassed < 0) {
            monthsPassed--;
            const previousMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
            daysPassed += previousMonth; // Add days from the previous month
        }

        // Adjust for negative months
        if (monthsPassed < 0) {
            yearsPassed--;
            monthsPassed += 12; // Wrap around the months
        }

        // Adjust if hours or minutes are negative
        if (hoursPassed < 0) {
            daysPassed--;
            hoursPassed += 24; // Wrap around the hours
        }
        if (minutesPassed < 0) {
            hoursPassed--;
            minutesPassed += 60; // Wrap around the minutes
        }

        // Return the time passed as an object
        return {
            years: yearsPassed,
            months: monthsPassed,
            days: daysPassed,
            hours: hoursPassed,
            minutes: minutesPassed
        };
    }

    // 🌈 Display the result in an element with the ID 'birthdayPassed'
    const birthday = '1997-04-09T21:05:00-03:00'; // Date and time of birth in ISO format
    const result = timePassed(birthday);

    document.getElementById('birthdayPassed').innerText = 
        `${result.years} years, ${result.months} months, ${result.days} days, ${result.hours} hours, and ${result.minutes} minutes`;
});

