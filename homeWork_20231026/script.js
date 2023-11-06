const users = [
    {
        id: 1,
        first_name: 'Vasiliy',
        last_name: 'Petrowich',
        age: 50
    },
    {
        id: 2,
        first_name: 'Ivan',
        last_name: 'Sidorov',
        age: 20
    },
    {
        id: 5,
        first_name: 'Olga',
        last_name: 'Ivanova',
        age: 70
    },
    {
        id: 3,
        first_name: 'Inna',
        last_name: 'Hoscheva',
        age: 17
    },
    {
        id: 4,
        first_name: 'Anna',
        last_name: 'Petrova',
        age: 31
    }   
]

// 1. Сформировать массив из пользователей, чья фамилия содержит букву S (любой регистр) => [{}, {}]

// const users_with_s = users.filter(elem => elem.last_name.toLowerCase().includes('s'));
// console.log(users_with_s);


// 2. Сформировать массив из возрастов всех пользователей => [25, 15, 35, 57]

// const users_age = users.map(elem => elem.age);
// console.log(users_age);

// 3. Сформировать массив из возрастов всех пользователей, отсортированными по возрасту в порядке убывания => [57, 35, 25, 15]

// const users_age_sorted = users.map(elem => elem.age).sort((a,b) => b - a)
// console.log(users_age_sorted);

// 4. Сформировать массив из имен и фамилий пользователей => ['Oleg Ivanov', 'Anna Petrova', '...', '...']

// const users_names = users.map(elem => `${elem.first_name} ${elem.last_name}`);
// console.log(users_names);

// 5. Найти сумму возрастов всех пользователей, записать ее в переменную age_sum

// const age_sum = users.reduce((elem, user) => elem + user.age, 0)
// console.log(age_sum);