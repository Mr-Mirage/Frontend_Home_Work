// 1. Отправить fetch-запрос по ссылке https://jsonplaceholder.typicode.com/todos и из полученных данных отрисовать карточки задач.
// В карточке два параграфа - Title: , Status: . Если задача выполнена, то в статусе добавить done, если не выполнена - not done
// 2. Стилизовать карточки и контейнер - если задача выполнена покарсить ее в зеленый, если не выполнена - в серый

fetch('https://jsonplaceholder.typicode.com/todos')     // отправляем запрос на сервер, получаем в ответ промис
.then(res => res.json())                                // преобразуем полученные данные в json
.then(json => usersTasks(json));                        // полученный по запросу json выводим в консоль

const usersContainer = document.querySelector('.users_container');

const usersTasks = arr => {
    arr.forEach(el => {
        const cardElem = document.createElement('div');
        const titleElem = document.createElement('p');
        const statusElem = document.createElement('p');

        titleElem.innerText = `Title: ${el.title}`;
        statusElem.innerText = `Status: ${el.completed === true ? 'done' : 'not done'}`;

        cardElem.classList.add('users_card');

        cardElem.style.backgroundColor = el.completed === true ? 'green' : 'gray';

        cardElem.append(titleElem, statusElem);
        usersContainer.append(cardElem);
    })
}
