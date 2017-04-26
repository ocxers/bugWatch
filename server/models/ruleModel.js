const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ruleSchema = new Schema({
  email: String,
  keyword: String,
});
const ruleModel = mongoose.model('Rule', ruleSchema);
module.exports = ruleModel;