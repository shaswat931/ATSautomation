// Carousel JavaScript
$(document).ready(function(){
    var images = ['industrial sectional doors images.jpg', 'Highspeeddoorsitjsep15b.gif', 'motorized rolling shutters.jpg'];
    var currentImage = 0;

    function showNextImage() {
        $('.carousel-item').removeClass('active');
        $('.carousel-item').eq(currentImage).addClass('active');
        currentImage = (currentImage + 1) % images.length;
    }

    setInterval(showNextImage, 3000); // 3000 milliseconds = 3 seconds
});

// Logo Animation
$(document).ready(function(){
    $('.logo img').hover(function(){
        $(this).css('transform', 'rotate(360deg)');
    }, function(){
        $(this).css('transform', 'rotate(0deg)');
    });
});

// Image Transition
$(document).ready(function(){
    $('.hero-section img').hover(function(){
        $(this).css('transform', 'scale(1.1)');
    }, function(){
        $(this).css('transform', 'scale(1)');
    });
});

// Testimonial Transition
$(document).ready(function(){
    $('.testimonial-item').hover(function(){
        $(this).css('transform', 'scale(1.1)');
    }, function(){
        $(this).css('transform', 'scale(1)');
    });
});

// Menu Toggle
$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu').toggle();
    });
});
function initMap() {
    // The location coordinates
    const location = { lat: 19.425, lng: 72.842 };

    // Create the map centered at the location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: location
    });

    // Add a marker at the location
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// Load the Google Maps script with your API key
const script = document.createElement('script');
script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
script.defer = true;
document.head.appendChild(script);
// script.js
function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active'); // Toggle the active class to show/hide the menu
}

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', function(event) {
    const menu = document.querySelector('nav ul');
    const toggle = document.querySelector('.menu-toggle');
    if (!menu.contains(event.target) && !toggle.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active'); // Close the menu
    }
});

// Product data for dynamic loading
const products = {
    industrial: {
        title: "Industrial Sectional Doors",
        description: "Industrial sectional doors are designed for heavy-duty industrial applications, offering excellent durability and functionality.",
        features: [
            "Durability: Made from high-quality steel or aluminum for excellent durability and resistance.",
            "Insulation: Thermal insulation helps maintain temperature control in industrial spaces.",
            "Safety Mechanisms: Equipped with anti-fall devices, finger protection, and emergency release systems.",
            "Customizable Sizes: Available in various sizes and customizable to fit specific needs.",
            "Smooth Operation: Comes with motorized or manual control options."
        ],
        operation: "These doors move vertically upwards, with panels folding one over the other. They can be motorized or manually operated, and insulated models help control internal temperatures by reducing heat loss."
    },
    highspeed: {
        title: "High-Speed Doors",
        description: "High-speed doors are ideal for environments requiring quick access and controlled air exchange.",
        features: [
            "Fast Opening and Closing: Enhances operational efficiency by reducing waiting time.",
            "Energy Efficiency: Minimizes air exchange, maintaining internal climate control.",
            "Durable Fabric Material: Heavy-duty fabric withstands frequent use.",
            "Safety Features: Sensors detect obstructions, preventing accidental closures.",
            "Low Maintenance: Designed for frequent use with minimal upkeep."
        ],
        operation: "High-speed doors operate with motorized systems, allowing them to open and close quickly. Sensors or switches control the traffic flow, making them ideal for high-activity areas."
    },
    rolling: {
        title: "Motorized Rolling Shutters",
        description: "Motorized rolling shutters provide easy access control and high security for various applications.",
        features: [
            "Automatic Operation: Operates with remote control, push button, or app integration.",
            "Weather Resistance: Built to withstand extreme weather conditions.",
            "High-Security Design: Offers protection against unauthorized access.",
            "Noise Reduction: Helps reduce noise, creating a quieter environment.",
            "Space Saving: Rolls up compactly, allowing maximum space utilization."
        ],
        operation: "The motor controls the rolling mechanism to lift or lower the shutter, providing secure and convenient access for areas requiring frequent control."
    }
};

// Function to load product details dynamically
function loadProduct(productKey) {
    const product = products[productKey];
    const container = document.getElementById("product-container");

    container.innerHTML = `
        <h1>${product.title}</h1>
        <p>${product.description}</p>
        <h2>Features</h2>
        <ul>
            ${product.features.map(feature => `<li><strong>${feature.split(':')[0]}:</strong> ${feature.split(':')[1]}</li>`).join('')}
        </ul>
        <h2>How It Works</h2>
        <p>${product.operation}</p>
    `;
}
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('show');
}
function toggleMenu() {
    const menu = document.getElementById('menu');
    const navbar = document.getElementById('navbar');
    menu.classList.toggle('active');
    navbar.classList.toggle('active');
}

// Close the menu when a link is clicked
document.querySelectorAll('.menu a').forEach(function(element) {
    element.addEventListener('click', function() {
        document.getElementById('menu').classList.remove('active');
        document.getElementById('navbar').classList.remove('active');
    });
});
// Ensure the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle'); // Hamburger menu button
    const menu = document.querySelector('.menu'); // Menu container

    // Toggle the menu visibility when the button is clicked
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active'); // Add or remove the 'active' class
    });
});
document.getElementById("toggle-button").addEventListener("click", function() {
    const nav = document.getElementById("navbar");
    nav.classList.toggle("active");
});
