// ... previous JS ...

const carousel = document.querySelector(".carousel");
const images = carousel.querySelectorAll("img");
const totalImages = images.length;
const pagination = document.querySelector(".pagination");
let index = 0;
// Create pagination dots
for (let i = 0; i < totalImages; i++) {
  const dot = document.createElement("div");
  dot.classList.add("pagination-bar");
  dot.addEventListener("click", () => {
    jumpToSlide(i);
  });
  pagination.appendChild(dot);
}

// Highlight the first dot as the initial slide
updateDots();

function updateDots() {
  const dots = document.querySelectorAll(".pagination-bar");
  dots.forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

function jumpToSlide(slideIndex) {
  index = slideIndex;
  move(0); // Using the move function to set the offset without changing the index
}

// Update move function to call updateDots
function move(n) {
  index += n;

  if (index < 0) {
    index = totalImages - 1;
  } else if (index >= totalImages) {
    index = 0;
  }

  const offset = -index * images[0].clientWidth;
  carousel.style.transform = `translateX(${offset}px)`;

  updateDots(); // Highlight the active dot
}

// To automatically move to the next image every 2 seconds
// setInterval(() => move(1), 2000);
