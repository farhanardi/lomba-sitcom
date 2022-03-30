// SPLASH
const splash = document.querySelector('.splash');

document.addEventListener('DOMContentLoaded', (e)=> {
	setTimeout(()=> {
		splash.classList.add('display-none');
	}, 2000);
})

// SIDEBAR INTERAKTIF
let arrow = document.querySelectorAll("#btn-menu");
let subMenu = document.querySelector(".sub-menu")
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
let arrow2 = document.querySelectorAll("#btn-submenu")
let menuSub = document.querySelector(".menu2")

for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

arrow.onclick = function(){
  subMenu.classList.toggle("active")
}

console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

arrow2.onclick = function() {
  menuSub.classList.toggle("active");
};

// CONTACT US
function submitForm() {
	let name = document.getElementById('input-name').value
	let email = document.getElementById('input-email').value
	let phoneNumber = document.getElementById('input-number').value
	let textarea = document.getElementById('input-textarea').value


	if(name == '') {
		alert('Nama Wajib Di Isi')
	} else if(email == '') {
		alert('Email Wajib Di Isi')
	} else if(phoneNumber == '') {
		alert('Nomor Telepon Wajib Di Isi')
	} else if(textarea == '') {
		alert('Pesan Wajib Di Isi')
	}

	console.log(name)
	console.log(email)
	console.log(phoneNumber)
	console.log(textarea)


	let receiverEmail = 'smkn26jkt@gmail.com';

	let a = document.createElement('a')

	a.href = 'mailto:' + receiverEmail + '?subject' + '&body=Halo nama saya ' + name + ', ' + textarea 

	a.click()
}
