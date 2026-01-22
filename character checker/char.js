const newCharBtn = document.querySelector('#newChar');
const healthBar = document.querySelector('#Health');
const healthText = document.querySelector('#healthText');
const nameDisplay = document.querySelector('#name');
const attackSpeedBar = document.querySelector('#attackSpeed');
const attackSpeedText = document.querySelector('#attackSpeedText');
const charismaBar = document.querySelector('#charisma');
const charismaText = document.querySelector('#charismaText');
const attackPowBar = document.querySelector('#attackPow');
const attackPowText = document.querySelector('#attackPowText');
const streetCredBar = document.querySelector('#streetCred');
const streetCredText = document.querySelector('#streetCredText');

const character = (name) => {
    const hmin = 50;
    const max = 200;
    const min = 0;
    const health = Math.floor(Math.random() * (max - hmin + 1)) + hmin;
    const charisma = Math.floor(Math.random() * (max - min + 1)) + min;
    const attackSpeed = Math.floor(Math.random() * (max - min + 1)) + min;
    const attackPow = Math.floor(Math.random() * (max - min + 1)) + min;
    const streetCred = Math.floor(Math.random() * (max - min + 1) + min);

    let isAlive = () => health > 0;
    let getName = () => name;
    let getHealth = () => health;
    let getCharisma = () => charisma;
    let getAttackSpeed = () => attackSpeed;
    let getAttackPow = () => attackPow;
    let getStreetCred = () => streetCred;

    return { isAlive, getName, getHealth, getAttackSpeed, getCharisma, getAttackPow, getStreetCred };
};

const screenUpdate = (char) => {
    //update name
    nameDisplay.textContent = char.getName();

    //update health
    healthBar.value = char.getHealth();
    healthText.textContent = char.getHealth();

    //update attack speed
    attackSpeedBar.value = char.getAttackSpeed();
    attackSpeedText.textContent = char.getAttackSpeed();

    //update charisma
    charismaBar.value = char.getCharisma();
    charismaText.textContent = char.getCharisma();

    //update attack power
    attackPowBar.value = char.getAttackPow();
    attackPowText.textContent = char.getAttackPow();

    //update street cred
    streetCredBar.value = char.getStreetCred();
    streetCredText.textContent = char.getStreetCred();
};



newCharBtn.addEventListener('click', () => {
    const nameInput = document.querySelector('#charName').value;
    const newChar = character(nameInput);
    screenUpdate(newChar);
});
