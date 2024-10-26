class ResidenceHall {
    // Making a constructor
    constructor(name, allMale, allFemale, allPeople, genderInclusive, 
        expResidents, privBathroomPercentage, avgCost, foodRating, distance, acPercentage, 
        date, link) {
            // Initializing all the variables
            this.name = name; // String of the name
            this.allMale = allMale; // Boolean if the dorm is all male
            this.allFemale = allFemale; // Boolean if the dorm is all female
            this.allPeople = allPeople; // Boolean if the dorm has all gender housing
            this.genderInclusive = genderInclusive; // Boolean if the dorm is gender inclusive
            this.expResidents = expResidents; // Double value of the expected residents
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
// (name, allMale, allFemale, allPeople, genderInclusive, expResidents, privBathroomPercentage, avgCost, foodRating, distance, acPercentage, date, link)

let meredith = new ResidenceHall("Meredith", false, true, false, false, 2.00, 14.29, 82.43, 100.00, 86.67, 0.00, "1952", "https://www.housing.purdue.edu/my-housing/options/residence-halls/meredith.html");
let meredithSouth = new ResidenceHall("Meredith South", false, true, false, false, 2.2, 0.0, 29.45, 63.16, 66.67, 100.0, "2020", "https://www.housing.purdue.edu/my-housing/options/residence-halls/meredith-south.html");
let windsor = new ResidenceHall("Windsor", false, true, false, false, 1.92, 23.08, 49.32, 90.00, 86.67, 100.00, "1951", "https://www.housing.purdue.edu/my-housing/options/residence-halls/windsor.html");
let honorsSouth = new ResidenceHall("Honors College South", false, true, false, false, 2.63, 12.50, 49.70, 55.00, 100.00, 100.00, "2016", "https://www.housing.purdue.edu/my-housing/options/residence-halls/honors-college.html");
let caryQuadrangle = new ResidenceHall("Cary Quadrangle", true, false, false, false, 2.06, 23.53, 65.51, 35.00, 80.00, 47.06, "1928", "https://www.housing.purdue.edu/my-housing/options/residence-halls/cary-quad.html");
let mcCutcheon = new ResidenceHall("McCutcheon", true, false, false, false, 3.00, 0.00, 80.20, 20.00, 26.67, 100.00, "1963", "https://www.housing.purdue.edu/my-housing/options/residence-halls/mccutcheon.html");
let tarkington = new ResidenceHall("Tarkington", true, false, false, false, 2.80, 0.00, 100.00, 85.00, 80.00, 0.00, "1958", "https://www.housing.purdue.edu/my-housing/options/residence-halls/tarkington.html");
let earhart = new ResidenceHall("Earhart", false, false, true, false, 2.40, 0.00, 85.89, 50.00, 46.67, 100.00, "1964", "https://www.housing.purdue.edu/my-housing/options/residence-halls/earhart.html");
let firstStreetTowers = new ResidenceHall("First Street Towers", false, false, true, false, 1.50, 100.00, 18.82, 30.00, 53.33, 100.00, "2009", "https://www.housing.purdue.edu/my-housing/options/residence-halls/first-street.html");
let freidaParker = new ResidenceHall("Frieda Parker", false, false, true, false, 2.67, 100.00, 33.92, 80.00, 100.00, 100.00, "2020", "https://www.housing.purdue.edu/my-housing/options/residence-halls/parker-north.html");
let winifredParker = new ResidenceHall("Winifred Parker", false, false, true, false, 2.60, 100.00, 44.91, 95.00, 100.00, 100.00, "2015", "https://www.housing.purdue.edu/my-housing/options/residence-halls/parker-south.html");
let harrison = new ResidenceHall("Harrison", false, false, true, false, 3.20, 20.00, 86.53, 25.00, 40.00, 100.00, "1966", "https://www.housing.purdue.edu/my-housing/options/residence-halls/harrison.html");
let hawkins = new ResidenceHall("Hawkins", false, false, true, true, 1.80, 60.00, 59.72, 5.00, 93.33, 100.00, "1981", "https://www.housing.purdue.edu/my-housing/options/residence-halls/hawkins.html");
let hillenbrand = new ResidenceHall("Hillenbrand", false, false, true, true, 2.50, 100.00, 66.60, 45.00, 53.33, 100.00, "1993", "https://www.housing.purdue.edu/my-housing/options/residence-halls/hillenbrand.html");
let honorsNorth = new ResidenceHall("Honors College North", false, false, true, false, 2.63, 12.50, 49.70, 70.00, 100.00, 100.00, "2016", "https://www.housing.purdue.edu/my-housing/options/residence-halls/honors-college.html");
let owen = new ResidenceHall("Owen", false, false, true, false, 2.43, 28.57, 86.21, 40.00, 66.67, 28.57, "1957", "https://www.housing.purdue.edu/my-housing/options/residence-halls/owen.html");
let shreve = new ResidenceHall("Shreve", false, false, true, false, 2.00, 33.33, 64.83, 60.00, 66.67, 100.00, "1970", "https://www.housing.purdue.edu/my-housing/options/residence-halls/shreve.html");
let wiley = new ResidenceHall("Wiley", false, false, true, false, 2.50, 33.33, 89.10, 75.00, 93.33, 4.00, "1958", "https://www.housing.purdue.edu/my-housing/options/residence-halls/wiley.html");
let hilltop = new ResidenceHall("Hilltop", false, false, true, true, 2.25, 100.00, 51.79, 15.00, 26.67, 100.00, "1948", "https://www.housing.purdue.edu/my-housing/options/apartments/hilltop.html");
let aspire = new ResidenceHall("Aspire", false, false, true, false, 1.40, 100.00, 0.00, 10.00, 46.67, 100.00, "2019", "https://www.housing.purdue.edu/my-housing/options/apartments/aspire.html");
let provenance = new ResidenceHall("Provenance", false, false, true, false, 1.75, 100.00, 0.00, 0.00, 0.00, 100.00, "2021", "https://www.housing.purdue.edu/my-housing/options/apartments/provenance.html");


let dataArray = [meredith, meredithSouth, windsor, honorsSouth, caryQuadrangle, mcCutcheon, tarkington, earhart, firstStreetTowers, freidaParker, winifredParker, harrison, hawkins, hillenbrand, honorsNorth, owen, shreve, wiley, hilltop, aspire, provenance]


////


