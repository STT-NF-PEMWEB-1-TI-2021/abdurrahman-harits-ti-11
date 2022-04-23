let form = document.getElementById('login');
let username = document.getElementById('user');
let password = document.getElementById('pasword');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs(e) {
	e.preventDefault();
	let usernameValue = username.value.trim();
	let passwordValue = password.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username tidak boleh kosong');
	} else {
		setSuccessFor(username, '');
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password tidak boleh kosong');
	} else{
		setSuccessFor(password, '');
	}
}

function setErrorFor(input, message) {
	let form = input.parentElement;
	let small = form.querySelector('small');
	small.innerHTML = message;
}

function setSuccessFor(input, message) {
	let form = input.parentElement;
	let small = form.querySelector('small');
	small.innerHTML = '';
}

function hasildata() {
	let form = document.getElementById("form")
	let data = document.getElementById("data")
	let hasil = form.querySelectorAll("input")
	let teks = form.querySelectorAll("label")
	for (let i = 0; i <= form.length; i++) {
	data.innerHTML += teks[i].textContent + " : " + hasil[i].value + "<br>" 
	}
}