function greeter(person: string) {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution: Access the specific element of the array
console.log(greeter(user[0])); // Correct usage, outputs: "Hello, Jane"

//Alternative solution: Change the function signature to accept an array
function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeterArray(user));//Correct usage, outputs: "Hello, Jane Doe"