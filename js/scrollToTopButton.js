let lastScrollTop = 0;
const header = document.querySelector("header");
const scrollToTopButton = document.createElement("button");

scrollToTopButton.style.zIndex = "1000";

scrollToTopButton.id = "scrollToTop";
scrollToTopButton.innerText = "↑";
document.body.appendChild(scrollToTopButton);

window.addEventListener("scroll", function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    lastScrollTop = scrollTop;

    if (scrollTop > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
