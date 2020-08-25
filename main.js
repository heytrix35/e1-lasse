//to show the menu bar in the burger menu
function show_hide(){
  var click = document.getElementById("drop-content");
  if(click.style.display ==="none"){
    click.style.display = "block";
  }else{
    click.style.display="none";
  }
}
//open and close for animation
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
// kilde: https://www.youtube.com/watch?v=dIyVTjJAkLw&t=300s
