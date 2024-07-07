let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

for(let i = 0; i <= officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        console.log(officeItems[i])
    }
}

for (let i = 0; i <= peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
        peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "him"
    } else {peopleWhoWantToSeeMadMaxFuryRoad[i].gender = "her"}
    if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 ) {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " in.")
    } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. You can let " + peopleWhoWantToSeeMadMaxFuryRoad[i].gender + " watch the movie.")
    }
}