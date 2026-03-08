const items = document.querySelectorAll(".item");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const close = document.getElementById("close");

items.forEach(item => {
item.addEventListener("click", () => {
popup.style.display = "flex";
popupImg.src = item.src;
});
});

close.addEventListener("click", () => {
popup.style.display = "none";
});