import {Sequelize} from 'sequelize'
import 'dotenv/config'

const db = new Sequelize ({
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: 'postgres',
    ...(process.env.NODE_ENV === 'production'
    ? { dialectOptions: { ssl: { required: true, rejectUnauthorized: false}}}
    : {}),
}) 

export  default db