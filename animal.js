class Animal {
    name;
    weight;
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(name) {
        this.name = name;
    }
    setWeight(w) {
        this.weight = w;
    }
    getName() {
        return this.name;
    }
    getWeight() {
        return this.weight;
    }
    toString() {
        return `name: ${this.name} weight: ${this.weight}`;
    }
}