import {animalData} from './data/data.js';

/**
 * 1.Get the data (promise)
 */

const aPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const promiseData = animalData;
		if (promiseData) {
			resolve(promiseData);
		} else {
			alert('Something failed');
			reject(null);
		}
	}, 1000);
});

console.log('Here');
aPromise.then((promisedData) => {
	console.log(promisedData);
});
console.log('There');
/**
 *
 * 2. Decided class properties.
 */

/**
 *
 * 3.Set data into classes
 */

/**
 *
 * 4.Display data
 */

/**
 *
 * 5. async/promises image loading.
 */
const HTMLElementGenerator = (item, type) => {
	// const wrapper = document.createElement('div');
	// const heading = document.createElement('h2');
	// const headingText = document.createTextNode(item.name);
	// heading.appendChild(headingText);
	// const description = document.createElement('p');
	// const descriptionText = document.createTextNode(item.fullDescription());
	// description.appendChild(descriptionText);
	// const image = document.createElement('img');
	// const button = document.createElement('button');
	// const buttonText = document.createTextNode('Click to see image');
	// button.appendChild(buttonText);
	// const infoButton = document.createElement('button');
	// const infoButtonText = document.createTextNode('Click for some info on me');
	// infoButton.appendChild(infoButtonText);
	// wrapper.appendChild(heading);
	// wrapper.appendChild(description);
	// wrapper.appendChild(button);
	// wrapper.appendChild(image);
	// wrapper.appendChild(infoButton);
	// wrapper.classList.add('item');
	// const container = document.getElementById(type);
	// container.appendChild(wrapper);
};

/**
 * 5. Create a small summary of data
 */
