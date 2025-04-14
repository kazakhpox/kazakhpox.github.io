document.addEventListener("scroll", () => {
    const footer = document.querySelector(".footer");
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    if (scrollPosition >= scrollHeight - 10) { 
        footer.classList.add("show"); // Показываем футер
    } else {
        footer.classList.remove("show"); // Скрываем футер
    }
});