const CustomError = require('../errors/CustomError');
const errorCodes = require('../errors/code');

const userDao = require('../daos/user');

const { generateRandomString } = require('../utils/random');
const { generateSalt, encryptPassword } = require('../utils/security');

const register = async ({ email, name, password }) => {
  let user = await userDao.findUser({ email });
  if (user) throw new CustomError(errorCodes.USER_EXISTS);

  const salt = generateSalt();
  const hashedPassword = password || generateRandomString(16);
  const encryptedPassword = await encryptPassword(hashedPassword, salt);

  user = await userDao.createUser({ email, name, password: encryptedPassword });
  return user;
};

module.exports = { register };
