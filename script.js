//your JS code here. If required.
const nameInput = document.getElementById('name'); 
const ageInput = document.getElementById('age');
const button = document.querySelector("#btn");

button.addEventListener("click", (e) => {
	e.preventDefault();

	const name = nameInput.value.trim();
	const age = parseInt(ageInput.value, 10);

	if (!name || isNaN(age) || age <= 0) {
	    alert("Please enter valid details.");
	    return;
	}
	
	let p1 = () => {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(age > 18) {
					resolve(`Welcome, ${name}. You can vote.`);
				}
				else{
					reject(`Oh sorry ${name}. You aren't old enough.`)
				}
			}, 4000)
		})
	};

	p1().then((data) => {
		alert(data)
	}).catch((err) => {
		alert(err)
	});
});