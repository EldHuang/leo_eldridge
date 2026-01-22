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
        this.init();
    }

    init() {
        this.patternBtn.addEventListener('click', () => this.newRound(5));
    }

    generatePattern(len) {
        return Array.from({ length: len }, () => Math.floor(Math.random() * 3))
    }

    newRound(len) {
        this.pattern = this.generatePattern(len);
        console.log('new pattern created', this.pattern);

    }
}

const game = new memoryGame;