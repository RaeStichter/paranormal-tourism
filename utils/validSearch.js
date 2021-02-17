const validSearch = (req, res, next) =>
{
  if (!req.query.location || !req.query.category || !req.query.type) return res.status(404).json({ message: 'You need query params' });
  return next();
}

module.exports = validSearch;
