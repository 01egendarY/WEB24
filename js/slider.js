document.addEventListener("DOMContentLoaded", function () {
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
    const slider = document.querySelector(".slider-container");
    const banners = document.querySelectorAll(".banner");

    let currentIndex = 0;
    const totalBanners = banners.length;

    function updateSlider() {
        const offset = -currentIndex * 100;
        slider.style.transform = `translateX(${offset}%)`;
    }

    prev.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
        updateSlider();
    });

    next.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % totalBanners;
        updateSlider();
    });

    // Функция для автоматического переключения баннеров
    function autoSlide() {
        currentIndex = (currentIndex + 1) % totalBanners;
        updateSlider();
    }
    // Устанавливаем интервал для автоматического переключения баннеров
    setInterval(autoSlide, 10000); // 10000 мс = 10 секунд
});
