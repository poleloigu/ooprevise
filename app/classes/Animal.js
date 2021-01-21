export class Animal {
	constructor(id, name, animal_name, scientific_name, type, description) {
		this.id = id;
		this.name = name;
		this.animal_name = animal_name;
		this.scientific_name = scientific_name;
		this.type = type;
		this.description = description;
		this.color = null;
		this.fullDescription = () => {
			return `Hi, my name is ${this.name}, but scientists call me ${this.scientific_name}. Here are some interesting facts about me.
            ${this.description}`;
		};
	}
	animalGreeting = () => {
		alert('I am an animal');
	};
}

/**
    {
		id: 1,
		name: 'Sileas',
		animal_name: 'Hyena, striped',
		scientific_name: 'Hyaena hyaena',
		type: 'mammal',
		description:
			'Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
	},
 */
