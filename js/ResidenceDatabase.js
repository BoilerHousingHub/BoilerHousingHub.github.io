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


//// Accessor functions


// Gender Question
let genderQuestion = 'Q2';
let userSelectedSex;
// Responces: Male/Female/Other

function getUserSex () {
    let responces = document.getElementsByName(genderQuestion);
    for (let i = 0; i < responces.length; i++) {
        if (responces[i].checked) {
            userSelectedSex = responces[i].value;
            break;
            }
        }
}


// Gender Inclusive housing question
let genderInclusiveQuestion = 'Q3';
let userGenderInclusive;
// Responces: Yes/No

function genderInclusive () {
    let responces = document.getElementsByName(genderInclusiveQuestion);
    for (let i = 0; i < responces.length; i++) {
        if (responces[i].checked) {
            userGenderInclusive = responces[i].value;
            break;
        }
    }
}

// Gendered Dorm question
let genderedDormQuestion = 'Q4';
let userGenderedDorm;
// Responces: Yes/No

function genderedDorm() {
    let responces = document.getElementsByName(genderedDormQuestion);
    for (let i = 0; i < responces.length; i++) {
        if (responces[i].checked) {
            userGenderedDorm = responces[i].value;
            break;
        }
    }
}

// Bathroom question
let bathroomQuestion = 'Q5';
let userBathroom;
// Responces: 1, 2, 3, 4, 5

function bathroomPref () {
    let responces = document.getElementsByName(bathroomQuestion);
    for (let i = 0; i < responces.length; i++) {
        if (responces[i].checked) {
            userBathroom = responces[i].value;
            userBathroom = parseFloat(userBathroom);
            userBathroom = (userBathroom - 1) * 25
            break;
        }
    }
}

// People in room ranks
let roomRank1;
let roomRank2;
let roomRank3;
let roomRank4;
let expRes;

function roomRank () {
    roomRank1 = document.getElementById('RoomRank1').value;
    roomRank2 = document.getElementById('RoomRank2').value;
    roomRank3 = document.getElementById('RoomRank3').value;
    roomRank4 = document.getElementById('RoomRank4').value;
    // Making the factors
    roomRank1 = parseFloat(roomRank1) * 0.8;
    roomRank2 = parseFloat(roomRank2) * 0.15;
    roomRank3 = parseFloat(roomRank3) * 0.04;
    roomRank4 = parseFloat(roomRank2) * 0.15;
    expRes = roomRank1 + roomRank2 + roomRank3 + roomRank4;
}

// PowerRanking
let acImportance; //0
let bathroomImportance; //1
let roommateImportance; //2
let costImportance; //3
let distanceImportance; //4
let foodImportance; //5
let importanceArray = [acImportance, bathroomImportance, roommateImportance, costImportance, distanceImportance, foodImportance];

function PowerRanking() {
    let valueRank1 = parseInt(document.getElementById('ValueRank1').value)-1;
    let valueRank2 = parseInt(document.getElementById('ValueRank2').value)-1;
    let valueRank3 = parseInt(document.getElementById('ValueRank3').value)-1;
    let valueRank4 = parseInt(document.getElementById('ValueRank4').value)-1;
    let valueRank5 = parseInt(document.getElementById('ValueRank5').value)-1;
    let valueRank6 = parseInt(document.getElementById('ValueRank6').value)-1;
    let valueArray = [valueRank1, valueRank2, valueRank3, valueRank4, valueRank5, valueRank6];

    for (let i = 0; i < 6; i ++ ) {
        for (let j = 0; j < 6; j++) {
            if (valueArray[i] == j && i == 0) {
                importanceArray[j] = 0.286;
            } else if (valueArray[i] == j && i == 1) {
                importanceArray[j] = 0.238;
            } else if (valueArray[i] == j && i == 2) {
                importanceArray[j] = 0.190;
            } else if (valueArray[i] == j && i == 3) {
                importanceArray[j] = 0.143;
            } else if (valueArray[i] == j && i == 4) {
                importanceArray[j] = 0.095;
            } else if (valueArray[i] == j && i == 5) {
                importanceArray[j] = 0.048;
            }
        }
    }
}


/// The logic

/// Calculate poweranking

let noMaleArray;
let noFemaleArray;
let noMaleOrFemaleArray;
let makeCompleteArray;


function calculatePowerRanking (residence) {
    // Output variabe
    let powerRank = 0;
    // Adding the values
    powerRank = powerRank + residence.acPercentage * importanceArray[0]; // Adds weighted AC
    // Making the bathroom weightage
    userBathroom = 100 - Math.abs(userBathroom-residence.privBathroomPercentage);
    powerRank = powerRank + userBathroom*importanceArray[1]; // Adds weighted bathroom
    // Making the roommate weightage
    expRes = (1 - (Math.abs(expRes-residence.expResidents) / (expRes))) * 100;
    powerRank = powerRank + expRes * importanceArray[2]; // Adds weighted roommates amount
    // Making the cost importance 
    powerRank = powerRank + residence.avgCost * importanceArray[3]; // Adds weighted cost amount
    // Making the distance importance
    powerRank = powerRank + residence.distance * importanceArray[4]; // Adds weighted distance amount
    // Making the food importance
    powerRank = powerRank + residence.foodRating * importanceArray[5]; // Addds weighted food amount
    
    // Checking for Gender inclusive housing
    if (userGenderInclusive === "Yes" && (residence.name === "Hawkins" || residence.name === "Hillenbrand" || residence.name === "Hilltop")) {
        powerRank = powerRank + 20;
    }
    // Checking for gendered housing
    if (userGenderedDorm === "Yes" && userSelectedSex === "Male" && residence.allMale) {
        powerRank = powerRank + 20;
    } else if (userGenderedDorm === "Yes" && userSelectedSex === "Female" && residence.allFemale) {
        powerRank = powerRank + 20;
    }
    if (powerRank > 100.0) {
        powerRank = 100.0;
    }
    return powerRank;
}

// Making our final data array
let finalArray;
function makeArray() {
    let tempArray = [];
    for (i = 0; i < dataArray.length; i ++) {
        if (userSelectedSex === "Male") {
            if (!dataArray[i].allFemale) {
                tempArray.push([dataArray[i], Math.round(calculatePowerRanking(dataArray[i])*10)/10]);
            }
        } else if (userSelectedSex === "Female") {
            if (!dataArray[i].allMale) {
                tempArray.push([dataArray[i], Math.round(calculatePowerRanking(dataArray[i])*10)/10]);
            }
        } else if (userSelectedSex === "Other") {
            if (!dataArray[i].allMale && !dataArray[i].allFemale) {
                tempArray.push([dataArray[i], Math.round(calculatePowerRanking(dataArray[i])*10)/10]);
            }
        }
    }
    finalArray = (tempArray.sort((a,b) => b[1] - a[1]));

    return finalArray;
}
