// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи 
// пишем под комментарием.

// ```
// <p class="dropdown">Привет :)</p>
// <div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// Dropdown button
// </button>
// <div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
// <a class="dropdown-item" href="#">Action</a>
// <a class="dropdown-item" href="#">Another action</a>
// <a class="dropdown-item" href="#">Something else here</a>
// </div>
// </div>

// <script>
//     "use strict";
// []()
// []()
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", 
// необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownItem = document.querySelectorAll('.dropdown-item');
const a = document.querySelector('a');
dropdownItem.forEach(a => {
    a.classList.add('super-dropdown');
});
console.log(dropdownItem);


// []()
// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует 
// у этого элемента, либо добавить, если такого класса у элемента не было.

const button = document.querySelector('.btn');
button.classList.remove('btn-secondary');
console.log(button);


// []()
// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menu = document.querySelector('.menu');
menu.classList.remove('dropdown-menu');
console.log(menu);

// []()
// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`

const divDrop = document.querySelector('div.dropdown');
divDrop.insertAdjacentHTML('afterBegin', '<a href="#">link</a>')
console.log(divDrop);


// []()
// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const idRename = document.querySelector('#dropdownMenuButton');
dropdownMenuButton.id = 'superDropdown'
console.log(idRename);


// []()
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" 
// равный "dropdownMenuButton" используя dataset.

const aria = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
aria.dataset.dd = 3;
console.log(aria);

// []()
// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const remove = document.querySelector('.dropdown-toggle');
remove.removeAttribute('type')
console.log(remove);