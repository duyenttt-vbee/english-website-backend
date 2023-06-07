const cardDao = require('../daos/card');

const createCard = async (req, res) => {
  const { name, imageURL, desc, lessonId } = req.body;
  const card = await cardDao.createCard({ name, imageURL, desc, lessonId });
  return res.send({ status: 1, result: { card } });
};

module.exports = { createCard };
