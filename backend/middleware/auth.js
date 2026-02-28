export const requireAuth = (req, res, next) => {
  if (req.session.isAuthenticated) {
    return next();
  }
  res.status(401).json({ success: false, message: 'Unauthorized' });
};
