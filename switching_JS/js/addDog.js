class Dog {
  constructor(image, name, breed, sex, size, kennelClub, pedigree) {
    this.image = image;
    this.name = name;
    this.breed = breed;
    this.sex = sex;
    this.size = size;
    this.kennelClub = kennelClub;
    this.pedigree = pedigree;
  }
}

function addDog() {

  function addInput(inputName, inputID, isTF = false) {
    const inputLabel = document.createElement("label");
    inputLabel.textContent = inputName;
    document.querySelector("#mainView").appendChild(inputLabel);


    if (isTF == false) {
      const newInput = document.createElement("input");
      newInput.setAttribute("type", "text");
      newInput.setAttribute("id", inputID);
    document.querySelector("#mainView").appendChild(newInput);
    } else if (isTF = true){
      const newInput = document.createElement("select");
      newInput.setAttribute("id", inputID);

      const yesInput = document.createElement("option");
      yesInput.setAttribute("value", true);
      yesInput.textContent = "yes";

      noInput = document.createElement("option");
      noInput.setAttribute("value", false);
      noInput.textContent = "no";

      newInput.appendChild(yesInput);
      newInput.appendChild(noInput);
      document.querySelector("#mainView").appendChild(newInput);
    }

    const addBreak = document.createElement("br");
    document.querySelector("#mainView").appendChild(addBreak);
  }

  addInput("Profile Picture:", "dogProfile");
  addInput("dog name:", "dogName");
  addInput("dog Breed:", "dogBreed");
  addInput("dog sex:", "dogSex", );
  addInput("dog Size:", "dogSize");
  addInput("Is your dog registered to the kennel club?", "dogKennel", true);
  addInput("Is your dog a pedigree?", "dogPedigree", true);

}

function addButton() {
  const btn = document.createElement("button");
  btn.textContent = "add Dog";
  btn.setAttribute("id", "addDog");
  btn.addEventListener("click", createDogobject);
  document.querySelector("#mainView").appendChild(btn);
}

function createDogobject() {
  const profile = document.querySelector("#dogProfile").value;
  const name = document.querySelector("#dogName").value;
  const breed = document.querySelector("#dogBreed").value;
  const sex = document.querySelector("#dogSex").value;
  const size = document.querySelector("#dogSize").value;
  const kennelClub = document.querySelector("#dogKennel").value;
  console.log(kennelClub);
  const pedigree = document.querySelector("#dogPedigree").value;

  const newDog = new Dog(profile, name, breed, sex, size, kennelClub, pedigree);
  console.log(newDog);
}

addDog();
addButton();
