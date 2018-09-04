const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function(dinosaur) {
  let index = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(index, 1);
};

Park.prototype.findPopularDinosaur = function() {
  let maxGuests = 0;
  let popular = null;
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].guestsAttractedPerDay > maxGuests) {
      maxGuests = this.dinosaurs[i].guestsAttractedPerDay;
      popular = this.dinosaurs[i];
    }
  }
  return popular;
};

Park.prototype.findDinosaursOfSpecies = function(species) {
  const dinosaurs = [];
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (this.dinosaurs[i].species === species) {
      dinosaurs.push(this.dinosaurs[i]);
    }
  }
  return dinosaurs;
};
module.exports = Park;
