// the person who removes this sucks their own toes
const path = require('path');
const express = require('express');
const { toBS } = require('@sbspk/bs');

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));

const bsMonths = [
  "Baishakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin",
  "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
];

// get formatted date in NPT
const date = (options) => {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Kathmandu',
    ...options
  }).format(new Date());
}

app.get('/', (req, res) => {
  const adDate = {
    year: Number.parseInt(date({ year: 'numeric' }), 10),
    month: Number.parseInt(date({ month: 'numeric' }), 10),
    day: Number.parseInt(date({ day: 'numeric' }), 10),
    monthName: date({ month: 'long' }),
    dayName: date({ weekday: 'short' }),
  };

  const bsDate = toBS(adDate);
  bsDate.monthName = bsMonths[bsDate.month - 1];

  res.render('index', { bsDate, adDate });
});

app.listen(8000);
