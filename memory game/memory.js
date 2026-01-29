class memoryGame {
  constructor() {
    this.options = [
      document.querySelector('#one'),
      document.querySelector('#two'),
      document.querySelector('#three'),
      document.querySelector('#four')
    ];
    this.clickable = true;
    this.patternBtn = document.querySelector('#newPattern');
    this.pattern = [];
    this.init();
  }

  init() {
    this.patternBtn.addEventListener('click', () => this.newRound(5));

    this.options.forEach((option, index) => {
      option.addEventListener('click', () => this.handleClick(index));
    });
  }

  async newRound(len) {
    this.clickable = false;
    this.pattern = this.generatePattern(len);
    
    console.log('new pattern created', this.pattern);

    for (let i of this.pattern) {
      await this.showPattern(i);
      await this.pause(300);
    }

    this.clickable = true;
  }

  generatePattern(len) {
    return Array.from({ length: len }, () => Math.floor(Math.random() * 4));
  }

  async showPattern(num) {
    const currentOption = this.options[num];
    currentOption.classList.add('active');

    await this.pause(500);

    currentOption.classList.remove('active');
  }

  pause(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async handleClick(i) {
    if (!this.clickable) return;
    console.log('button clicked', i);

    await this.showPattern(i);


  }
}

const game = new memoryGame();