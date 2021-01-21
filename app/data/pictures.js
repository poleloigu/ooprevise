export const getImage = async (id) => {
	let result;
	try {
		const fetched = await fetch(
			`https://picsum.photos/v2/list?page=${id}&limit=1`
		);
		result = await fetched.json();

		return result[0];
	} catch (err) {
		// catch errors and do something
		console.error(`something bad happened -> ${err}`);
	}
};
