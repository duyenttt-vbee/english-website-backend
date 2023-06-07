const mongoose = require('mongoose');

const lessonSchema = mongoose.Schema({
  title: { type: String, require: true },
  imageURL: { type: String, require: true },
  numberCards: { type: Number, default: 0 },
});

module.exports = mongoose.model('Lesson', lessonSchema);
