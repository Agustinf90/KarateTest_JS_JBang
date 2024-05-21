const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

module.exports = {
    email: process.env.email,
    password: process.env.password,
    emailInvalid: process.env.emailInvalid,
    passwordInvalid: process.env.passwordInvalid,
    url: process.env.url,
    name: process.env.name,
    emailNew: process.env.emailNew,
    subject: process.env.subject,
    message: process.env.message
};