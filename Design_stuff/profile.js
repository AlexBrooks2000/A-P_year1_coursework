function createProfileTop(dogs) {
  let newDiv = document.createElement("div");
  let secondDiv = document.createElement("div");
  let newImg = document.createElement("IMG");

  newImg.setAttribute("src", dogs[0].image);
  newImg.setAttribute("class", "profilePic");
  newDiv.appendChild(newImg);

  let name = document.createElement("h2");
  name.textContent = dogs[0].name;
  name.setAttribute("class", "dogName");
  secondDiv.appendChild(name);

  let breed = document.createElement("p");
  breed.textContent = dogs[0].breed;
  breed.setAttribute("class", "dogBreed");
  secondDiv.appendChild(breed);

  let sex = document.createElement("p");
  sex.textContent = dogs[0].sex;
  sex.setAttribute("class", "dogSex");
  secondDiv.appendChild(sex);

  let newButton = document.createElement("button");
  newButton.textContent = "Chat Now!";
  newButton.setAttribute("id", "chatButton")
  secondDiv.appendChild(newButton);

  newDiv.setAttribute("class", "displayViews");
  secondDiv.setAttribute("class", "nameDiv");
  newDiv.appendChild(secondDiv);
  document.querySelector("#mainView").appendChild(newDiv);
}

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

function addFeatures(dogs) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "middleDivs");
  let featuresTitle = document.createElement("h3");
  featuresTitle.textContent = "Features";
  featuresTitle.setAttribute("class", "titles");
  newDiv.appendChild(featuresTitle);
  let newNav = document.createElement("nav");
  for (const feature of dogs[0].features) {
    let newFeature = document.createElement("li");
    newFeature.textContent = feature;
    newNav.appendChild(newFeature);
  }
  newDiv.appendChild(newNav);

  document.querySelector("#mainView").appendChild(newDiv);
}

function addDescription(dogs) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "middleDivs");
  let aboutDog = document.createElement("h3");
  aboutDog.textContent = "About " + dogs[0].name;
  aboutDog.setAttribute("class", "titles");
  newDiv.appendChild(aboutDog);
  let newDes = document.createElement("p");
  newDes.textContent = dogs[0].description;
  newDiv.appendChild(newDes);
  document.querySelector("#mainView").appendChild(newDiv);
}

function addKennelClub(dogs) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "middleDivs");
  let title = document.createElement("h3");
  title.textContent = "Kennel Club";
  title.setAttribute("class", "titles");
  newDiv.appendChild(title);

  let kennelImg = document.createElement("IMG");
  kennelImg.setAttribute("id", "kennelClub");
  if (dogs[0].kennelClub === true) {
    kennelImg.setAttribute("src", "images/kennelClub.png");
  } else {
    kennelImg.setAttribute("src", "images/RedCross.png");
  }
  newDiv.appendChild(kennelImg);
  document.querySelector('#mainView').appendChild(newDiv);
}

function addPedigree(dogs) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "middleDivs");
  let title = document.createElement("h3");
  title.textContent = "Pedigree";
  title.setAttribute("class", "titles");
  newDiv.appendChild(title);

  let pedigreeImg = document.createElement("IMG");
  pedigreeImg.setAttribute("id", "pedigree");
  if (dogs[0].pedigree === true) {
    pedigreeImg.setAttribute("src", "images/pedigree.png");
  } else {
    pedigreeImg.setAttribute("src", "images/RedCross.png");
  }
  newDiv.appendChild(pedigreeImg);
  document.querySelector("#mainView").appendChild(newDiv);
}

let dogs = [{image: "images/pug.jpg", name: "Mike", breed: "pug", sex: "male", features: ["short hair", "excitable", "non-aggressive", "Pedegree"], description: "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.", kennelClub: true, pedigree: true},
{image: "images/lab.jpg", name: "Susan", breed: "labrador", sex: "female"},
{image: "images/corgi.jpg", name: "ralph", breed: "corgi", sex: "male"},
{image: "images/yoda.jpg", name: "Baby Yoda", breed: "unknown", sex: "unknown"}];

window.onload = function() {
  loggedIn();
  createProfileTop(dogs);
  addDescription(dogs);
  addFeatures(dogs);
  addKennelClub(dogs);
  addPedigree(dogs);
}
