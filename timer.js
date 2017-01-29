'use strict';

let daysElement = document.getElementById('days');
let hoursElement = document.getElementById('hours');
let minutesElement = document.getElementById('minutes');
let secondsElement = document.getElementById('seconds');
let millisecondsElement = document.getElementById('milliseconds');


// Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
let deadlineTime = Date.UTC(2017, 0, 30, 13, 0, 0, 0);

let timeoutId = NaN;

/*
 * Добавляет 0 в начало строки
 */
const pad = (numVal) => String(Math.floor(numVal)).length < 2 ? '0' + numVal : numVal;

const printTime = () => {
    let time = deadlineTime - Date.now();

    if (time <= 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        millisecondsElement.textContent = '0';

        let href = document.getElementById('another_song_link');
        href.style.display = '';
        return;
    }

    // Количество дней
    daysElement.textContent = pad(Math.floor(time / (1000*3600*24)));
    time = time % (1000*3600*24);

    hoursElement.textContent = pad(Math.floor(time / (3600 * 1000)));
    time = time % (3600 * 1000);

    minutesElement.textContent = pad(Math.floor(time / (60 * 1000)));
    time = time % (60 * 1000);

    let secondsMilliSeconds = String(time / 1000).split('.');

    let seconds = pad(secondsMilliSeconds[0]);
    let milliseconds = secondsMilliSeconds[1] && secondsMilliSeconds[1] !== '' ? secondsMilliSeconds[1][0]
        : '0';

    secondsElement.textContent = seconds;
    millisecondsElement.textContent = milliseconds;

    timeoutId = setTimeout(printTime, 0);
};

printTime();