const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const date = new Date();

monthNameEl.innerText = date.toLocaleString('en', {
  month: 'long'
});


dayNameEl.innerText = date.toLocaleString('en', {
  weekday: 'long'
});

dayNumEl.innerHTML = date.getDate();

yearEl.innerText = date.getFullYear();

