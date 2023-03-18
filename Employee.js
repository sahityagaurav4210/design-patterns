class Employee {
  #name;
  #type;
  constructor(name, type) {
    this.#name = name;
    this.#type = type;
  }

  get Name() {
    return this.#name;
  }

  get Type() {
    return this.#type;
  }
}

module.exports = Employee;
