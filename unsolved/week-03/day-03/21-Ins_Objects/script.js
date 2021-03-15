// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion",
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key
// Uses dot notation and logs "Earth"
console.log(planet.name);

// Uses bracket notation and logs "Earth"
console.log(planet["name"]);

const getValueFromPlanet = function (propertyName) {
  return planet[propertyName];
};

//const moons = getValueFromPlanet("moons");
//console.log(moons);
//
//const population = getValueFromPlanet("population");
//console.log(population);

const objectKeys = Object.keys(planet);
console.log(objectKeys);

for (let i = 0; i < objectKeys.length; i++) {
  const keyName = objectKeys[i];
  const value = getValueFromPlanet(keyName);
  console.log(keyName, value);
}

//const numbers = [1, 2, 3];
//
//const actualNumbers = {
//  0: 1,
//  1: 2,
//  2: 3,
//};
