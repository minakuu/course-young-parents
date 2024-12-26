function goBack() {
    window.history.back(); // Возвращает на предыдущую страницу
}

// script.js
// Функция для выделения текущего занятия
function highlightCurrentClass() {
    const timeSlots = document.querySelectorAll('.time-slot');
    const currentTime = new Date();
    const currentHour = String(currentTime.getHours()).padStart(2, '0');
    const currentMinute = String(currentTime.getMinutes()).padStart(2, '0');
    const currentTimeString = `${currentHour}:${currentMinute}`;

    timeSlots.forEach(slot => {
        const startTime = slot.getAttribute('data-start');
        const endTime = slot.getAttribute('data-end');

        // Проверка, находится ли текущее время между временем начала и окончания
        if (currentTimeString >= startTime && currentTimeString < endTime) {
            slot.classList.add('actives');
        } else {
            slot.classList.remove('actives');
        }
    });
}

// Запускаем функцию при загрузке страницы
window.onload = highlightCurrentClass;

// Также можно обновлять выделение каждую минуту
setInterval(highlightCurrentClass, 60000);




