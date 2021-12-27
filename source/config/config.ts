import dotenv from 'dotenv';
dotenv.config();

const SERVER_PORT = process.env.PORT || 3000;
const SERVER_HOSTNAME = process.env.HOSTNAME || 'localhost';

const server = {
    port: SERVER_PORT,
    host: SERVER_HOSTNAME
};

const config = {
    server: server
};

export default config;
