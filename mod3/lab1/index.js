"use strict";
function loadCars() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.json', true);
    xhr.onload = function () {
        if (xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            console.log('Данные загружены:', data);
        }
        else {
            console.error('Ошибка ' + xhr.status + ': ' + xhr.statusText);
        }
    };
    xhr.send();
}
document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('loadButton');
    if (button) {
        button.addEventListener('click', loadCars);
    }
});
