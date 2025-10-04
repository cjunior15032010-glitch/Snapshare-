const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const chatRoutes = require('./routes/chat');
const photoRoutes = require('./routes/photo');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

mongoose.connect('mongodb://localhost:27017/snapshare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/auth', authRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/photo', photoRoutes);

app.get('/', (req, res) => {
  res.send('SnapShare API running');
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));