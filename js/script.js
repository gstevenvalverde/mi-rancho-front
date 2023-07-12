let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
//console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});


changeTheme = function(){
  var css = document.getElementById("theme");
  //var imgLogo = document.getElementById("logo");
  //var imgLogoFull = document.getElementById("logo-full");
  var btnTheme = document.getElementById("btn-change-theme");

  fileName = css.getAttribute("href");
  if(fileName == "/css/dark.css"){
      css.setAttribute("href", "/css/light.css");
      //imgLogo.src = "images/logo-light.png";
      //imgLogoFull.src = "images/logo-full-light.png";
      btnTheme.innerHTML = '<i class="fas fa-moon"></i>';
  }else{
      css.setAttribute("href", "/css/dark.css");
      //imgLogo.src = "images/logo.png";
      //imgLogoFull.src = "images/logo-full.png";
      btnTheme.innerHTML = '<i class="fas fa-sun"></i>';
  }
}

let btnTheme = document.getElementById("btn-change-theme");
btnTheme.addEventListener("click", changeTheme);