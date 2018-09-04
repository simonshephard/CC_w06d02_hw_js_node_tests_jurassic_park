const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaurs;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur('Dino1', 'carnivore', 50);
    dinosaur2 = new Dinosaur('Dino2', 'herbivore', 10);
    dinosaurs1 = [dinosaur1];
    dinosaurs2 = [dinosaur1, dinosaur2];
    park = new Park('Jurassic Park', 10, dinosaurs1);
  })

  it('should have a name', function() {
    const actual = park.name;
    const expected = 'Jurassic Park';
    assert.strictEqual(actual, expected);
  });

  it('should have a ticket price', function() {
    const actual = park.ticketPrice;
    const expected = 10;
    assert.strictEqual(actual, expected);
  });

  it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs;
    const expected = dinosaurs1;
    assert.strictEqual(actual, expected);
  });

  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(dinosaur2);
    const actual = park.dinosaurs;
    const expected = dinosaurs2;
    assert.strictEqual(actual, expected);

  });

  it('should be able to remove a dinosaur from its collection', function() {

  });

  it('should be able to find the dinosaur that attracts the most visitors', function() {

  });

  it('should be able to find all dinosaurs of a particular species', function() {

  });

  it('should be able to remove all dinosaurs of a particular species', function() {

  });

});
