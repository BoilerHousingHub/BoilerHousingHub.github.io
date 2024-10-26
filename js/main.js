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
            break;
        }
    }
}

// AC QUestion
let acQuestion = '';
let userAC;
// Responces: 1, 2, 3, 4, 5

function acPreference () {
    let responces = document.getElementsByName(acQuestion);
    for (let i = 0; i < responces.length; i++) {
        if (responces[i].checked) {
            userAC = responces[i].value;
            break;
        }
    }
}

// 