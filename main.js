const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl: "https://lovepawz.com/cdn/shop/products/B18F00ACEABB12FB9436CF73C4B9E0B9.jpg?v=1635181961",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "http://www.theouthousers.com/images/jck//ThanosCopter/news/grumpasaur.jpg",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg",
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl:
      "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg",
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600",
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "http://1kjkdg1axrkd2g03cnboj761.wpengine.netdna-cdn.com/wp-content/uploads/2017/12/braydon-anderson-105552-e1512684107659.jpg",
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl:
      "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl:
      "https://images.readwrite.com/wp-content/uploads/2018/03/t-rex-dino-quiz-e1490854556549.jpg",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://www.nation.co.ke/image/view/-/4078922/highRes/1742693/-/maxw/600/-/1453yvh/-/DINO.jpg",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://img.buzzfeed.com/buzzfeed-static/static/2015-11/2/12/enhanced/webdr15/anigif_enhanced-29802-1446485228-10.gif?crop=250:165;0,0&downsize=715",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl:
      "http://funnyanimalphoto.com/wp-content/uploads/2013/08/cat_caught_mouse_thegatewaypundit.jpg",
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl:
      "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "http://funbk.s3.amazonaws.com/wp-content/uploads/2016/06/funny-cat-video-which-will-make-you-laugh-louder.jpg",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg",
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "http://lsae2.iypcdn.com/static//modules/uploads/photos/language1/dino-live-22.jpg?119",
  },
];
// this is where we target the element with an id of "app" within the HTML file. we passed app through the query selector. we used it to search everywhere.
const targetingApp = document.querySelector("#app");
app.innerHTML = "Hello puppy!"; // we set the inner HTML text to Hello Puppy

const renderToDom = (array) => {
  let domString = ""

  for(pet of array){
    domString += `<div class="card myAnimalCard" style="width: 18rem">
      <div class="card-header">
        ${pet.name}
      </div>
      <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
      <div class="card-body">
      <h5 class="card-title">${pet.color}</h5>
        <p class="card-text">${pet.specialSkill}</p>
      </div>
      <div class="card-body">
      </div>
      <div class="card-footer text-body-secondary">
      ${pet.type}
     </div>
     <a href="#" class="btn btn-outline-danger" id="delete--${pet.id}">Delete</a>
    </div>`
  }
  const appDiv = document.querySelector("#app")
  appDiv.innerHTML = domString
}
renderToDom(pets)

  const dogButton = document.querySelector("#Dog") //So, this line of code is finding the HTML element that has id="Dog" in your webpage and assigning it to the variable dogButton. 
  const catButton = document.querySelector("#Cat")
  const dinoButton = document.querySelector("#Dino")
  const allButton = document.querySelector("#All")
  
  const filter = (array, animalType) => { //the filter function here has two arguments, the entire array pets and a new one animalType, which we
    let petArray = []; //initialized an empty array! This array will store the pets that match the specified animalType.
    
    for (pet of array)// iterates through each pet object in the array. For each pet:
    if(pet.type === animalType){ //It checks if the pet.type (the type of the current pet) is equal to the animalType. If they match, it means the pet is of the desired type.
    petArray.push(pet) //so. the entire array, You can use this method to dynamically add elements to an array
  }
  renderToDom(petArray)
  //After looping through all the pets in the array, the petArray contains only the pets of the specified animalType
//Finally, the renderToDom(petArray) function is called to update the DOM and display the filtered pets.
//This function is a simple filter that takes an array of pets and returns a new array containing only pets of a specific type. 
}

dogButton.addEventListener('click', () => {
  filter(pets, "dog")
    }) 

catButton.addEventListener('click', () => {
  filter(pets, "cat")
})

dinoButton.addEventListener('click', () => {
  filter(pets, "dino")
})

allButton.addEventListener("click" , () => {
  renderToDom(pets)
})


// ****** CREATE ****** //
// 1. select/target the form on the DOM
const form = document.querySelector('form')
  
// 2. create a function that grabs all the values from the form, pushes the new object to the array, 
//then repaints the DOM with the new teammate
const newPet = (event) => {
  event.preventDefault() //// EVERY TIME YOU CREATE A FORM

  const newPetObj = {
    id: pets.length + 1, 
    name: document.querySelector("#petName").value,
    color: document.querySelector("#petColor").value,
    specialSkill: document.querySelector("#petSkill").value,
    type: document.querySelector('input[name="exampleRadios"]:checked').value,
    imageUrl: document.querySelector("#petImg").value,
   }; 

  pets.push(newPetObj);
  renderToDom(pets);
  form.reset();
}
// 3. Add an event listener for the form submit and pass it the function (callback)
form.addEventListener('submit', newPet)

// ******************** //
// ****** DELETE ****** //
// ******************** //

// Here we will be using event bubbling
// 1. Target the app div
// 2. Add an event listener to capture clicks
// 3. check e.target.id includes "delete"
// 4. add logic to remove from array
// 5. Repaint the DOM with the updated array
// 6. Organize code so that everything is in a function except selectors


//this isn't right yet//
// // 1. Target the app div (used form for our situation)
//const app = document.querySelector("#app");

// const deletePet = (event) => {
  app.addEventListener("click", (e) => { //// 2. Add an event listener to capture clicks
  
    if(e.target.id.includes("delete")) {  //// 3. check e.target.id includes "delete"
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex(e => e.id === Number(id)); //// 4. add logic to remove from array. // .findIndex is an array method
    
    pets.splice(index, 1); //// .splice modifies the original array
    
    renderToDom(pets); // // 5. Repaint the DOM with the updated array
  }
})
const startApp = () => {
  renderToDom(pets);
}

startApp();
app.addEventListener("click", deletePet);