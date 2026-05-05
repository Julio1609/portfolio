
// CARD DISPLAYS(SMALL DATABASE TO DISPLAY CARDS)
const popularGrid = document.getElementById("project-card");

const projects = [
    {
        name: "Trip to Dubai",
        image: "Pics/trip to dubai.webp",
        code:"https://gwosevo.com/case-study/nestle-ideal-trip-to-dubai-promo-2023/",
        read: true
    },
    {
        name: "SunnyDreams Hotel",
        image: "Screenshot 2025-11-10 at 05.10.56.png",
        live: "https://example.com/live1",
        code: "https://github.com/Julio1609/hotel-management"
    },
    {
        name: "My Travel Journal App",
        image: "Screenshot 2026-04-24 at 04.10.03.png",
        live: "https://example.com/live1",
        code: "https://github.com/Julio1609/Travel-Journal"
        
    },
    {
        name: "Intercontinental Sunny Plaza",
        image: "sunnyplaza.png",
        live: "https://example.com/live1",
        code: "https://github.com/project2"
        
    },
    {
        name: "Image Gallery",
        image: "Screenshot 2025-11-10 at 05.14.29.png",
        live: "https://example.com/live1",
        code: "https://github.com/Julio1609/image-gallery-"
    },

    {
        name: "Temperature App",
        image: "temperature.png",
        live: "https://example.com/live1",
        code: "https://github.com/Julio1609/Temperature-conversion"
        
    },
    {
        name: "Interest Compound App",
        image: "Screenshot 2025-11-13 at 03.06.52.png",
        live: "https://example.com/live1",
        code: "https://github.com/project4"
        
    },
    {
        name: "Stopwatch App",
        image: "Screenshot 2026-04-24 at 04.00.02.png",
        live: "https://example.com/live1",
        code: "https://github.com/project4"
        
    },
    {
        name: "Silly Story Generator",
        image: "Screenshot 2026-04-27 at 01.16.33.png",
        live: "https://example.com/live1",
        code: "https://github.com/Julio1609/silly-story-generator"
        
    }
];



projects.forEach(hotel => {
    const hotelCard = document.createElement("div");
    hotelCard.classList.add("project-card");

    hotelCard.innerHTML = `

    <img src="${hotel.image}" alt="${hotel.name}">
    <p class="text">${hotel.name}</p>
    <div class="button-group">
        ${
            hotel.read? `<a href="${hotel.code}" target="_blank" class="hover-btn">Read</a>` : `
                <a href="${hotel.live}" class="hover-btn">Live Demo</a>
                <a href="${hotel.code}" class="hover-btn">View Code</a>
              `
        }
    </div>

`;

    popularGrid.appendChild(hotelCard);
});


// NAVBAR FAETCH FROM ONE PAGE TO ANOTHER TO AVOID REPETITION
fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });





// NAVBAR FUNTIONALITIES
const cards = document.querySelectorAll(".card")
const cardRight = document.querySelectorAll(".card-right");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
}, 
{
    rootMargin: "10px",
    threshold: 0,
}

)

cards.forEach(card => {
    observer.observe(card)   
})

cardRight.forEach(cardRight => {
    observer.observe(cardRight)   
})


function toggleMenu() {
    const menu = document.querySelector('.nav-menu-left');
    const ham = document.querySelector('.hamburger');
    const nav = document.querySelector('.navigation')
    menu.classList.toggle('active');
    ham.classList.toggle('open');
    nav.classList.toggle('active')
  }

function show(){
    document.querySelector('.hamburger').classList.toggle('open')
    document.querySelector('.navigation').classList.toggle('active')
}