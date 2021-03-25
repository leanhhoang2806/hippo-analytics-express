const { Client } = require('pg');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');

exports.createUser = async () => {
    const client = new Client({
        connectionString: 'postgres://localdev:vanmaibenem2829@host.docker.internal:5432/original'
    })
    const saltRounds = bcrypt.genSaltSync(10);
    const payload = {
        userId: uuidv4(),
        email: "bacon@gmail.com",
        password: bcrypt.hashSync("bacon", saltRounds),
        dateCreated: moment().format( 'YYYY-MM-DD  HH:mm:ss' )
    }

    await client.connect();
    client.query(`
    INSERT INTO public."Users" (UserId, Email, Password, DateCreated)
    VALUES ('${payload.userId}', '${payload.email}', '${payload.password}', '${payload.dateCreated}')
    `
    , (err, res) => {
        client.end()
        return res
    })
}