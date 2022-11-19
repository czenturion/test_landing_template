const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    return (seconds) => {
        setInterval( () => {
            let sec = seconds % 60;
            let min = seconds / 60 % 60 | 0;
            let hours = seconds / 60 / 60 % 60 | 0;

            sec = ("0" + sec).slice(-2);
            min = ("0" + min).slice(-2);
            hours = ("0" + hours).slice(-2);

            if (seconds <= 0) {
                clearInterval(animateTimer);
                alert("Время закончилось");
            } else {
                timerEl.innerHTML = `${hours}:${min}:${sec}`;
            }
            --seconds;
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    e.target.value = e.target.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    if (seconds) animateTimer(seconds);

    inputEl.value = '';
});
