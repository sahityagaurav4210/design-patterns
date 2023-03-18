const EmpType = require("./EmpEnum");
const Factory = require("./Factory");

const employees = [];

const factory = new Factory();

employees.push(
  factory.create({ name: "Gaurav Sahitya", designation: EmpType.Developer })
);
employees.push(
  factory.create({ name: "Rahul Kashyap", designation: EmpType.Developer })
);
employees.push(
  factory.create({ name: "Neeraj Kumar", designation: EmpType.Tester })
);
employees.push(
  factory.create({ name: "Manpreet Kaur", designation: EmpType.Manager })
);
employees.push(
  factory.create({ name: "Karuna Arora", designation: EmpType.HR })
);

console.log('\n');
employees.map((employee) => {
  console.log(`Hello I am ${employee.Name} and i am ${employee.Type}\n`);
});
