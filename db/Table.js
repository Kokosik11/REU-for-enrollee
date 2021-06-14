class Table {
    set insert(value) {
        this.table.insert = value;
    }

    set content(value) {
        this.table.content = value;
    }

    insertContent = () => {
        if(this.table.insert) {
            this.connection.query(this.table.insert, [this.table.content], (err, results) => {
                if(err) console.error(err);
                else console.log("Data has uploaded")
            })
        }
    }

    createTable = () => {
        if(this.table.query) {
            this.connection.query(this.table.query, (err, results) => {
                if(err) console.error(err);
                else console.log("Table has created");
            })
        }
    }

    constructor(connection, table) {
        this.connection = connection;
        this.table = table;
        this.createTable();
        this.insertContent();
    }
}

module.exports = Table;