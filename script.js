/*function openMessagePage() {
    window.location.href = "message.html";
  }*/
 const daysElement = document.getElementById('days');
const monthYearElement = document.getElementById('month-year');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentDate = new Date();

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  
  // // Set month and year in header
  // monthYearElement.textContent = ${date.toLocaleString('default', { month: 'long' })} ${year};
  daysElement.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  // blank boxes...
  for (let i = 0; i < firstDay; i++) {
    daysElement.appendChild(document.createElement('div'));
  }

  // month days...
  for (let day = 1; day <= totalDays; day++) {
    const dayElement = document.createElement('div');
    dayElement.textContent = day;

   
    if (
      day === new Date().getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
    ) {
      dayElement.classList.add('today');
    }

    daysElement.appendChild(dayElement);
  }
}

  prevButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

nextButton.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});


renderCalendar(currentDate);