// variabel yang dipake
let arrow = document.querySelectorAll("#btn-menu");
let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");


for (let i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

// arrow.onclick = function(){
//   subMenu.classList.toggle("active")
// }

console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});

// arrow2.onclick = function() {
//   menuSub.classList.toggle("active");
// };