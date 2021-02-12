// express middleware to check that user.level > 1

const atLeastLevelOne = (req, res, next) =>
{
  // TODO: verify user.level >= 1
  next();
}

module.exports = atLeastLevelOne;
