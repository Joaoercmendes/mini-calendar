const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const date = new Date();

monthNameEl.innerText = date.toLocaleString('pt-PT', {
  month: 'long'
}).charAt().toLocaleUpperCase() + date.toLocaleString('pt-PT', {
  month: 'long'
}).slice(1);

dayNameEl.innerText = date.toLocaleString('pt-pT', {
  weekday: 'long'
}).charAt(0).toLocaleUpperCase() + date.toLocaleString('pt-pT', {
  weekday: 'long'
}).slice(1);

dayNumEl.innerText = date.getDate();

yearEl.innerText = date.getFullYear();