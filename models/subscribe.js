const mongoose = require("mongoose");

const emailSchema = mongoose.Schema({
    emailsubscribe: {
    type: String,
    required: true,
  }
});

const emailsubscribe = mongoose.model("emailsubscribe", emailSchema);

module.exports = emailsubscribe;
