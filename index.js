const monthNameEl = document.getElementById('month-name');
const dayNameEl = document.getElementById('day-name');
const dayNumEl = document.getElementById('day-number');
const yearEl = document.getElementById('year');

const date = new Date();

monthNameEl.innerText = monthNameEl.innerText = date.toLocaleString('pt-BR', {
  month: 'long'
}).charAt(0).toUpperCase() + date.toLocaleString('pt-PT', {
  month: 'long'
}).slice(1);

dayNameEl.innerText = date.toLocaleString('pt-PT', {
  weekday: 'long'
}).charAt(0).toLocaleUpperCase() + date.toLocaleString('pt-PT', {
  weekday: 'long'
}).slice(1);

dayNumEl.innerHTML = date.getDate();

yearEl.innerText = date.getFullYear();

