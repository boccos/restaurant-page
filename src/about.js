import './about.css';

export default function loadAbout() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // clear previous content

  const mainContent = document.createElement('div');
  mainContent.className = 'page about'; // wrapper class for About page

  const title = document.createElement('div');
  title.id = 'title';
  title.textContent = 'About Us';

  const intro = document.createElement('div');
  intro.id = 'info';
  intro.textContent =
    'Kiku Sushi Bar has been serving authentic Japanese cuisine since 2010. Our chefs are trained in traditional techniques, focusing on quality, freshness, and artistry. Every dish is a blend of time-honored traditions and modern creativity.';

  const missionTitle = document.createElement('div');
  missionTitle.style.fontWeight = 'bold';
  missionTitle.textContent = 'Our Mission';

  const mission = document.createElement('div');
  mission.textContent =
    'We aim to deliver a memorable dining experience where guests can enjoy the harmony of flavors, textures, and presentation. Our dedication to freshness ensures that every bite is as authentic as possible.';

  const philosophyTitle = document.createElement('div');
  philosophyTitle.style.fontWeight = 'bold';
  philosophyTitle.textContent = 'Our Philosophy';

  const philosophy = document.createElement('div');
  philosophy.textContent =
    'At Kiku Sushi Bar, we believe that food is not just nourishment but an experience. Each plate reflects our respect for Japanese culinary traditions, careful ingredient selection, and attention to detail in every preparation. Our philosophy is to blend art, taste, and tradition in a way that delights every guest.';

  mainContent.append(title, intro, missionTitle, mission, philosophyTitle, philosophy);
  content.appendChild(mainContent);
}
