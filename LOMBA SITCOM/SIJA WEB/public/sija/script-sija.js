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

// READMORE DAFTAR MAPEL
const btn = document
  .querySelector('.read-more-btn');

const text = document 
  .querySelector('.card__read-more');

const cardHolder = document
  .querySelector('.card-holder');

cardHolder
  .addEventListener('click', e => {
    const current = e.target;
    const isReadMoreBtn = current.className.includes('read-more-btn');
    if (!isReadMoreBtn)
      return;

    const currentText = e.target.parentNode.querySelector('.card__read-more');
    currentText.classList.toggle('card__read-more--open');
    current.textContent = current.textContent.includes('Overview') ? 'Overview' : 'Overview';
  });


