class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.prev = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.prev = Math.ceil((this.min + this.max) / 2);
        return this.prev;
    }

    lower() {
        this.max = this.prev;
    }

    greater() {
        this.min = this.prev;
    }
}

module.exports = GuessingGame;
