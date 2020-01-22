class Doggo {
  constructor(image, name, breed, sex) {
    this.image = image;
    this.name = name;
    this.breed = breed;
    this.sex = sex;
  }
}

let dogs = [{image: "images/pug.jpg", name: "mike", breed: "pug", sex: "male", size:"small"},
{image: "images/lab.jpg", name: "Susan", breed: "labrador", sex: "female", size: "large"},
{image: "images/corgi.jpg", name: "ralph", breed: "corgi", sex: "male", size: "medium"},
{image: "images/yoda.jpg", name: "Baby Yoda", breed: "unknown", sex: "unknown", size: "small"}];

let breeds = ["any", "pug", "labrador", "corgi", "unknown"];
let sex = ["any", "male", "female"];
let size = ["any", "small", "medium", "large", "extra large", "chonky"];

let breedFilter = "any";
let sexFilter = "any";
let sizeFilter = "any";

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



function filter(arr, type) {
  const dropBox = document.createElement("select");
  for (const item of arr) {
    view = document.createElement("option");
    view.setAttribute("value", item);
    view.textContent = item;
    dropBox.appendChild(view);
  }
  dropBox.setAttribute("class", "dropBox");
  dropBox.setAttribute("id", type);
  document.querySelector("#firstView").appendChild(dropBox);
}

function addSearchButton() {
  const but = document.createElement("button");
  but.textContent = "Filter";
  but.addEventListener("click", setFilters);
  document.querySelector("#firstView").appendChild(but);
}

function setFilters() {
  console.log("this function is working")
  breedFilter = document.querySelector("#breedFilter").value;
  sexFilter = document.querySelector("#sexFilter").value;
  sizeFilter = document.querySelector("#sizeFilter").value;
  addDogProfile(dogs)
}

function addDogProfile(dogs) {

  document.querySelector("#secondView").innerHTML = "";
  for (const dog of dogs) {
    if (dog.breed == breedFilter || breedFilter == "any") {
      if (dog.sex == sexFilter || sexFilter == "any") {
        if (dog.size == sizeFilter || sizeFilter == "any") {
          let newDiv = document.createElement("div"); //creates div
          let secondDiv = document.createElement("div");

          //adds image to the d iv
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

          //add message button
          let but = document.createElement("button");
          but.textContent = "message owner";
          secondDiv.appendChild(but);

          //Adds div to the main body
          secondDiv.setAttribute("class", "secondDiv")
          newDiv.appendChild(secondDiv);
          newDiv.setAttribute("class", "profileView")
          document.querySelector("#secondView").appendChild(newDiv);
        }
      }
    }
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
  filter(breeds, "breedFilter");
  filter(sex, "sexFilter");
  filter(size, "sizeFilter");
  addSearchButton();
  //addDogProfile(dogs);
}
