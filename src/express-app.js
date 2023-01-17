const express = require('express');
const {MainApi} = require('./api')

module.exports = async(app) => {
    app.use(express.json({ limit: '1mb'}));
    app.use(express.urlencoded({ extended: true, limit: '1mb'}));

    //api
    MainApi(app);
}