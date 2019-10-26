const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const minionSchema = new Schema({
    name: String,
    code: String,
    updated_at: { type: Date, default: Date.now },
    created_at: { type: Date, default: Date.now },
    instructions: Array,
    run: Number,
    success: Number,
    fails: Number
});

module.exports = mongoose.model('minion', minionSchema);