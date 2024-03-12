// logo hover시 색상 변환
const logoPlace = document.querySelector('.logo-place');

logoPlace.addEventListener('mouseenter',function () {
  logoPlace.querySelector('.top-logo').style.opacity=0;
  logoPlace.querySelector('.top-logo-gray').style.opacity=1;
});
logoPlace.addEventListener('mouseleave',function () {
  logoPlace.querySelector('.top-logo-gray').style.opacity=0;
  logoPlace.querySelector('.top-logo').style.opacity=1;
});

// 메뉴
const topMenuIl = document.querySelectorAll('.top-menu>li');
const menuView = document.querySelector('.menu-view');

topMenuIl.forEach((mainMenu,index) => {
  mainMenu.addEventListener('mouseenter', ()=>{
    console.log(menuView[index]);
    // menuView.classList.add('.showMenu');
  });
});