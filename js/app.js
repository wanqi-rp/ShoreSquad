// ShoreSquad App JS
// Features: Map, Weather, Crew Management, Signup (basic stubs)

document.addEventListener('DOMContentLoaded', () => {
  // Crew management
  const crewList = document.getElementById('crew-list');
  const addCrewBtn = document.getElementById('add-crew');

  addCrewBtn.addEventListener('click', () => {
    const name = prompt('Enter crew member name:');
    if (name) {
      const li = document.createElement('li');
      li.textContent = name;
      crewList.appendChild(li);
    }
  });

  // Weather tracker (NEA API integration)
  const weatherDiv = document.getElementById('weather');
  weatherDiv.innerHTML = '<em>Loading 4-day weather forecast...</em>';

  fetch('https://api.data.gov.sg/v1/environment/4-day-weather-forecast')
    .then(response => response.json())
    .then(data => {
      const items = data.items && data.items[0];
      if (!items || !items.forecasts) {
        weatherDiv.innerHTML = '<span style="color:red">Weather data unavailable.</span>';
        return;
      }
      const forecasts = items.forecasts;
      let html = '<div class="weather-forecast-grid">';
      forecasts.forEach(day => {
        html += `
          <div class="weather-forecast-day">
            <div class="weather-date">${day.date}</div>
            <div class="weather-forecast">${day.forecast}</div>
            <div class="weather-temp">${day.temperature.low}&deg;C - ${day.temperature.high}&deg;C</div>
          </div>
        `;
      });
      html += '</div>';
      weatherDiv.innerHTML = html;
    })
    .catch(() => {
      weatherDiv.innerHTML = '<span style="color:red">Failed to load weather data.</span>';
    });

  // Signup form
  const signupForm = document.getElementById('signup-form');
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    alert(`Welcome, ${username}! Account created for ${email}.`);
    signupForm.reset();
  });

  // Event signup form
  const eventSignupForm = document.getElementById('event-signup-form');
  eventSignupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const eventSelect = document.getElementById('event-select');
    alert(`Signed up for: ${eventSelect.options[eventSelect.selectedIndex].text}`);
    eventSignupForm.reset();
  });
});
