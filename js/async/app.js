"use strict";
const body = document.body;
const image = document.createElement("img");
body.insertAdjacentElement("afterbegin", image);

const displayImage = (path) => {
  return new Promise(function (resolve) {
    image.src = path;
    image.onload = resolve;
  });
};

const hideImage = () => {
  image.style.display = "none";
};

const showImage = () => {
  image.style.display = "block";
};

const loadImages = () => {
  displayImage("./eagle_bird_predator_113991_1280x1024.jpg")
    .then(() => {
      showImage();
      return wait(2);
    })
    .then(() => {
      hideImage();
      return displayImage("./horses_sunset_paddock_125690_1280x1024.jpg");
    })
    .then(() => {
      showImage();
    });
};

// promisifying setTimeout

function wait(secs) {
  return new Promise(function (resolve) {
    setTimeout(resolve, secs * 1000);
  });
}

loadImages();
