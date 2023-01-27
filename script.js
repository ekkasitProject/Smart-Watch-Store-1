
const colors1 = document.getElementById("color-1");
const colors2 = document.getElementById("color-2");
const colors3 = document.getElementById("color-3");
const colors4 = document.getElementById("color-4");
const img = document.getElementById("img");

colors1.addEventListener("click", () => {
    img.src = "img/black-watch.png"
})

colors2.addEventListener("click", () => {
    img.src = "img/orenge-watch.png"
})
colors3.addEventListener("click", () => {
    img.src = "img/purple-watch.png"
})

colors4.addEventListener("click", () => {
    img.src = "img/pink-watch.png"
})

