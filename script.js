/******
const popularGrid = document.getElementById("popularGrid");
const clientGrid =document.getElementById("clientGrid");

const clients =[
    {
        clientName: "~ Julio",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, temporibus",
        img: "pics/images2.png"
    },
    {
        clientName: "~ Julio",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, temporibus",
        img: "pics/images3.png"
    },
    {
        clientName: "~ Julio",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, temporibus",
        img: "pics/images4.jpeg"
    },
]

clients.forEach (client =>{
    const clientCard = document.createElement("div");
    clientCard.classList.add("client_card");
    clientCard.innerHTML = `
    <div >
        <img src="${client.img}" alt="">
        <p>${client.msg}</p> <br>
        <p>${client.clientName} </p>
    </div>
    `;
    clientGrid.appendChild(clientCard);
})




const hotels = [
    {
        name: "Grand Palace",
        price: "£599.00",
        location: "London, United Kingdom",
        image:"Pics/Fingal Hotel.webp"
    },
    {
        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Rossendale Holiday Cottages & Spa.webp"
    },
    {
        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Grand Hotel Scarborough.webp"
    },
    {
        name: "Grand Palace",
        price: "£599.00",
        location: "London, United Kingdom",
        image:"Pics/Fingal Hotel.webp"
    },
    {
        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Rossendale Holiday Cottages & Spa.webp"
    },
    {
        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Grand Hotel Scarborough.webp"
    },
    {

        name: "Royal Resort",
        price: "£450.00",
        location: "Edinburgh, Scotland",
        image: "Pics/Grand Hotel Scarborough.webp"
    },
    
];




hotels.forEach(hotel => {
    const hotelCard = document.createElement("div");
    hotelCard.classList.add("popular_card");
    hotelCard.innerHTML = `
        <img class="displayed-img" src="${hotel.image}" alt="${hotel.name}">
        <div class="popular_content">
            <div class="popular_card_header">
                <h4>${hotel.name}</h4>
                <h4>${hotel.price}</h4>
            </div>
            <p>${hotel.location}</p>
        </div>
    `;
    popularGrid.appendChild(hotelCard);
});
   


const observer = new IntersectionObserver((entries)=>{
entries.foreach((entry)=>{
    if(entry.isIntersecting){
        console.log(entry.target)
    }

})
}, {})
const todoElements = document.querySelectorAll(".todo")
todoElements.forEach(el => observer.observe(el))
 */

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
/*
const toggleBtn = document.getElementById('navigation');
const navOverlay = document.getElementById('nav-overlay');
const hamburger = document.getElementById('Humburger');

toggleBtn.addEventListener('click', () =>{
    toggleBtn.classList.toggle('active');
    navOverlay.classList.toggle('active');
    hamburger.classList.toggle('open');

})
*/