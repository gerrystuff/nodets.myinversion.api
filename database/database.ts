import { Sequelize } from 'sequelize';

const database = new Sequelize(
    'myinversion',
    'root',
    'Redcode010',
        {
            host: 'localhost',
            dialect: 'mysql'        }
    );

export default database;