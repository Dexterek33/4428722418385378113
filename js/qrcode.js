<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>


// Funkcja generująca kod QR na podstawie tekstu
function generateQRCode(text) {
    qrDiv.innerHTML = ""; // Czyścimy poprzedni kod QR
    new QRCode(qrDiv, {
        text: text,  // Wstawiamy losowy tekst do wygenerowania kodu QR
        width: 200,  // Ustalamy szerokość kodu QR
        height: 200  // Ustalamy wysokość kodu QR
    });
}