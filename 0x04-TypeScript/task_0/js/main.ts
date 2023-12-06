interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1:Student = {
    firstName: "Peter",
    lastName: "Wisdom",
    age: 27,
    location: "Kampala",
};

const student2:Student = {
    firstName: "Laura",
    lastName: "Beautiful",
    age: 21,
    location: "Kampala",
};

const studentsList = [student1, student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})