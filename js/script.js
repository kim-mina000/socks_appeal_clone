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

// scroll시 h3 transform 샤샥
const slideTextGroup = document.querySelector('.slide-text_group');
slideTextGroup.classList.remove('text-group-effect');
window.addEventListener('scroll', ()=>{
  if (this.window.scrollY > 100) {
    slideTextGroup.classList.add('text-group-effect');
  } else {
    slideTextGroup.classList.remove('text-group-effect');
  }
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
  // forEach로 배열 사용 불가능하다는것을 깨달았습니다 
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
const reviewPage = document.querySelector('.review-group');
const reviewPageEach = reviewPage.querySelectorAll('.review-each');
let reviewCounter = 1;
const slideLen = (290*8) + (15*7);
const slideWidth = 307.5;

// let lastChild = reviewPage.lastElementChild;
// let firstChild = reviewPage.firstElementChild;
let lastChild = reviewPage.lastElementChild.cloneNode(true);
let firstChildClone = reviewPage.firstElementChild.cloneNode(true);
let firstChild = reviewPage.firstElementChild;


// reviewBtnL.addEventListener('click',()=>{
//   // reviewPage.style = 'transform: translateX(-300px)';
//   reviewCounter++;
//   reviewPage.forEach(function (reviewEach) {
//     reviewEach.style=`transform: translateX(${-reviewCounter*300}px)`;
//   });
// })
// 굳이 querySelectorAll으로 모두 선택해 올 필요x 전체를 하나로 묶은 다음 끌어와도 됨
// 위의 코드는 forEach를 안써서 안돌아갔음

// WEEKLY BEST 페이지네이션 구현
//  1) 페이지네이션 버튼 눌렀을때 이동

setInterval(()=>{
  let firstChildClone = reviewPage.firstElementChild.cloneNode(true);
  let firstChild = reviewPage.firstElementChild;
  reviewBtnR.addEventListener('click',()=>{
    console.log('click_r');
  
    reviewPage.appendChild(firstChildClone); 
    reviewPage.removeChild(firstChild);
  });

  reviewPage.appendChild(firstChildClone); 
  reviewPage.removeChild(firstChild);


  reviewBtnL.addEventListener('click',()=>{
  });
  if ( 0 < reviewCounter && reviewCounter <= 8 ) {
    console.log(reviewCounter);
    reviewPage.style = `transform : translateX(-${slideWidth*reviewCounter}px)`
    reviewCounter++;
  } else if ( reviewCounter < 0 ) { 
    reviewCounter = 0;
    reviewPage.style = `transform : translateX(${slideWidth*reviewCounter})`
  } else if ( reviewCounter = 9 ) {
    reviewCounter = 1;
    reviewPage.style = `transform : translateX(0px)`
  }
},3000);
//clearInterval()


const weeklyGroupStyle = document.querySelector('.weekly-group');
const pageNation = document.querySelectorAll('.page-nation-btn');
let weeklyIndex = 0;

function pageNationBtn(index) {
  // pageNation.style = 'background-color : #999';
  pageNation[0].style = 'background-color : #999';
  pageNation[1].style = 'background-color : #999';
  pageNation[2].style = 'background-color : #999';
  pageNation[index].style = 'background-color : black';
}

pageNation.forEach((pageNationEl, indexPN)=>{
  pageNation[0].style = 'background-color : black';
  pageNation[indexPN].addEventListener('click', ()=>{
    weeklyIndex = indexPN;
    if (indexPN == 0) {
      weeklyGroupStyle.style = `transform : translateX(0)`;
      pageNationBtn(0);
    } else if (indexPN == 1) {
      weeklyGroupStyle.style = `transform : translateX(-1215px)`; 
      pageNationBtn(1);
    } else if (indexPN == 2){
      weeklyGroupStyle.style = `transform : translateX(-2430px)`;
      pageNationBtn(2);
    }
  });
});

//  2) 좌우버튼 눌렀을때
const weeklyBtnL = document.querySelector('.weekly-btn--r');
const weeklyBtnR = document.querySelector('.weekly-btn--l');

weeklyBtnL.addEventListener('click',()=>{
  if ( weeklyIndex == 0 ) {
    weeklyGroupStyle.style = `transform : translateX(-2430px)`;
    weeklyIndex = 2;
    pageNationBtn(2);

  } else if (weeklyIndex == 1) {
    weeklyGroupStyle.style = `transform : translateX(0)`;
    weeklyIndex = 0;
    pageNationBtn(0);

  } else if (weeklyIndex == 2) {
    weeklyGroupStyle.style = `transform : translateX(-1215px)`; 
    weeklyIndex = 1;
    pageNationBtn(1);
  }
});
weeklyBtnR.addEventListener('click',()=>{
  if ( weeklyIndex == 0 ) {
    weeklyGroupStyle.style = `transform : translateX(-1215px)`; 
    weeklyIndex = 1;
    pageNationBtn(1);

  } else if ( weeklyIndex == 1 ) {
    weeklyGroupStyle.style = `transform : translateX(-2430px)`;
    weeklyIndex = 2;
    pageNationBtn(2);

  } else if ( weeklyIndex == 2 ) {
    weeklyGroupStyle.style = `transform : translateX(0)`;
    weeklyIndex = 0;
    pageNationBtn(0);
  }
});

// const menuList = document.querySelector();
// const menuViewMobile = document.querySelector('.menu-view');
// function mobileMenu() {
  
// }