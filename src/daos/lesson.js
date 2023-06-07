const Lesson = require('../models/lessons');

const createLesson = async ({ title, imageURL }) => {
  const lesson = await Lesson.create({ title, imageURL });
  return lesson;
};

module.exports = { createLesson };
