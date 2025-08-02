const colors = [
    { name: 'Turquoise', hex: '#1abc9c' },
    { name: 'Emerald', hex: '#2ecc71' },
    { name: 'Peter River', hex: '#3498db' },
    { name: 'Amethyst', hex: '#9b59b6' },
    { name: 'Wet Asphalt', hex: '#34495e' },
    { name: 'Green Sea', hex: '#16a085' },
    { name: 'Nephritis', hex: '#27ae60' },
    { name: 'Belize Hole', hex: '#2980b9' },
    { name: 'Wisteria', hex: '#8e44ad' },
    { name: 'Midnight Blue', hex: '#2c3e50' },
    { name: 'Sun Flower', hex: '#f1c40f' },
    { name: 'Carrot', hex: '#e67e22' },
    { name: 'Alizarin', hex: '#e74c3c' },
    { name: 'Clouds', hex: '#ecf0f1' },
    { name: 'Concrete', hex: '#95a5a6' },
    { name: 'Orange', hex: '#f39c12' },
    { name: 'Pumpkin', hex: '#d35400' },
    { name: 'Pomegranate', hex: '#c0392b' },
    { name: 'Silver', hex: '#bdc3c7' },
    { name: 'Asbestos', hex: '#7f8c8d' }
];

const colorBox = document.getElementById('color-box');
const colorNameSpan = document.getElementById('color-name');
const colorHexSpan = document.getElementById('color-hex');
const newColorBtn = document.getElementById('new-color-btn');

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function displayNewColor() {
    const color = getRandomColor();
    colorBox.style.backgroundColor = color.hex;
    colorNameSpan.textContent = color.name;
    colorHexSpan.textContent = color.hex;
}

newColorBtn.addEventListener('click', displayNewColor);

// İlk rengi sayfa yüklendiğinde göster
document.addEventListener('DOMContentLoaded', displayNewColor);