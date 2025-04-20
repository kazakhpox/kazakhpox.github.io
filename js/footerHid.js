document.addEventListener("scroll", () => {
    const footer = document.querySelector(".footer");
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollPosition = window.innerHeight + window.scrollY;

    console.log("Scroll position:", scrollPosition, "Scroll height:", scrollHeight);

    if (scrollPosition >= scrollHeight - 10) { 
        footer.classList.add("show"); // Показываем футер
        console.log("Footer shown");
    } else {
        footer.classList.remove("show"); // Скрываем футер
        console.log("Footer hidden");
    }
});