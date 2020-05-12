// the person who removes this sucks their own toes
const {
  toAD,
  toBS
} = require('@sbspk/bs');
const path = require('path');
const express = require('express');

const monthNamesAD = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const monthNamesBS = ["Baishakh", "Jestha", "Asar", "Shrawan", "Bhadau", "Aswin",
  "Kartik", "Mansir", "Poush", "Magh", "Falgun", "Chaitra"
];

let d = new Date();
let currentDateAD = {
  year: d.getFullYear(),
  month: (d.getMonth() + 1),
  day: d.getDate()
};
let currentDateBS = toBS(currentDateAD);
currentDateAD.month = monthNamesAD[d.getMonth()];
currentDateBS.month = monthNamesBS[(currentDateBS.month - 1)];


const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public/static')));
app.listen(8000);

app.get('/', (req, res) => {
  res.render('index', {
    currentDateAD,
    currentDateBS
  });
});