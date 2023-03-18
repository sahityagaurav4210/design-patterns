const Employee = require("./Employee");

class Factory {
  create(options = {}) {
    return new Employee(options.name, options.designation);
  }
}

module.exports = Factory;
