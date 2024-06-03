const countdownForm = document.getElementById("countdownForm");
const timerDisplay = document.getElementById("timer");

countdownForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const countdownDate = new Date(document.getElementById("date").value).getTime();
    startCountdown(countdownDate);
});

function startCountdown(endTime) {
    const countdownInterval = setInterval(updateTimer, 1000);

    function updateTimer() {
        const currentTime = new Date().getTime();
        const timeDifference = endTime - currentTime;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (timeDifference <= 0) {
            clearInterval(countdownInterval);
            timerDisplay.innerHTML = "Countdown Over!";
        }
    }
}
