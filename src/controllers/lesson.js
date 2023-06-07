const lessonDao = require('../daos/lesson');

const createLesson = async (req, res) => {
  const { title, imageURL } = req.body;
  const lesson = await lessonDao.createLesson({ title, imageURL });
  return res.send({ status: 1, result: { lesson } });
};

module.exports = { createLesson };
