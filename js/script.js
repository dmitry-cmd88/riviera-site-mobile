const bookingForm = document.getElementById("bookingForm");
const formMessage = document.getElementById("formMessage");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const userName = document.getElementById("userName").value;
        const userPhone = document.getElementById("userPhone").value;
        const bookingDate = document.getElementById("bookingDate").value;
        const guestCount = document.getElementById("guestCount").value;
        const userMessage = document.getElementById("userMessage").value;

        if (userName && userPhone && bookingDate && guestCount) {
            formMessage.textContent = "Дякуємо! Ваша заявка на бронювання надіслана.";
            formMessage.classList.add("success-message");

            console.log("Ім’я:", userName);
            console.log("Телефон:", userPhone);
            console.log("Дата:", bookingDate);
            console.log("Кількість гостей:", guestCount);
            console.log("Повідомлення:", userMessage);

            bookingForm.reset();
        }
    });
}