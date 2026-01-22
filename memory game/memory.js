let option1 = document.querySelector('#one');
let option2 = document.querySelector('#two');
let option3 = document.querySelector('#three');
let option4 = document.querySelector('#four');

const generatePattern = (len) => {
    return Array.from({ length: len }, () => Math.floor(Math.random() * 3))
};

let newPatternBtn = document.querySelector('#newPattern');

newPatternBtn.addEventListener('click', () => {
    let pattern = generatePattern(6);

    for (i in pattern) {
        console.log(pattern[i]);
    }
})

class memoryGame {
    constructor() {
        this.options = [
            document.querySelector('#one'), 
            document.querySelector('#two'),
            document.querySelector('#three'),
            document.querySelector('#four')
        ];
        this.patternBtn = document.querySelector('#newPattern');
        this.pattern = [];
        this.
    }
}