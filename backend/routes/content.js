import express from 'express';
import { data } from '../data.js';
import { requireAuth } from '../middleware/auth.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data.js');

const router = express.Router();

const saveToFile = () => {
  const content = `export let data = ${JSON.stringify(data, null, 2)};`;
  fs.writeFileSync(dataPath, content, 'utf8');
};

router.get('/all', (req, res) => {
  res.json(data);
});

router.put('/navigation', requireAuth, (req, res) => {
  data.navigationMenu = req.body;
  saveToFile();
  res.json({ success: true, data: data.navigationMenu });
});

router.put('/categories', requireAuth, (req, res) => {
  data.tourismCategories = req.body;
  saveToFile();
  res.json({ success: true, data: data.tourismCategories });
});

router.put('/what-we-do', requireAuth, (req, res) => {
  data.whatWeDoCards = req.body;
  saveToFile();
  res.json({ success: true, data: data.whatWeDoCards });
});

router.put('/board-members', requireAuth, (req, res) => {
  data.boardMembers = req.body;
  saveToFile();
  res.json({ success: true, data: data.boardMembers });
});

router.put('/education', requireAuth, (req, res) => {
  data.educationData = req.body;
  saveToFile();
  res.json({ success: true, data: data.educationData });
});

router.post('/media/events', requireAuth, (req, res) => {
  const newEvent = { ...req.body, id: Date.now() };
  data.mediaData.events.push(newEvent);
  saveToFile();
  res.json({ success: true, data: newEvent });
});

router.put('/media/events/:id', requireAuth, (req, res) => {
  const index = data.mediaData.events.findIndex(e => e.id == req.params.id);
  if (index !== -1) {
    data.mediaData.events[index] = { ...data.mediaData.events[index], ...req.body };
    saveToFile();
    res.json({ success: true, data: data.mediaData.events[index] });
  } else {
    res.status(404).json({ success: false, message: 'Event not found' });
  }
});

router.delete('/media/events/:id', requireAuth, (req, res) => {
  data.mediaData.events = data.mediaData.events.filter(e => e.id != req.params.id);
  saveToFile();
  res.json({ success: true });
});

router.post('/media/articles', requireAuth, (req, res) => {
  const newArticle = { ...req.body, id: Date.now() };
  data.mediaData.articles.push(newArticle);
  saveToFile();
  res.json({ success: true, data: newArticle });
});

router.put('/media/articles/:id', requireAuth, (req, res) => {
  const index = data.mediaData.articles.findIndex(a => a.id == req.params.id);
  if (index !== -1) {
    data.mediaData.articles[index] = { ...data.mediaData.articles[index], ...req.body };
    saveToFile();
    res.json({ success: true, data: data.mediaData.articles[index] });
  } else {
    res.status(404).json({ success: false, message: 'Article not found' });
  }
});

router.delete('/media/articles/:id', requireAuth, (req, res) => {
  data.mediaData.articles = data.mediaData.articles.filter(a => a.id != req.params.id);
  saveToFile();
  res.json({ success: true });
});

export default router;
