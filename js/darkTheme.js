const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

// Проверяем сохранённую тему при загрузке страницы
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    themeIcon.src = "icons/icon_sun.png"; // Солнечная иконка
} else {
    themeIcon.src = "icons/icon_moon.png"; // Лунная иконка
}

// Переключение темы
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-theme");

    if (body.classList.contains("dark-theme")) {
        localStorage.setItem("theme", "dark");
        themeIcon.src = "icons/icon_sun.png";
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.src = "icons/icon_moon.png";
    }
});