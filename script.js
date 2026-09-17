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
  },
  {
    slug: 'coupe-sport',
    name: 'Coupé Sport',
    shortDescription: 'Lignes affûtées et sensations dynamiques à chaque accélération.',
    description:
      'Le coupé sport séduit par son style racé, son châssis précis et ses performances idéales pour les amateurs de conduite dynamique.',
    price: '38 900 €',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80',
    engine: 'Essence 2.0L Turbo',
    power: '245 ch',
    transmission: 'Automatique',
    mileage: '14 800 km',
    year: '2023',
    color: 'Rouge intense',
    equipment: 'Jantes sport, sièges baquet, navigation premium, caméra 360°'
  },
  {
    slug: 'break-executif',
    name: 'Break Exécutif',
    shortDescription: 'Grand coffre, confort premium et élégance pour la route.',
    description:
      'Ce break exécutif propose un excellent volume de chargement sans compromis sur le raffinement et le confort à bord.',
    price: '29 700 €',
    image:
      'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=1200&q=80',
    engine: 'Hybride 1.8L',
    power: '180 ch',
    transmission: 'Automatique',
    mileage: '27 400 km',
    year: '2022',
    color: 'Bleu nuit',
    equipment: 'Coffre motorisé, sellerie cuir, régulateur adaptatif, feux LED'
  },
  {
    slug: '4x4-aventure',
    name: '4x4 Aventure',
    shortDescription: 'Robuste, rassurant et prêt pour tous vos trajets hors des sentiers battus.',
    description:
      'Pensé pour l’évasion, ce 4x4 associe motricité, garde au sol élevée et équipements modernes pour voyager partout en confiance.',
    price: '42 300 €',
    image:
      'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80',
    engine: 'Diesel 2.2L',
    power: '210 ch',
    transmission: 'Automatique 4x4',
    mileage: '19 600 km',
    year: '2023',
    color: 'Vert olive',
    equipment: 'Transmission intégrale, modes terrain, attelage, écran tactile 12"'
  },
  {
    slug: 'electrique-urbaine',
    name: 'Électrique Urbaine',
    shortDescription: 'Silencieuse, moderne et idéale pour une mobilité propre au quotidien.',
    description:
      'Cette voiture électrique urbaine offre une conduite douce, un coût d’usage réduit et toutes les technologies nécessaires pour la ville moderne.',
    price: '27 400 €',
    image:
      'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80',
    engine: 'Moteur électrique',
    power: '136 ch',
    transmission: 'Automatique',
    mileage: '9 500 km',
    year: '2024',
    color: 'Bleu glacier',
    equipment: 'Recharge rapide, écran numérique, aides à la conduite, connectivité smartphone'
  }
];

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

if (menuToggle && navLinks) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

function updateNavbarOnScroll() {
  if (!navbar) return;
  navbar.classList.toggle('scrolled', window.scrollY > 10);
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

function getVisibleCards() {
  if (window.innerWidth <= 640) return 1;
  if (window.innerWidth <= 900) return 2;
  return 3;
}

function setupCarousel() {
  const track = document.getElementById('catalogue-cards');
  const prevBtn = document.querySelector('.carousel-btn-prev');
  const nextBtn = document.querySelector('.carousel-btn-next');
  const dotsContainer = document.getElementById('carousel-dots');

  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  let currentIndex = 0;
  let visibleCards = getVisibleCards();
  let totalPages = Math.max(1, cars.length - visibleCards + 1);

  function renderDots() {
    dotsContainer.innerHTML = Array.from({ length: totalPages }, (_, index) => `
      <button class="carousel-dot ${index === currentIndex ? 'active' : ''}" data-index="${index}" aria-label="Aller au groupe ${index + 1}"></button>
    `).join('');

    dotsContainer.querySelectorAll('.carousel-dot').forEach((dot) => {
      dot.addEventListener('click', () => {
        currentIndex = Number(dot.dataset.index);
        updateCarousel();
      });
    });
  }

  function updateCarousel() {
    const firstCard = track.querySelector('.card');
    if (!firstCard) return;

    const gap = 24;
    const offset = currentIndex * (firstCard.offsetWidth + gap);
    track.style.transform = `translateX(-${offset}px)`;

    dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index === currentIndex);
    });
  }

  function recalculateCarousel() {
    visibleCards = getVisibleCards();
    totalPages = Math.max(1, cars.length - visibleCards + 1);
    if (currentIndex > totalPages - 1) {
      currentIndex = totalPages - 1;
    }
    renderDots();
    updateCarousel();
  }

  prevBtn.addEventListener('click', () => {
    currentIndex = currentIndex === 0 ? totalPages - 1 : currentIndex - 1;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = currentIndex === totalPages - 1 ? 0 : currentIndex + 1;
    updateCarousel();
  });

  window.addEventListener('resize', recalculateCarousel);
  renderDots();
  updateCarousel();
}

function renderCatalogue() {
  const container = document.getElementById('catalogue-cards');
  if (!container) return;

  container.innerHTML = cars.map(createCarCard).join('');
  setupCarousel();
  revealOnScroll();
}

window.addEventListener('scroll', () => {
  updateNavbarOnScroll();
  revealOnScroll();
});

window.addEventListener('load', () => {
  updateNavbarOnScroll();
  renderCatalogue();
  revealOnScroll();
});
