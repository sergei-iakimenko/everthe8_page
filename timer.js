const timer = document.getElementById('timer');

// Date.UTC(year, month[, day[, hour[, minute[, second[, millisecond]]]]])
let deadlineTime = Date.UTC(2017, 1, 7, 0, 0, 0, 0);

let timeoutId = NaN;

/*
 * Добавляет 0 в начало строки
 */
const pad = (numVal) => String(Math.floor(numVal)).length < 2 ? '0' + numVal : numVal;

const printTime = () => {
    let time = deadlineTime - Date.now();;

    let timeStr = '';

    // Количество дней
    timeStr += pad(Math.floor(time / (1000*3600*24))) + ':';
    time = time % (1000*3600*24);

    timeStr += pad(Math.floor(time / (3600 * 1000))) + ':';
    time = time % (3600 * 1000);
    timeStr += pad(Math.floor(time / (60 * 1000))) + ':';
    time = time % (60 * 1000);
    timeStr += Number(pad(time / 1000)).toFixed(1);

    timer.value = timeStr;

    timeoutId = setTimeout(printTime, 0);
};

printTime();