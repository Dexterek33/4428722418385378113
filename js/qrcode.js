let qrDiv = document.getElementById("qrcode");
let countdownElement = document.getElementById("countdown");
let timerElement = document.getElementById("timer");
let countdown = 30;
let qr;
let interval;

document.getElementById("qr-btn").addEventListener("click", function () {
    generateQRCode();
    timerElement.style.display = "block"; // Pokazuje licznik
    startCountdown();
});

function generateQRCode() {
    let timestamp = Date.now();
    let userData = {
        imie: "SZYMON",
        nazwisko: "KRZYSZTOWIAK",
        pesel: "07220232135",
        czas: timestamp
    };

    let encodedData = btoa(JSON.stringify(userData)); // Kodowanie Base64
    qrDiv.innerHTML = ""; // Czyści poprzedni QR
    qr = new QRCode(qrDiv, {
        text: encodedData,
        width: 200,
        height: 200
    });

    countdown = 30;
}

function startCountdown() {
    clearInterval(interval); // Resetuje poprzedni licznik
    interval = setInterval(() => {
        countdown--;
        countdownElement.innerText = countdown;

        if (countdown <= 0) {
            generateQRCode();
        }
    }, 1000);
}