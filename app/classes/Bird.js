import {getRandomCountry} from '../data/countries';
import {Animal} from './Animal';
export class Bird extends Animal {
	constructor(id, name, animal_name, scientific_name, type, description) {
		super(id, name, animal_name, scientific_name, type, description);
		this.migrationFrom = getRandomCountry();
		this.migrationTo = getRandomCountry();
		this.birdMigration = () => {
			alert(
				`My name is ${this.name} and during the winter I fly from ${this.migrationFrom.name}(${this.migrationFrom.code}) to ${this.migrationTo.name}(${this.migrationTo.code})`
			);
		};
	}
	birdGreeting = () => {
		console.log('Im a bird and i fly');
	};
}
