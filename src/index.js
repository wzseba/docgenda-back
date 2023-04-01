import 'dotenv/config.js';
import app from "./app.js";
import {sequelize}  from "./database/database.js";

const {PORT} = process.env;

async function main(){
    try {
        await sequelize.sync({force: true});
        app.listen(3001);
        console.log('server on port 3001');
    } catch (error) {
        console.error('todo mal', error)
    }
}

main();