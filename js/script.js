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

// top-menu 중 user

document.querySelector('.top-user .person').addEventListener('mouseleave', function () {
  document.querySelector('.top-user .top-user--contents').style.display = 'none';
});
document.querySelector('.top-user .person').addEventListener('mouseenter', function () {
  document.querySelector('.top-user .top-user--contents').style.display = 'block';
});

// top-menu 중 search
const searchIcon = document.querySelector('.top-user .search');
const searchContainerStyle = document.querySelector('.search_container').style;

searchIcon.addEventListener('click', function () {
  if ( searchContainerStyle.height == '300px' ){
    searchContainerStyle.height = '0px';
    searchContainerStyle.visibility = 'hidden';
  } else { 
    searchContainerStyle.height = '300px';
    searchContainerStyle.visibility = 'visible';
  };
});


// SLIDER 구현
new Swiper('.swiper',{
  // direction: 'horizental', //수직슬라이드 <-> 수평:horizental
  loop: true, //반복재생여부
  autoplay: true, //자동재생여부
  autoplay: {delay:5000},
  centeredSlides: true
});


// badge - scroll
const badgeEl = document.querySelector('.badge');
const badgeUp = badgeEl.querySelector('.up-to');
const badgeDown = badgeEl.querySelector('.down-to');

window.addEventListener('scroll',function () {
  if( this.window.scrollY > 100 ){
    badgeEl.style.visibility = 'visible';
    badgeEl.style.opacity = 1;

  } else {
    badgeEl.style.visibility = 'hidden';
    badgeEl.style.opacity = 0;
  }
});

//badge - up down
badgeUp.addEventListener('click', function () {
  if (window.scrollY != 0) {
    window.scrollTo({top:0, behavior:"smooth"});
  }
});
badgeDown.addEventListener('click', function () {
  window.scrollTo({ top:9200, behavior:"smooth"});
});
// 질문 7 scrollTo bottom같은건 왜 없을까요 .. 이게 최선의 방법일까요...?

// HEADER scroll내릴시 고정
// HEADER scroll내릴시 top-logo scale 변환
const headerEl = document.querySelector('header');
window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    headerEl.classList.add('header-style');
    headerEl.querySelector('.top-logo').style.scale = '80%';
    headerEl.querySelector('.top-logo-gray').style.scale = '80%';

  } else {
    headerEl.classList.remove ('header-style');
    headerEl.querySelector('.top-logo').style.scale = '100%';
    headerEl.querySelector('.top-logo-gray').style.scale = '100%';
  }
})
// featured - 호버시 다른상품 보이게
const featuredBtnEls = document.querySelectorAll('.featured-button a');
const featuredGroupEls = document.querySelectorAll('.featured-group');
// document.querySelectorAll('.featured-button a').forEach((featuredBtnEl,index) => {
  // featuredBtnEl[1].addEventListener('mouseenter', () => {
  //   document.querySelectorAll('.featured-group').forEach((featuredGroupEl,index_2) => {
  //     featuredGroupEl.style.display = 'none';
  //     featuredGroupEl[1].style.display = 'block'; <- 질문 7 이게 안되용,,, 
  //   });
  // });
  featuredBtnEls.forEach((featuredBtnEl,index) => {
    featuredGroupEls[0].style.display = 'flex';
  featuredBtnEls[index].addEventListener('mouseenter', () => {
    featuredGroupEls.forEach((featuredGroupEl) => {
      featuredGroupEl.style.display = 'none';
      featuredGroupEls[index].style.display = 'flex';
    });
  });

});

// COUSTOM REVIEW 버튼 눌러 슬라이드
const reviewBtnL = document.querySelector('.buttom_left');
const reviewBtnR = document.querySelector('.buttom_right');
const reviewPage = document.querySelectorAll('.review-each');

