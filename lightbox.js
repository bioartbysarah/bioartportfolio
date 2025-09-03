// Get lightbox elements
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const captionText = document.getElementById("caption");
const closeBtn = document.getElementsByClassName("close")[0];
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Select all gallery images
const galleryImages = document.querySelectorAll(".gallery img");
let currentIndex = -1;

// Function to show image
function showImage(index) {
  lightboxImg.src = galleryImages[index].src;
  captionText.innerHTML = galleryImages[index].alt;
  currentIndex = index;
}

// Open lightbox on click
galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.style.display = "block";
    showImage(index);
  });
});

// Close when clicking "X"
closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  currentIndex = -1;
});

// Close when clicking outside image
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    currentIndex = -1;
  }
});

// Keyboard navigation
document.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "block") {
    if (e.key === "ArrowRight") {
      showImage((currentIndex + 1) % galleryImages.length);
    }
    else if (e.key === "ArrowLeft") {
      showImage((currentIndex - 1 + galleryImages.length) % galleryImages.length);
    }
    else if (e.key === "Escape") {
      lightbox.style.display = "none";
      currentIndex = -1;
    }
  }
});

// Arrow button clicks
nextBtn.addEventListener("click", () => {
  showImage((currentIndex + 1) % galleryImages.length);
});
prevBtn.addEventListener("click", () => {
  showImage((currentIndex - 1 + galleryImages.length) % galleryImages.length);
});
