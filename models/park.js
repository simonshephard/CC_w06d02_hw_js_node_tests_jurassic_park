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

Park.prototype.removeDinosaursOfSpecies = function(species) {
  const dinosaurs = this.findDinosaursOfSpecies(species);
  for (dinosaur of dinosaurs) {
    this.removeDinosaur(dinosaur);
  }
};

Park.prototype.totalVisitorsPerDay = function() {
  let total = 0;
  for (let i = 0; i < this.dinosaurs.length; i++) {
    total += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return total;
};

Park.prototype.totalVisitorsPerYear = function() {
  const totalVisitorsPerDay = this.totalVisitorsPerDay();
  const days = 365;
  return (totalVisitorsPerDay * days);
};

Park.prototype.totalRevenuePerYear = function() {
  const totalVisitorsPerYear = this.totalVisitorsPerYear();
  const ticketPrice = this.ticketPrice;
  return (totalVisitorsPerYear * ticketPrice);
};

Park.prototype.dietTypes = function() {
  dietTypes = {};
  for (let i = 0; i < this.dinosaurs.length; i++) {
    if (dietTypes.hasOwnProperty(this.dinosaurs[i].diet)) {
      dietTypes[this.dinosaurs[i].diet] += 1;
    } else {
      dietTypes[this.dinosaurs[i].diet] = 1;
    }
  }
  return dietTypes;
};

module.exports = Park;
