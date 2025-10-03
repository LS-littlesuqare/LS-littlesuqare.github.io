document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.ad-slide');
    const dots = document.querySelectorAll('.ad-slider-dot');
    const prevBtn = document.querySelector('.ad-slider-nav.prev');
    const nextBtn = document.querySelector('.ad-slider-nav.next');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        let newSlide = (currentSlide + 1) % slides.length;
        showSlide(newSlide);
    }

    function prevSlide() {
        let newSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(newSlide);
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 10000);
    }

    function stopSlideshow() {
        clearInterval(slideInterval);
    }

    nextBtn.addEventListener('click', () => {
        stopSlideshow();
        nextSlide();
        startSlideshow();
    });

    prevBtn.addEventListener('click', () => {
        stopSlideshow();
        prevSlide();
        startSlideshow();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopSlideshow();
            showSlide(index);
            startSlideshow();
        });
    });

    const slider = document.querySelector('.ad-slider');
    slider.addEventListener('mouseenter', stopSlideshow);
    slider.addEventListener('mouseleave', startSlideshow);

    startSlideshow();});