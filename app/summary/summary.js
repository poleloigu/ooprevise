export const summary = (animals, birds, mammals) => {
	const totalAnimals = getTotalAnimals(animals);
	const occurrences = getOccurrencesOfCountry(birds, mammals);
	alert(`There are a total of ${totalAnimals} animals`);
	alert(JSON.stringify(occurrences));
};

/**
 *
 * Writing these functions so because we maybe want to add something in the future
 * If they were this simple we could just write them in the main summary function
 */
const getTotalAnimals = (animals) => {
	return animals.length;
};

const getOccurrencesOfCountry = (birds, mammals) => {
	function _countDuplicates(obj, num) {
		obj[num] = ++obj[num] || 1;
		return obj;
	}
	const countries = [];
	mammals.forEach((mammal) => countries.push(mammal.whereLiving.name));
	birds.forEach((bird) => {
		countries.push(bird.migrationFrom.name);
	});

	const answer = countries.reduce(_countDuplicates, {});
	return answer;
};
