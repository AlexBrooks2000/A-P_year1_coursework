function addImage(image) {
  let newImg = document.createElement("IMG");
  newImg.setAttribute("src", image);
  //document.body.appendChild(newImg);
}

const dogs = ["images/pug.jpg", "images/lab.jpg", "images/corgi.jpg"];

function addDogProfile(dogs) {
  for (const dog of dogs) {
    let newDiv = document.createElement("div");
    let newImg = document.createElement("IMG");
    let dogDes = document.createElement("p");
    dogDes.textContent = "Name: dog \n breed: dog breed \n sex: yes";
    newImg.setAttribute("src", dog);
    newImg.setAttribute("width", "60em");
    newImg.setAttribute("height", "100em");
    newDiv.appendChild(newImg);
    newDiv.appendChild(dogDes);
    document.body.appendChild(newDiv);
  }
}
window.onload = function() {
  addDogProfile(dogs);
}
