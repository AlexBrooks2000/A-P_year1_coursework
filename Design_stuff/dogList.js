

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

function listDogs(dog) {
  let newDiv = document.createElement("div");
  newDiv.setAttribute("class", "dogBox");

  let newImg = document.createElement("img");
  newImg.setAttribute("src", dog.img);
  newImg.setAttribute("class", "dogImage");
  newDiv.appendChild(newImg);

  document.querySelector("#mainView").appendChild(newDiv);

}
 let dog = {image: "images/pug.jpg",
 name: "Mike",
 breed: "pug",
 sex: "male",
 features: ["short hair", "excitable", "non-aggressive", "Pedegree"], description: "The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.", kennelClub: true, pedigree: true};

window.onload = function() {
  loggedIn();
  listDogs(dog);
}
