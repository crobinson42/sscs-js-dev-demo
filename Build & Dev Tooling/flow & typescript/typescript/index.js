function printName(person) {
  console.log(`
    Name: ${person.last}, ${person.first}
    Date of Birth: ${person.dob}
  `)
}

// *********************

printName({
  first: 'cory',
  last: 'robinson',
  dob: new Date('01/06/1986'),
});
