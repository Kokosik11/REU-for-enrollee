const Category = {
    query: `create table if not exists category(
            id int primary key auto_increment,
            name varchar(255) not null UNIQUE
            )`,

    content: [
        ["Приёмная комиссия"],
        ["Заявка на обучение"],
        ["Заявка на стоимость обучения"],
        ["Заявка на подготовительный курс"],
        ["День открытых дверей"]
    ],

    insert: `INSERT INTO category(name) VALUES ?`
}

module.exports = Category;