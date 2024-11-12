// MY SOLUCTION
"use strict";
const body = document.body;
const image = document.createElement("img");
// body.insertAdjacentElement("afterbegin", image);

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
      return wait(2);
    })
    .then(() => {
      hideImage();
    });
};

// promisifying setTimeout

function wait(secs) {
  return new Promise(function (resolve) {
    setTimeout(resolve, secs * 1000);
  });
}

// loadImages();

// INSTRUCTOR SOLUCTION
const imageContainer = document.body;

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", () => {
      imageContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let curImage;
createImage("./eagle_bird_predator_113991_1280x1024.jpg")
  .then((img) => {
    curImage = img;
    console.log("image 1 loaded");
    return wait(2);
  })
  .then(() => {
    curImage.style.display = "none";
    return createImage("./horses_sunset_paddock_125690_1280x1024.jpg");
  })
  .then((img) => {
    curImage = img;
    console.log("image 2 loaded");
    return wait(2);
  })
  .then(() => {
    curImage.style.display = "none";
  })
  .catch((err) => console.log(err.message));
