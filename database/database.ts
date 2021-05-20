import { Sequelize } from 'sequelize';


//produccion
const database = new Sequelize(
    'heroku_caf616ba1ae2085', //database
    'b1e7faacb53c5a', //user
    '91872644', //password
        {
            host: 'us-cdbr-east-03.cleardb.com', //host
            dialect: 'mysql'        }
    );


//desarrollo

export default database;