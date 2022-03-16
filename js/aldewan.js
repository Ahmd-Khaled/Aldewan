// Scroll to Top
let toTopBtn = document.querySelector(".to-top");

window.onscroll = function () {
    if (this.scrollY >= screen.height) {
        toTopBtn.classList.add("show");
    } else {
        toTopBtn.classList.remove("show");
    }
};
toTopBtn.onclick = function () {
    window.scrollTo({
        top:0,
        behavior: "smooth",
    });
};
// Watch More
if (window.location.pathname == "/index.html") {
    let watchMoreSec = document.querySelector(".our-works .watch-more-sec");
    let watchMoreBtn = document.querySelector(".our-works .watch-more button");
    
    watchMoreBtn.onclick = function () {
        watchMoreSec.style.display = "flex";
        this.style.display = "none";
    }
}
