import {Animal} from './classes/Animal.js';
import {Mammal} from './classes/Mammal.js';
import {Bird} from './classes/Bird.js';
import {animalData} from './data/data.js';
import {getImage} from './../data/pictures.js';
import {summary} from './summary/summary.js';

/**
 * 1.Get the data (promise)
 */
let myFirstPromise = new Promise((resolve, reject) => {
	// We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
	// In this example, we use setTimeout(...) to simulate async code.
	// In reality, you will probably be using something like Fetch API.
	setTimeout(function () {
		const promiseData = animalData;
		if (promiseData) {
			resolve(promiseData); // All good
		} else {
			alert('Something failed');
			reject(null);
		}
	}, 100);
});
myFirstPromise.then((fetchedData) => {
	// fetchedData is whatever we passed in the resolve(...) function above.
	// It doesn't have to be an array of objects, it can be whatever we want.
	// console.log(fetchedData);
	setDataIntoClasses(fetchedData);
});

/**
 *
 * 3.Set data into classes
 */
const setDataIntoClasses = (fetchedData) => {
	const animals = fetchedData.map(
		(animal) =>
			new Animal(
				animal.id,
				animal.name,
				animal.animal_name,
				animal.scientific_name,
				animal.type,
				animal.description
			)
	);
	const birds = fetchedData
		.filter((bird) => bird.type === 'bird')
		.map(
			(bird) =>
				new Bird(
					bird.id,
					bird.name,
					bird.animal_name,
					bird.scientific_name,
					bird.type,
					bird.description
				)
		);
	const mammals = fetchedData
		.filter((mammal) => mammal.type === 'mammal')
		.map(
			(mammal) =>
				new Mammal(
					mammal.id,
					mammal.name,
					mammal.animal_name,
					mammal.scientific_name,
					mammal.type,
					mammal.description
				)
		);

	animals.forEach((animal) => {
		HTMLElementGenerator(animal, 'animals');
	});
	birds.forEach((bird) => {
		HTMLElementGenerator(bird, 'birds');
	});
	mammals.forEach((mammal) => {
		HTMLElementGenerator(mammal, 'mammals');
	});

	generateSummary(animals, birds, mammals);
};

/**
 *
 * 4.Display data using classes
 */
const HTMLElementGenerator = (item, type) => {
	const wrapper = document.createElement('div');
	const heading = document.createElement('h2');
	const headingText = document.createTextNode(item.name);
	heading.appendChild(headingText);
	const description = document.createElement('p');
	const descriptionText = document.createTextNode(item.fullDescription());
	description.appendChild(descriptionText);
	const image = document.createElement('img');
	const button = document.createElement('button');
	const buttonText = document.createTextNode('Click to see image');
	button.appendChild(buttonText);
	button.addEventListener('click', async () => {
		const imgSrc = await getImage(item.id);
		image.setAttribute('src', imgSrc.download_url);
	});
	const infoButton = document.createElement('button');
	const infoButtonText = document.createTextNode('Click for some info on me');
	infoButton.appendChild(infoButtonText);
	infoButton.addEventListener('click', () => {
		if (item instanceof Mammal) {
			item.mammalLiving();
		} else if (item instanceof Bird) {
			item.birdMigration();
		} else if (item instanceof Animal) {
			alert(item.fullDescription());
		}
	});

	wrapper.appendChild(heading);
	wrapper.appendChild(description);
	wrapper.appendChild(button);
	wrapper.appendChild(image);
	wrapper.appendChild(infoButton);
	wrapper.classList.add('item');

	const container = document.getElementById(type);
	container.appendChild(wrapper);
};

const generateSummary = (animals, birds, mammals) => {
	const element = document.getElementById('summary');
	summary(animals, birds, mammals);
};
