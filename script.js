document.getElementById('burger').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
});

document.getElementById('closeBtn').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
});


let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    let indicators = document.querySelectorAll('.indicator');

    slides.forEach((slide, index) => {
        slide.style.display = "none";
    });

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (window.innerWidth >= 768) {
        slides[(slideIndex - 1) % slides.length].style.display = "block";
        slides[slideIndex % slides.length].style.display = "block";
        slides[(slideIndex + 1) % slides.length].style.display = "block";
    } else {
        slides[slideIndex - 1].style.display = "block";
    }

    indicators.forEach(indicator => indicator.className = indicator.className.replace(" active", ""));
    indicators[slideIndex - 1].className += " active";

    setTimeout(showSlides, 5000);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

document.querySelectorAll('.faq-question').forEach(item => {
  item.addEventListener('click', () => {
    const answer = item.nextElementSibling;
    const arrow = item.querySelector('.arrow');
    
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    
    arrow.classList.toggle('rotate');
  });
});