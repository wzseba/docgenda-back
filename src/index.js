import 'dotenv/config.js';
import app from "./app.js";
import {sequelize}  from "./database/database.js";

const {PORT} = process.env;

async function main(){
    try {
        await sequelize.sync({force: true});
        app.listen(`${PORT}`);
        console.log(`server on port ${PORT}`);
    } catch (error) {
        console.error('todo mal', error)
    }
}

main();