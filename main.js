const slides = document.querySelectorAll(".slides img");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");

let index = 0;

function showSlide(n) {
    slides.forEach((slide, i)=>
    slide.classList.remove("active"));
    slides[n].classList.add("active");
}

next.addEventListener("click", ()=> {
    index = (index + 1) % slides.length;
    showSlide(index);
});

prev.addEventListener("click", ()=> {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
});

// setInterval(() => {
//     index = (index+1)%slides.length;
//     showSlide(index);
// }, 3000);