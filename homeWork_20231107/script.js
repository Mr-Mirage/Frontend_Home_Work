// Дан массив с объектами (данные о людях).
// На основе этого массива создаются карточки людей (фото,имя, фамилия, возраст) и добавляются в контейнер из html-документа
// Стилизовать карточку пользователя через css - добавить border, padding и разместить текст по центру карточки.
// Стилизовать peopleContainer через css - сделать флекс
// * К каждой карточке добавить кликабельную почтую При клике на почту открывается приложение по работе с почтой по умолчанию (https://www.w3schools.com/tags/att_a_href.asp)


const people = [
    {
    id: 1,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    age: 30,
    avatar: "https://reqres.in/img/faces/8-image.jpg"
    },
    {
    id: 2,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    age: 25,
    avatar: "https://reqres.in/img/faces/7-image.jpg"
    },
    {
    id: 3,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    age: 41,
    avatar: "https://reqres.in/img/faces/9-image.jpg"
    }
  ];

  const peopleContainer = document.querySelector('.people_container');

  people.forEach(elem => {
    const cardElem = document.createElement('div');
    const firstNameElem = document.createElement('p');
    const lastNameElem = document.createElement('p');
    const ageElem = document.createElement('p');
    const avatarElem = document.createElement('img');
    const emailElem = document.createElement('a');

    firstNameElem.innerText = `Firstname: ${elem.first_name}`;
    lastNameElem.innerText = `Lastname: ${elem.last_name}`;
    ageElem.innerText = `Age: ${elem.age}`;
    avatarElem.src = elem.avatar;
    avatarElem.alt = `${elem.first_name} ${elem.last_name}`
    emailElem.innerText = `Email: ${elem.email}`; // для отображения емайла
    emailElem.href = `mailto: ${elem.email}`;  // при клике открывается приложение по работе с почтой
    
    cardElem.classList.add('people_card');


    cardElem.append(avatarElem, firstNameElem, lastNameElem, ageElem, emailElem);
    peopleContainer.append(cardElem);

  })