import {dataArray} from "./ResidenceDatabase";

// Gender Question
let genderQuestion = '';
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
let genderInclusiveQuestion = '';
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
let genderedDormQuestion = '';
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
let bathroomQuestion = '';
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
    roomRank1 = document.getElementsById('RoomRank1').value;
    roomRank2 = document.getElementsById('RoomRank2').value;
    roomRank3 = document.getElementsById('RoomRank3').value;
    roomRank4 = document.getElementsById('RoomRank4').value;
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

function PowerRanking () {
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

