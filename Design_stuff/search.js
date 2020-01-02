class Doggo {
  constructor(image, name, breed, sex) {
    this.image = image;
    this.name = name;
    this.breed = breed;
    this.sex = sex;
  }
}

let dogs = [{image: "images/pug.jpg", name: "mike", breed: "pug", sex: "male"},
{image: "images/lab.jpg", name: "Susan", breed: "labrador", sex: "female"},
{image: "images/corgi.jpg", name: "ralph", breed: "corgi", sex: "male"},
{image: "images/yoda.jpg", name: "Baby Yoda", breed: "unknown", sex: "unknown"}];

function loggedIn() {
  const isLoggedIn = true;
  const user = "Joe Bloggs"

  let newDiv = document.createElement("div");
  newDiv.setAttribute("id", "signIn");

  if (isLoggedIn === true) {
    let logInMessage = document.createElement("p");
    logInMessage.textContent = "Welcome " + user;
    let signOutButton = document.createElement("button");
    signOutButton.textContent = "log out";
    logInMessage.setAttribute("class", "headerText");
    signOutButton.setAttribute("class", "headerText signInButton");
    newDiv.appendChild(logInMessage);
    newDiv.appendChild(signOutButton);
  } else {
    let signInButton = document.createElement("button");
    signInButton.textContent = "sign in";
    signInButton.setAttribute("class", "signInButton");
    newDiv.appendChild(signInButton);
  }

  document.querySelector("#header").appendChild(newDiv);
}

function addDogProfile(dogs) {
  for (const dog of dogs) {
    let newDiv = document.createElement("div"); //creates div
    let secondDiv = document.createElement("div");

    //adds image to the div
    let newImg = document.createElement("IMG");
    newImg.setAttribute("src", dog.image);
    newImg.setAttribute("width", "100em");
    newImg.setAttribute("height", "140em");
    newImg.setAttribute("class", "dogImage");
    newDiv.appendChild(newImg);

    //add dog name to the div
    let dogName = document.createElement("p");
    dogName.textContent = "Name: " + dog.name;
    secondDiv.appendChild(dogName);

    //add dog breed to div
    let dogBreed = document.createElement("p");
    dogBreed.textContent = "Breed: " + dog.breed;
    secondDiv.appendChild(dogBreed);

    //add dog sex to div
    let dogSex = document.createElement("p");
    dogSex.textContent = "sex: " + dog.sex;
    secondDiv.appendChild(dogSex);

    //Adds div to the main body
    secondDiv.setAttribute("class", "secondDiv")
    newDiv.appendChild(secondDiv);
    newDiv.setAttribute("class", "profileView")
    document.querySelector("#mainView").appendChild(newDiv);
  }
}

function createNewDog() {
  let newDogImage = document.getElementById('inputImage').value;
  let newDogName = document.getElementById('inputName').value;
  let newDogBreed = document.getElementById('inputBreed').value;
  let newDogSex = document.getElementById('inputSex').value;

  let newDoggo = new Doggo(newDogImage, newDogName, newDogBreed, newDogSex);
  dogs.push(newDoggo);
  //window.onload();
  console.log("button pressed")
}
window.onload = function() {
  loggedIn();
  addDogProfile(dogs);

}
