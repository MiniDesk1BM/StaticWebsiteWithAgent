const cars = [
  {
    slug: 'berline-premium',
    name: 'Berline Premium',
    shortDescription: 'Confort, performance et élégance pour tous vos trajets.',
    description:
      'Cette berline premium combine design moderne, finition soignée et technologies embarquées pour offrir une expérience de conduite haut de gamme.',
    price: '24 900 €',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    engine: 'Essence 1.6L Turbo',
    power: '165 ch',
    transmission: 'Automatique',
    mileage: '32 000 km',
    year: '2022',
    color: 'Gris métallisé',
    equipment: 'GPS, caméra de recul, sièges chauffants, régulateur de vitesse'
  },
  {
    slug: 'suv-familial',
    name: 'SUV Familial',
    shortDescription: 'Espace, sécurité et polyvalence pour toute la famille.',
    description:
      'Ce SUV familial offre un habitacle spacieux, une excellente sécurité et un confort idéal pour les longs trajets comme pour le quotidien.',
    price: '31 500 €',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    engine: 'Diesel 2.0L',
    power: '190 ch',
    transmission: 'Automatique',
    mileage: '21 500 km',
    year: '2023',
    color: 'Noir profond',
    equipment: 'Toit panoramique, aide au stationnement, écran tactile, coffre électrique'
  },
  {
    slug: 'citadine-moderne',
    name: 'Citadine Moderne',
    shortDescription: 'Compacte, économique et parfaite pour la ville.',
    description:
      'Pensée pour les environnements urbains, cette citadine moderne est agile, économique et agréable à conduire au quotidien.',
    price: '16 990 €',
    image:
      'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80',
    engine: 'Essence 1.0L',
    power: '95 ch',
    transmission: 'Manuelle',
    mileage: '18 700 km',
    year: '2021',
    color: 'Blanc nacré',
    equipment: 'Bluetooth, climatisation, radar arrière, aide au maintien dans la voie'
  }
];

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

function revealOnScroll() {
  document.querySelectorAll('.reveal').forEach((element) => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      element.classList.add('visible');
    }
  });
}

function createCarCard(car) {
  return `
    <article class="card reveal">
      <img src="${car.image}" alt="${car.name}" />
      <h3>${car.name}</h3>
      <p>${car.shortDescription}</p>
      <span class="price">À partir de ${car.price}</span>
      <a href="voiture-${car.slug}.html" class="btn card-btn">Voir le détail</a>
    </article>
  `;
}

function renderCatalogue() {
  const container = document.getElementById('catalogue-cards');
  if (!container) return;

  container.innerHTML = cars.map(createCarCard).join('');
  revealOnScroll();
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', () => {
  renderCatalogue();
  revealOnScroll();
});
