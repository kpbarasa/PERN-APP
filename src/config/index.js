const dotEnv = require("dotenv");

dotEnv.config({ path: '.env' });

module.exports = {

    PORT: process.env.PORT,
    DB_URL: process.env.MONGODB_URI

}