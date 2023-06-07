const Card = require('../models/cards');

const createCard = async ({ name, imageURL, desc, lessonId }) => {
  const card = await Card.create({ name, imageURL, desc, lessonId });
  return card;
};

module.exports = { createCard };
