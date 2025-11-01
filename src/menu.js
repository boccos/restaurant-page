import './menu.css';

export default function loadMenu() {
  const content = document.getElementById('content');
  content.innerHTML = ''; // clear previous content

  const mainContent = document.createElement('div');
  mainContent.className = 'page menu'; // wrapper class for Menu page

  const title = document.createElement('div');
  title.id = 'title';
  title.textContent = 'Our Menu';

  const description = document.createElement('div');
  description.id = 'info';
  description.textContent =
    'Our menu features a carefully curated selection of sushi, rolls, sashimi, and traditional Japanese dishes. Each item is crafted using the freshest locally-sourced fish and ingredients. We focus on artistry, flavor, and balance to provide a complete Japanese dining experience.';

  const menuSections = [
    {
      name: 'Nigiri & Sashimi',
      items: ['Salmon Nigiri', 'Tuna Sashimi', 'Yellowtail Nigiri', 'Eel Nigiri', 'Octopus Nigiri', 'Shrimp Sashimi'],
    },
    {
      name: 'Specialty Rolls',
      items: ['Dragon Roll', 'California Roll', 'Rainbow Roll', 'Spicy Tuna Roll', 'Volcano Roll', 'Tempura Roll', 'Salmon Avocado Roll'],
    },
    {
      name: 'Appetizers & Sides',
      items: ['Miso Soup', 'Edamame', 'Seaweed Salad', 'Gyoza', 'Tempura Vegetables', 'Takoyaki', 'Agedashi Tofu'],
    },
    {
      name: 'Desserts',
      items: ['Mochi Ice Cream', 'Green Tea Pudding', 'Tempura Banana', 'Dorayaki', 'Black Sesame Ice Cream'],
    },
    {
      name: 'Beverages',
      items: ['Green Tea', 'Sake', 'Plum Wine', 'Soft Drinks', 'Japanese Beer'],
    },
  ];

  mainContent.append(title, description);

  menuSections.forEach(section => {
    const sectionTitle = document.createElement('div');
    sectionTitle.style.fontWeight = 'bold';
    sectionTitle.style.marginTop = '20px';
    sectionTitle.textContent = section.name;

    const ul = document.createElement('ul');
    section.items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      ul.appendChild(li);
    });

    mainContent.append(sectionTitle, ul);
  });

  content.appendChild(mainContent);
}
