const main = document.querySelector('main');
const imageTitle = document.getElementById('imageTitle');
const photos = [
    'https://images.pexels.com/photos/516541/pexels-photo-516541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://landedtravel.com/wp-content/uploads/2020/02/Antarctica-Gold-2-Landed-Travel-Private-Travel.jpg',
    'https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1933319/pexels-photo-1933319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3878104/pexels-photo-3878104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/6129829/pexels-photo-6129829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1108650/pexels-photo-1108650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
];

const titles = [
    "Guardians of the Jungle",
    "Golden Hour Serenity",
    "Antarctic Gold Majesty",
    "Rustic Living Radiance",
    "Morning Dew Embraces Nature's Canvas",
    "Majestic Mountain Tranquility",
    "Whispers in Golden Fields",
    "Graceful Grey-Crowned Crane",
    "Open Sky Symphony"
];

let currentImageIndex = 0;
let autoSlideInterval;

function updateImageAndTitle() {
    main.style.opacity = 0;

    setTimeout(() => {
        main.style.backgroundImage = `url('${photos[currentImageIndex]}')`;
        imageTitle.textContent = titles[currentImageIndex];
        main.style.opacity = 1;
    }, 500);
}

function Next() {
    currentImageIndex = (currentImageIndex + 1) % photos.length;
    updateImageAndTitle();
}

function Back() {
    currentImageIndex = (currentImageIndex - 1 + photos.length) % photos.length;
    updateImageAndTitle();
}

function toggleAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    } else {
        autoSlideInterval = setInterval(() => {
            Next();
        }, 2000);
    }
}

updateImageAndTitle();
