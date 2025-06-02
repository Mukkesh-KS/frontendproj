let timerDisplay = document.getElementById("timerDisplay");
let seconds = 0;
let interval = null;

// Function to format time
function formatTime(seconds) {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    return (
        (hrs < 10 ? "0" + hrs : hrs) + " : " +
        (mins < 10 ? "0" + mins : mins) + " : " +
        (secs < 10 ? "0" + secs : secs)
    );
}

// Start the stopwatch
function start() {
    if (interval) return; // Prevent multiple intervals
    interval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = formatTime(seconds);
    }, 1000);
}

// Stop the stopwatch
function stop() {
    clearInterval(interval);
    interval = null;
}

// Reset the stopwatch
function reset() {
    stop();
    seconds = 0;
    timerDisplay.textContent = "00 : 00 : 00";
}

// Attach event listeners to buttons
document.getElementById("start").addEventListener("click", start);
document.getElementById("stop").addEventListener("click", stop);
document.getElementById("reset").addEventListener("click", reset);
