class User{
    constructor(firstName, lastName, age, location){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.location = location
    }
    displayInfo() {
        console.log(`Name: ${this.firstName} ${this.lastName}, Age: ${this.age}, location: ${this.location}`);
      }
      compareAge(otherUser){
        if (this.age === otherUser.age){
            return `${this.firstName} e ${otherUser.firstName} hanno la stessa età.`;
        }
        else if (this.age > otherUser.age){
            return `${this.firstName} è più vecchio di ${otherUser.firstName}.`;
        }
        else {
            return `${this.firstName} è più piccolo di ${otherUser.firstName}.`;
        }
      }
}
const user1 = new User("Abel", "Sassu", 28, "Ozieri")
const user2 = new User("Pepe", "theFrog", 20, "Germany")
user1.displayInfo()
user2.displayInfo()
const ageComparison = user1.compareAge(user2);
console.log(ageComparison);


class Pet {
    constructor(petName, ownerName, species, breed) {
      this.petName = petName;
      this.ownerName = ownerName;
      this.species = species;
      this.breed = breed;
    }  
    hasSameOwner(otherPet) {
      return this.ownerName === otherPet.ownerName;
    }
}

const petList = [];

document.getElementById('petForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const petName = document.getElementById('petName').value;
    const ownerName = document.getElementById('ownerName').value;
    const species = document.getElementById('species').value;
    const breed = document.getElementById('breed').value;

    const newPet = new Pet(petName, ownerName, species, breed);
    checkSameOwner(newPet);
    petList.push(newPet);
    displayPetList();
});

function displayPetList() {
    const petListElement = document.getElementById('petList');
    petListElement.innerHTML = '';

    petList.forEach(pet => {
        const listItem = document.createElement('li');
        listItem.textContent = `Bestia: ${pet.petName} //  Nome padrone: ${pet.ownerName} //  Specie: ${pet.species} // Razza: ${pet.breed}`;
        petListElement.appendChild(listItem);
    });
    document.getElementById('petName').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('species').value = '';
    document.getElementById('breed').value = '';
}

function checkSameOwner(newPet) {
    const sameOwnerMessage = document.getElementById('sameOwnerMessage');
    const sameOwnerPet = petList.find(pet => pet.hasSameOwner(newPet));

    if (sameOwnerPet) {
        sameOwnerMessage.textContent = `Due animali condividono lo stesso padrone: ${sameOwnerPet.petName} e ${newPet.petName}`;
    }
}


