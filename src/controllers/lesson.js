const lessonDao = require('../daos/lesson');

const createLesson = async (req, res) => {
  const { title, imageURL } = req.body;
  const lesson = await lessonDao.createLesson({ title, imageURL });
  return res.send({ status: 1, result: { lesson } });
};

const getAllLessons = async (req, res) => {
  const lessons = await lessonDao.getAllLessons();
  return res.send({ status: 1, result: { lessons } });
};

const getLesson = async (req, res) => {
  const { id } = req.params;
  const lesson = await lessonDao.getLesson(id);
  return res.send({ status: 1, result: { lesson } });
};

module.exports = { createLesson, getAllLessons, getLesson };
