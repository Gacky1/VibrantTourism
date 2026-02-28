import express from 'express';

const router = express.Router();

const ADMIN_CREDENTIALS = {
  username: 'admin',
  password: 'admin@123'
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
    req.session.isAuthenticated = true;
    req.session.user = { username };
    return res.json({ success: true, message: 'Login successful' });
  }

  res.status(401).json({ success: false, message: 'Invalid credentials' });
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.json({ success: true, message: 'Logged out' });
});

router.get('/check', (req, res) => {
  if (req.session.isAuthenticated) {
    return res.json({ authenticated: true, user: req.session.user });
  }
  res.json({ authenticated: false });
});

export default router;
