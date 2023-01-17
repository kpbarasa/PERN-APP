const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestDataSchema = new Schema({
    title: String
});

module.exports =  mongoose.model('test-data-repo', TestDataSchema);