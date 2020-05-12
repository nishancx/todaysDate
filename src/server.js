// the person who removes this sucks their own toes
const path = require('path');
const express = require('express');
const { toBS } = require('@sbspk/bs');

const bsMonths = [
  "Baishakh", "Jestha", "Ashadh", "Shrawan", "Bhadra", "Ashwin",
  "Kartik", "Mangsir", "Poush", "Magh", "Falgun", "Chaitra"
];

const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  // get details in NPT
  const format = (options)=> {
    return new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kathmandu', ...options }).format(new Date());
  }

  const adDate = {
    year: Number.parseInt(format({ year: 'numeric'}), 10),
    month: Number.parseInt(format({ month: 'numeric'}), 10),
    day: Number.parseInt(format({ day: 'numeric'}), 10),
    monthName: format({ month: 'long'}),
    dayName: format({ weekday: 'short'}),
  };

  const bsDate = toBS(adDate);
  bsDate.monthName = bsMonths[bsDate.month - 1],

  res.render('index', { bsDate, adDate });
});

app.listen(8000);
