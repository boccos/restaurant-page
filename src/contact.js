import './contact.css';

export default function loadContact() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // clear previous content

  const mainContent = document.createElement('div');
  mainContent.className = 'page contact'; // wrapper class for Contact page

  const title = document.createElement('div');
  title.id = 'title';
  title.textContent = 'Contact Us';

  const description = document.createElement('div');
  description.id = 'info';
  description.textContent =
    'We would love to hear from you! Whether you have questions, want to make a reservation, or just want to share your feedback, reach out to us through any of the following channels.';

  const contactDetails = document.createElement('div');
  contactDetails.style.marginTop = '20px';
  contactDetails.innerHTML = `
    <p><strong>Address:</strong> 123 Sushi Street</p>
    <p><strong>Phone:</strong> (604) 123-4567</p>
    <p><strong>Email:</strong> info@kikusushibar.ca</p>
    <p><strong>Hours:</strong> Mon-Sun 11am - 10pm</p>
  `;

  const mapTitle = document.createElement('div');
  mapTitle.style.fontWeight = 'bold';
  mapTitle.style.marginTop = '20px';
  mapTitle.textContent = 'Find Us on the Map';

  mainContent.append(title, description, contactDetails, mapTitle);
  content.appendChild(mainContent);
}