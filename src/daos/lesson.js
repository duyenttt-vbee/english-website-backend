const { ObjectId } = require('mongoose').Types;
const Lesson = require('../models/lessons');

const createLesson = async ({ title, imageURL }) => {
  const lesson = await Lesson.create({ title, imageURL });
  return lesson;
};

const getAllLessons = async () => {
  const lessons = await Lesson.find();
  return lessons;
};

const getLesson = async (condition) => {
  if (ObjectId.isValid(condition)) {
    const lesson = await Lesson.findById(condition);
    return lesson;
  }
  if (typeof condition === 'object' && condition !== null) {
    const lesson = await Lesson.findOne(condition);
    return lesson;
  }
  return null;
};

module.exports = { createLesson, getAllLessons, getLesson };
