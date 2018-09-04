const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaurs1;
  let dinosaurs2;
  let park1;
  let park2;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Species1', 'Carnivore', 50);
    dinosaur2 = new Dinosaur('Species2', 'Herbivore', 10);
    dinosaurs1 = [dinosaur1];
    dinosaurs2 = [dinosaur1, dinosaur2];
    park1 = new Park('Jurassic Park', 10, dinosaurs1);
    park2 = new Park('Jurassic Park', 10, dinosaurs2);
  })

  it('should have a name', function() {
    const actual = park1.name;
    const expected = 'Jurassic Park';
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function() {
    const actual = park1.ticketPrice;
    const expected = 10;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park1.dinosaurs;
    const expected = dinosaurs1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park1.addDinosaur(dinosaur2);
    const actual = park1.dinosaurs;
    const expected = dinosaurs2;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    park2.removeDinosaur(dinosaur2);
    const actual = park2.dinosaurs;
    const expected = dinosaurs1;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {
    const actual = park2.findPopularDinosaur();
    const expected = dinosaur1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function() {
    const actual = park2.findDinosaursOfSpecies('Species1');
    const expected = dinosaurs1;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function() {
    park2.removeDinosaursOfSpecies('Species2');
    const actual = park2.dinosaurs;
    const expected = dinosaurs1;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per day', function() {
    const actual = park2.totalVisitorsPerDay();
    const expected = 60;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate the total number of visitors per year', function() {
    const actual = park2.totalVisitorsPerYear();
    const expected = 60 * 365;
    assert.strictEqual(actual, expected);
  });


  // Calculate the total number of visitors per day
  // Calculate the total number of visitors per year
  // Calculate the total revenue from ticket sales for one year
  // Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type
  // Example: { 'carnivore': 5, 'herbivore': 2, 'omnivore': 1 }


});
