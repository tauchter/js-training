// * exports
// - default: class
// * constructor parameters
// - oxygen: initial amount of oxygen
// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise


// * constructor parameters
// - oxygen: initial amount of oxygen
// * methods
// - getRemainingOxygen: It returns the amount of remaining oxygen
// - breath            : It increments the amount of remaining oxygen
// - consumeOxygen     : It decrements the amount of remaining oxygen
// - hasDied           : It returns true if the amount of oxygen is zero and false otherwise

export default class LivingCreature {
    constructor (oxygen) {
        if(typeof oxygen !== 'number') {
            throw Error('oxygen must be a number');
        }
        if(oxygen < 0) {
            throw Error('oxygen must be mayor or equal to zero');
        }
        this.oxygen = oxygen;
    }

    getRemainingOxygen() {
        return this.oxygen;
    }

    breath() {
      if(this.hasDied()) {
        throw Error('can\'t breath if it\'s dead');
      }
      this.oxygen++;
    }

    consumeOxygen() {
      if(this.hasDied()) {
        throw Error('can\'t consume oxygen if it\'s dead');
      }
      this.oxygen--;
    }

    hasDied() {
      return this.oxygen === 0;
    }
}