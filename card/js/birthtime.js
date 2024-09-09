document.addEventListener('DOMContentLoaded', function() {
    // 🌈 Function to calculate years, months, days, hours, and minutes passed since the given date
    function timePassed(sinceDate) {
        const currentDate = new Date(); // Get the current date
        const givenDate = new Date(sinceDate); // Convert the given date string to a Date object

        // Calculate the difference in time
        const timeDifference = currentDate - givenDate;

        // Convert time difference to days, hours, minutes, and seconds
        const millisecondsInMinute = 60 * 1000;
        const millisecondsInHour = 60 * 60 * 1000;
        const millisecondsInDay = 24 * 60 * 60 * 1000;
        
        const totalMinutesPassed = Math.floor(timeDifference / millisecondsInMinute);
        const totalDaysPassed = Math.floor(timeDifference / millisecondsInDay);
        const totalHoursPassed = Math.floor(timeDifference / millisecondsInHour) % 24;
        const minutesPassed = totalMinutesPassed % 60;
        
        // Calculate years and months from the total days
        let yearsPassed = Math.floor(totalDaysPassed / 365);
        let monthsPassed = Math.floor((totalDaysPassed % 365) / 30);
        let daysPassed = totalDaysPassed % 30;

        // Return the time passed as an object
        return {
            years: yearsPassed,
            months: monthsPassed,
            days: daysPassed,
            hours: totalHoursPassed,
            minutes: minutesPassed
        };
    }

    // 🌈 Display the result in an element with the ID 'birthdayPassed'
    const birthday = '1997-04-09T21:05:00-03:00'; // ISO format with time and timezone offset
    const result = timePassed(birthday);

    document.getElementById('birthdayPassed').innerText = 
        `${result.years} years, ${result.months} months, ${result.days} days, ${result.hours} hours, and ${result.minutes} minutes`;
});

