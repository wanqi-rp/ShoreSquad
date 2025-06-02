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

  // Weather tracker (stub)
  const weatherDiv = document.getElementById('weather');
  weatherDiv.textContent = 'Weather info coming soon!';

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
