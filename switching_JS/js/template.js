let dogs = [{image: "images/pug.jpg", name: "mike", breed: "pug", sex: "male", size:"small", owner: "not me"},
{image: "images/lab.jpg", name: "Susan", breed: "labrador", sex: "female", size: "large", owner: "not me"},
{image: "images/corgi.jpg", name: "ralph", breed: "corgi", sex: "male", size: "medium", owner: "me"},
{image: "images/yoda.jpg", name: "Baby Yoda", breed: "unknown", sex: "unknown", size: "small", owner: "not me"},
{image: "images/chickpea.jpg", name: "Chickpea", breed: "corgi", sex: "female", size: "medium", owner: "me"}];

let breeds = ["breed", "pug", "labrador", "corgi", "unknown"];
let sex = ["sex", "male", "female"];
let size = ["size", "small", "medium", "large", "extra large", "chonky"];

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

function loadNewJS() {
  const searchDogs = document.querySelector("#searchBtn");
  const messages = document.querySelector("#searchBtn");
  const myDogs = document.querySelector("#myDogsBtn");
  const settings = document.querySelector("#settingsBtn");

  searchDogs.addEventListener("click", function() {
    loadScript("js/search.js");
  });
}

function loadScript(src) {
  document.querySelector("#mainView").textContent = "";
  let el = document.createElement("script");
  el.src = src;
  document.querySelector("#mainView").appendChild(el);
}

window.onload = function() {
  loggedIn();
  loadNewJS();
}
