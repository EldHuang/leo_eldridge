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

    newRound(len) {
        this.pattern = this.generatePattern(len);
        console.log('new pattern created', this.pattern);
        for (let i in this.pattern) {
            setTimeout(() => this.showPattern(this.pattern[i]), 1000 * i);
        }
    }

    generatePattern(len) {
        return Array.from({ length: len }, () => Math.floor(Math.random() * 4))
    }

    showPattern(num) {
        const currentOption = this.options[num];

        currentOption.classList.add('active');

        setTimeout(() => currentOption.classList.remove('active'), 500);
    }

    decideColor(opt) {
        if (opt === 0) {
            return 'green';
        } else if (opt === 1) {
            return 'red';
        } else if (opt === 2) {
            return 'yellow';
        } else {
            return 'blue';
        }
    }
}

const game = new memoryGame;