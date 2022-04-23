let form = document.getElementById('form');
let namaperusahaan = document.getElementById('namaperusahaan');
let deskripsiloker = document.getElementById('deskripsiloker');
let kualifikasiloker = document.getElementById('kualifikasiloker');
let kontakperson = document.getElementById("kontakperson");
let email = document.getElementById("email");


form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});


function checkInputs(e) {
	e.preventDefault();
	let namaperusahaanValue = namaperusahaan.value.trim();
	let deskripsilokerValue = deskripsiloker.value.trim();
	let kualifikasilokerValue = kualifikasiloker.value.trim();
    let kontakpersonValue = kontakperson.value.trim();
    let emailValue = email.value.trim();
	
	if(namaperusahaanValue === '') {
		setErrorFor(namaperusahaan, 'Nama Perusahaan tidak boleh kosong');
	} else {
		setSuccessFor(namaperusahaan, '');
	}
	
	if(deskripsilokerValue === '') {
		setErrorFor(deskripsiloker, 'Deskripsi Lowongan tidak boleh kosong');
	} else {
		setSuccessFor(deskripsiloker, '');
	}
	
	if(kualifikasilokerValue === '') {
		setErrorFor(kualifikasiloker, 'Kualifikasi Lowongan tidak boleh kosong');
	} else{
		setSuccessFor(kualifikasiloker, '');
	}

    if(kontakpersonValue === '') {
		setErrorFor(kontakperson, 'Kontak tidak boleh kosong');
	} else{
		setSuccessFor(kontakperson, '');
	}

    if(emailValue === '') {
		setErrorFor(email, 'Email tidak boleh kosong');
	} else{
		setSuccessFor(email, '');
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