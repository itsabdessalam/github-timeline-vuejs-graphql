export const formatDate = date => {
	return new Date(date).toLocaleDateString("en-EN", {
		year: "numeric",
		month: "long",
		day: "numeric"
	});
};
