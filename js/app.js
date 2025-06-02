// ShoreSquad App JS
// Features: Map, Weather, Crew Management (basic stubs)

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

  // Weather tracker (stub)
  const weatherDiv = document.getElementById('weather');
  weatherDiv.textContent = 'Weather info coming soon!';

  // Map (stub)
  const mapDiv = document.getElementById('map');
  mapDiv.textContent = 'Map loading soon!';
});
