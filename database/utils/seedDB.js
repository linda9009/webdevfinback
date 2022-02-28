const { Page, Result } = require('../models');

const seedDB = async () => {
	const dummy_page = await Page.create({
		number: "1"
	});
	const dummy_page2 = await Page.create({
		number: "2"
	});
	const dummy_result = await Result.create({
			title: "Outer Space",
			resultUrl: "google.com",
	  		description: "Space is Cool"
		});

	await dummy_result.setPage(dummy_page);
	
}

module.exports = seedDB;