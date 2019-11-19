function addImage(image) {
  let newImg = document.createElement("IMG");
  newImg.setAttribute("src", image);
  document.body.appendChild(newImg);
}

const dogs = ["images/pug.jpg", "images/lab.jpg", "images/corgi.jpg"];

function addDogProfile(dogs) {
  for (const dog of dogs) {
    addImage(dog);

  }
}
window.onload = function() {

  addDogProfile(dogs);
}
