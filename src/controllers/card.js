const cardDao = require('../daos/card');

const createCard = async (req, res) => {
  const { name, imageURL, desc, lessonId } = req.body;
  const card = await cardDao.createCard({ name, imageURL, desc, lessonId });
  return res.send({ status: 1, result: { card } });
};

const getCards = async (req, res) => {
  const searchParams = req.query;
  const cards = await cardDao.getCards(searchParams);
  return res.send({ status: 1, result: { cards } });
};

const getCard = async (req, res) => {
  const { id } = req.params;
  const card = await cardDao.getCard(id);
  return res.send({ status: 1, reslut: { card } });
};

const updateCard = async (req, res) => {
  const { id } = req.params;
  const updateInfo = req.body;
  const card = await cardDao.updateCard(id, updateInfo);
  return res.send({ status: 1, result: { card } });
};

module.exports = { createCard, getCards, getCard, updateCard };
