function Ship(name, type, ability) {
  this.name = name;
  this.type = type;
  this.ability = ability;
  this.crew = [];

  this.missionStatement = function missionStatement(){
    if(this.crew.length === 0){
      return("Cant perform a mission yet." );
    }

    for(var i=0; i< this.crew.length-1 ; i++){
      if(jobTypes[this.job[i]] === ship.type){
        return (console.log(this.Ship.ability));
      }
    }
  }

}

function CrewMember(name, job, specialSkill) {
  this.name = name;
  this.job = job;
  this.specialSkill = specialSkill;
  this.ship = null;

  this.enterShip = function enterShip(Ship){
  this.ship = Ship;
  Ship.crew.push(this);
  }
}
