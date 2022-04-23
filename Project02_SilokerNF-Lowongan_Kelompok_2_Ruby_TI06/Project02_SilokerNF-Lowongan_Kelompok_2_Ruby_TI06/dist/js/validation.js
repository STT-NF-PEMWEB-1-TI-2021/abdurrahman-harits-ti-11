let form = document.getElementById('form');
let namalengkap = document.getElementById('namalengkap');
let email = document.getElementById('email');
let username = document.getElementById('username');
let password = document.getElementById('password');
let cekpassword = document.getElementById("cekpassword");


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs(e) {
	e.preventDefault();
	let namalengkapValue = namalengkap.value.trim();
	let emailValue = email.value.trim();
	let usernameValue = username.value.trim();
	let passwordValue = password.value.trim();
    let cekpasswordValue = cekpassword.value.trim();
	
	if(namalengkapValue === '') {
		setErrorFor(namalengkap, 'Nama Lengkap tidak boleh kosong');
	} else {
		setSuccessFor(namalengkap, '');
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email tidak boleh kosong');
	} else {
		setSuccessFor(email, '');
	}
	
	if(usernameValue === '') {
		setErrorFor(username, 'username tidak boleh kosong');
	} else {
		setSuccessFor(username, '');
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password tidak boleh kosong');
	} else{
		setSuccessFor(password, '');
	}

    if(cekpasswordValue === '') {
		setErrorFor(cekpassword, 'Cek Password tidak boleh kosong');
	} else{
		setSuccessFor(cekpassword, '');
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