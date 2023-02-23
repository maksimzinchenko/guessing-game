class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    getMid() {
        return Math.round((this.min + this.max) / 2);
    }

    guess() {
        return this.getMid();
    }

    lower() {
        this.max = this.getMid();
    }

    greater() {
        this.min = this.getMid();
    }
}

module.exports = GuessingGame;
