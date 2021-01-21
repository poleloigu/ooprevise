import {getRandomCountry} from '../data/countries.js';
import {Animal} from './Animal.js';

/**
 * 2.Decide which setters and getters we need
 */
export class Mammal extends Animal {
	constructor(id, name, animal_name, scientific_name, type, description) {
		super(id, name, animal_name, scientific_name, type, description);
		this.whereLiving = getRandomCountry();
	}
	birdGreeting = () => {
		console.log('Im a bird and I can fly.');
	};
	mammalLiving = () => {
		alert(`My name is ${this.name} and I live in ${this.whereLiving.name}`);
	};
}
