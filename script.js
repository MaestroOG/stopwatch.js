let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateStopwatch, 1000);
        document.getElementById('startBtn').textContent = 'Pause';
    } else {
        isRunning = false;
        clearInterval(timer);
        document.getElementById('startBtn').textContent = 'Resume';
    }
}

function stopStopwatch() {
    isRunning = false;
    clearInterval(timer);
    document.getElementById('startBtn').textContent = 'Start';
    resetStopwatch();
}

function updateStopwatch() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }

    const display = document.getElementById('display');
    display.textContent = formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function resetStopwatch() {
    seconds = 0;
    minutes = 0;
    hours = 0;
    const display = document.getElementById('display');
    display.textContent = '00:00:00';
}
