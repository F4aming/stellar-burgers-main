const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Обслуживание статических файлов из папки dist
app.use(express.static(path.join(__dirname, 'dist')));

// Для всех маршрутов отдаем index.html (нужно для React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

