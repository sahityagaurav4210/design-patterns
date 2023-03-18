const EmpType = require("./EmpEnum");
const Factory = require("./Factory");

const employees = [];

const factory = new Factory();

employees.push(
  factory.create({ name: "Abc", designation: EmpType.Developer })
);
employees.push(
  factory.create({ name: "Def", designation: EmpType.Developer })
);
employees.push(
  factory.create({ name: "Ghi", designation: EmpType.Tester })
);
employees.push(
  factory.create({ name: "Jkl", designation: EmpType.Manager })
);
employees.push(
  factory.create({ name: "Mno", designation: EmpType.HR })
);

console.log('\n');
employees.map((employee) => {
  console.log(`Hello I am ${employee.Name} and i am ${employee.Type}\n`);
});
