class ResidenceHall {
    // Making a constructor
    constructor(name, allMale, allFemale, allPeople, genderInclusive, 
        expRoommates, privBathroomPercentage, avgCost, foodRating, distance, acPercentage, 
        date, link) {
            // Initializing all the variables
            this.name = name; // String of the name
            this.allMale = allMale; // Boolean if the dorm is all male
            this.allFemale = allFemale; // Boolean if the dorm is all female
            this.allPeople = allPeople; // Boolean if the dorm has all gender housing
            this.genderInclusive = genderInclusive; // Boolean if the dorm is gender inclusive
            this.expRoommates = expRoommates; // Double value of the expected roommates
            this.privBathroomPercentage = privBathroomPercentage; // Double of the percentage chance of getting private bathrooms
            this.avgCost = avgCost; // Double of average cost
            this.foodRating = foodRating; // A double of the food-rating assigned
            this.distance = distance; // A double of the walking distance(in time) from the dorm to the clock tower
            this.acPercentage = acPercentage; // A double of the chance of getting an ac room
            this.date = date; // A string of date
            this.link = link // A string of the link
    }
}
// Constructor:
// (name, allMale, allFemale, allPeople, genderInclusive, expRoommates, privBathroomPercentage, avgCost, foodRating, distance, acPercentage, date, link)

let meredith = new ResidenceHall("Meredith", false, true, false, false, 2.0, 14.29, 89.67, 100.00, 86.67, 0.0, "1952", "https://www.housing.purdue.edu/my-housing/options/residence-halls/meredith.html");
let meredithSouth = new ResidenceHall("Meredith South", false, true, false, false, 2.2, 0.0, 58.53, 63.16, 66.67, 100.0, "2020", "https://www.housing.purdue.edu/my-housing/options/residence-halls/meredith-south.html");
let windsor = new ResidenceHall();
let honorsSouth = new ResidenceHall();
let caryQuadrangle = new ResidenceHall();
let mcCutcheon = new ResidenceHall();
let tarkington = new ResidenceHall();
let earhart = new ResidenceHall();
let firstStreetTowers = new ResidenceHall();
let freidaParker = new ResidenceHall();
let winifredParker = new ResidenceHall();
let harrison = new ResidenceHall();
let hawkins = new ResidenceHall();
let hillenbrand = new ResidenceHall();
let honorsNorth = new ResidenceHall();
let owen = new ResidenceHall();
let shreve = new ResidenceHall();
let wiley = new ResidenceHall();
let hilltop = new ResidenceHall();
let aspire = new ResidenceHall();
let provenance = new ResidenceHall();


let dataArray = [meredith, meredithSouth, windsor, honorsSouth, caryQuadrangle, mcCutcheon, tarkington, earhart, firstStreetTowers, freidaParker, winifredParker, harrison, hawkins, hillenbrand, honorsNorth, owen, shreve, wiley, hilltop, aspire, provenance]


////


