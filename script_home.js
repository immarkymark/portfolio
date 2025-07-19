

// Header Shadow
document.addEventListener('scroll', addShadow);

function addShadow() {
    if (window.scrollY > 0) {
        document.getElementById("nav_header").style.transition = "all .3s ease";
        document.getElementById("nav_header").style.boxShadow = "10px 0px 10px 0px rgba(0, 0, 0, .2)";
    }
    else {
        document.getElementById("nav_header").style.transition = "all .3s ease";
        document.getElementById("nav_header").style.boxShadow = "";
    }
}

// Make dropdown proper size
var dropdown_content = document.getElementById("dropdown_content");
var dropdownLabel_width = document.getElementById("dropdownLabel").offsetWidth;

function equateDropdown() {
    dropdownLabel_width = document.getElementById("dropdownLabel").offsetWidth;
    dropdown_content.style.transition = "none";
    dropdown_content.style.width = dropdownLabel_width + "px";
}

document.getElementById('dropdownLabel').addEventListener('mouseover', equateDropdown);



// Carousel for testimonies
const container = document.querySelector('.testimony_container');
const items = document.querySelector('.testimony_items');
const prevButton = document.querySelector('.testimony_prev');
const nextButton = document.querySelector('.testimony_next');

let counter = 0;
let itemWidth = container.offsetWidth;

// Function to update itemWidth dynamically based on container width
function updateItemWidth() {
    itemWidth = container.offsetWidth;
    items.style.transform = `translateX(-${itemWidth * counter}px)`;  
  }
  
// Update the itemWidth whenever the window is resized
window.addEventListener('resize', updateItemWidth);

function slideNext() {
    counter++;
    if (counter >= items.children.length) {
        counter = 0;
    }
    items.style.transform = `translateX(-${itemWidth * counter}px)`;  
}

function slidePrevious() {
    counter--;
    if (counter < 0) {
      counter = items.children.length - 1;
    }
    items.style.transform = `translateX(-${itemWidth * counter}px)`;
  }

// Event listeners for buttons
  nextButton.addEventListener('click', slideNext);
  prevButton.addEventListener('click', slidePrevious);
  
let touchStartX = 0;
let touchEndX = 0;

container.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

container.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  if (touchEndX < touchStartX) {
    slideNext(); // Swipe left, go to the next slide
  }
  if (touchEndX > touchStartX) {
    slidePrevious(); // Swipe right, go to the previous slide
  }
}

const r = new rive.Rive({
  src: "resources/assets/ghost4.riv",
  artboard: "homepage_ghost",
  canvas: document.getElementById("ghost_canvas"),
  autoplay: true,
  stateMachines: "State Machine 1",
})