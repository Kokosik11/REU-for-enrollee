const Requests = {
    query: `create table if not exists requests(
            id int primary key auto_increment,
            name varchar(255) not null,
            phone varchar(255) not null,
            email varchar(255) not null,
            categoryID int not null
            )`
}

module.exports = Requests;