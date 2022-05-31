
// Exercise 6
function validate(event) {
	var error = 0;
	event.preventDefault();
	// Get the input fields
	var fName = document.getElementById("fName");
	var fEmail = document.getElementById("fEmail");
	var fAddress = document.getElementById("fAddress");
	var fLastN = document.getElementById("fLastN");
	var fPassword = document.getElementById("fPassword");
	var fPhone = document.getElementById("fPhone");


	//check invalid simbols in email with regex
	const validateEmail = (email) => {
		return String(email)
		  .toLowerCase()
		  .match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		  );
	};
	
	//regex contains only letters, ignoring case
	const letters = /[a-z]$/i;

	//regex must contain letter and numbers
	const validPassword = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;

	// Validate fields entered by the user: name, phone, password, and email
	//validate Name
	if (fName.value.length < 3 || letters.test(fName.value) == false) {
		fName.classList.add("is-invalid");
		error++;
	} else {
		fName.classList.remove("is-invalid");
	}

	//validate Last Name
	if (fLastN.value.length < 3 || letters.test(fLastN.value) == false) {
		fLastN.classList.add("is-invalid");
		error++;
	} else {
		fLastN.classList.remove("is-invalid");
	}

	//validate eMail
	if(fEmail.value.length < 3 && validateEmail){
		fEmail.classList.add('is-invalid');
		error++;
	} else {
		fEmail.classList.remove("is-invalid");
	}
	
	//validate password
	if(validPassword.test(fPassword.value) == false){
		fPassword.classList.add('is-invalid');
		error++;
	} else {
		fPassword.classList.remove("is-invalid");
	}

	//validate Address
	if(fAddress.value.length < 3){
		fAddress.classList.add('is-invalid');
		error++;
	} else {
		fAddress.classList.remove("is-invalid");
	}

	//validate phone number
	if(fPhone.value.length < 9){
		fPhone.classList.add('is-invalid');
		error++;
	} else {
		fPhone.classList.remove("is-invalid");
	}
}
