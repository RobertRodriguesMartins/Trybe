class baseEntity {
  #number
  constructor(number) {
    this.#number = number;
  }

  get numberType() {
    if (typeof this.#number !== 'number') throw new Error("You didn't passed a number or an argument")
    const positive = this.#number > 0 ? "Positive" : false;
    const negative = this.#number < 0 ? "Negative" : false;

    return positive || negative || "Neutral"
  }
}

module.exports = baseEntity;
