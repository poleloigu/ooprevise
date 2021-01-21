/**
 * 2.Decide which setters and getters we need
 */

export class Animal {
	constructor(id, name, animal_name, scientific_name, type, description) {
		this.id = id;
		this.name = name;
		this.animal_name = animal_name;
		this.description = description;
		this.scientific_name = scientific_name;
		this.type = type;
		// this.image = getRandomImage(this.id);
		this.fullDescription = () => {
			return `Hi, my name is ${this.name}. Here are some interesting facts about me. ${this.description}`;
		};
	}
	animalGreeting = () => {
		alert('I am an animal');
	};
}
