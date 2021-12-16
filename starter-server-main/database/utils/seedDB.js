const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		imageURL: "https://sdmny.hunter.cuny.edu/wp-content/uploads/2019/01/hunter-college-logo.png",
		address: "",
		description: "This is a school in NYC."
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		imageURL: "",
		address: "",
		description: "This is a school in MA."
	});

	const dummy_student = await Student.create({
		firstname: "Joe",
      	lastname: "Shmo",
	});

	await dummy_student.setCampus(dummy_campus);
	
}

module.exports = seedDB;