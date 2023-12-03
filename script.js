const images = [
  "./Assets/Image1.jpg",
  "./Assets/Image2.jpg",
  "./Assets/Image3.jpg",
  "./Assets/Image4.jpg",
  "./Assets/Image5.jpg",
  "./Assets/Image6.jpg",
  "./Assets/Image7.jpg",
  "./Assets/Image8.jpg",
  "./Assets/Image9.jpg",
  "./Assets/Image10.jpg",
];
const button = document.querySelector("#dark");
let mode = false;
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector(".container");
  const gallery = document.querySelector(".gallery");
  var containerImage = document.createElement("img");
  containerImage.src = images[0];
  containerImage.alt = "image";
  container.appendChild(containerImage);
  images.map((image, index) => {
    var img = document.createElement("img");
    img.src = image;
    img.alt = `image ${index}`;
    img.addEventListener("click", function () {
      containerImage.src = image;
    });
    gallery.appendChild(img);
  });
  button.addEventListener("click", function () {
    if (mode) {
        button.innerHTML = "Darken";
        containerImage.style.opacity = 1;
        mode = false;
      } else {
        button.innerHTML = "Lighten";
        containerImage.style.opacity = 0.5;
        mode = true;
      }
  });
});
