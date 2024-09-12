<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Встановіть отримані дані
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $candle = $_POST['candle'];

    // Встановіть адресу отримувача
    $to = "stanislavbobrivskyi@gmail.com";
    $subject = "Нове замовлення з вашого сайту";
    
    // Сформуйте текст повідомлення
    $message = "Ім'я: $name\n";
    $message .= "Email: $email\n";
    $message .= "Телефон: $phone\n";
    $message .= "Вибрана свічка: $candle\n";

    // Встановіть заголовки
    $headers = "From: no-reply@yourdomain.com\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Надішліть електронний лист
    if (mail($to, $subject, $message, $headers)) {
        // Відповідь, якщо лист надіслано
        echo "<script>
                alert('Ваше замовлення було надіслано успішно.');
                window.location.href = '/'; // Повернути на головну сторінку
              </script>";
    } else {
        // Відповідь, якщо сталася помилка
        echo "<script>
                alert('Сталася помилка при надсиланні замовлення. Спробуйте ще раз.');
                window.location.href = '/'; // Повернути на головну сторінку
              </script>";
    }
}
?>