function togglemenu(){
    const menu= document.querySelector(".menu-links");
    const icon= document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    // Update current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the carousel
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".carousel-slide").style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}


const infoText = [
    "Innovation and creativity",
    "Team management",
    "Presentation skills",
    "Performance measurement",
    // Add more text descriptions for each badge
];


function moveSlide(direction) {
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    // Update current slide index
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Move the carousel
    const slideWidth = slides[0].clientWidth;
    document.querySelector(".carousel-slide").style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    // Update info text
    document.getElementById("info-text").textContent = infoText[currentSlide];
}



const pdfFiles = [
    "./Assets/AWS1.pdf",
    "./Assets/AWS2.pdf",
    // Add more PDF file URLs as needed
];

let currentPDF = 0;

function changePDF(direction) {
    const pdfFrame = document.getElementById("pdf-frame");

    // Start the fade-out effect
    pdfFrame.style.opacity = 0;

    // Wait briefly before changing the PDF source to allow for the fade-out
    setTimeout(() => {
        currentPDF = (currentPDF + direction + pdfFiles.length) % pdfFiles.length;
        pdfFrame.src = pdfFiles[currentPDF];

        // Listen for load event to apply fade-in effect
        pdfFrame.onload = () => {
            pdfFrame.style.opacity = 1;
        };
    }, 300); // Delay for the fade-out
}

