const express = require('express');
const expressApp = require('./express-app')
const {databaseConnection} = require('./database')
const errorHandler = require('./utils/errors')

const {PORT} = require('./config')

const StartServer = async () => {
    
     require('./database/postgres/db')

    const app = express();

    await expressApp(app);

    // Catch all errors format and report to error logger
    errorHandler(app)

    app.listen(PORT, () => {
       console.log('Server: is listening on Port '+PORT);
    })
}

StartServer()