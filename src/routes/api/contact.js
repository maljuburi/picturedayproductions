export const post = (request) => {
	const formData = JSON.parse(request.body);
	console.log('formData', formData);
	// TODO: handle contact data

	return {
		body: formData
	};
};
