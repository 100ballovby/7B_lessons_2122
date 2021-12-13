let age = 9;
let ageGroup;

if (age <= 1) {
    ageGroup = 'маленькие котята';
} else if (age < 3) {
    ageGroup = 'котята';
} else if (age < 7) {
    ageGroup = 'молодые коты';
} else {
    ageGroup = 'почтенные коты';
}

console.log(ageGroup);
