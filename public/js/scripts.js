// reload page if it's been open for longer than a day
window.addEventListener('focus', ()=> {
  const visibleDay = document.querySelector('.Calendar__ad').dataset.day;
  const currentDay = new Intl.DateTimeFormat('en-US', { timeZone: 'Asia/Kathmandu', day: 'numeric' }).format(new Date());
  if(currentDay !== visibleDay) window.location.reload(true);
});
