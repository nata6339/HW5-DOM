let message = document.querySelector('.data');

let form = document.querySelector('.feed-form');

let name = document.querySelector('#name');

let surname = document.querySelector('#surname');


form.onsubmit = function (evt) {

    evt.preventDefault();

    message.textContent = name.value + ' ' + surname.value;
    localStorage.setItem('name', name.value);
    localStorage.setItem('surname', surname.value);


};

console.log(document.querySelector("input"));


