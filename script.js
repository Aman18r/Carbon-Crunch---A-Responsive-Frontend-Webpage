// **Smooth Scroll Effect (If scrolling is enabled)**
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

//  **Parallax Effect on Image**
window.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    document.querySelector(".image-container img").style.transform = `translateY(${scrollPosition * 0.3}px)`;
});

//  **Hover Animation on Stats Boxes**
document.querySelectorAll(".stats-content div").forEach(stat => {
    stat.addEventListener("mouseover", () => {
        stat.style.transform = "scale(1.05)";
        stat.style.transition = "0.3s ease";
    });
    stat.addEventListener("mouseout", () => {
        stat.style.transform = "scale(1)";
    });
});

//  **Animated Counter for Stats**
function animateNumber(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let step = Math.abs(Math.floor(duration / range));
    let current = start;

    let timer = setInterval(() => {
        current += 1;
        obj.innerText = current;
        if (current >= end) {
            clearInterval(timer);
        }
    }, step);
}

// Call function for each stat
window.onload = function () {
    animateNumber("count-3x", 1, 3, 1000);
    animateNumber("count-98", 1, 98, 2000);
    animateNumber("count-18", 1, 18, 1500);
    animateNumber("count-37", 1, 37, 1800);
};
