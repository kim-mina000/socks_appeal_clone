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


// SIGN UP - ID
const userId = document.querySelector('#user-id');
const userIdAdd = document.querySelector('#user-id-add');

userId.addEventListener('blur',()=>{
  console.log(userId.value);
  console.log(isNaN(userId.value));
  console.log(typeof(userId.value));
  console.log(userId.value.length);
  if ( userId.value.length == 0 ){
    userIdAdd.innerText = '아이디를 입력해 주세요.';
    userIdAdd.style.color = 'red';
  } else if ( isNaN(userId.value) != true || userId.value.length > 17 || userId.value.length < 4 ){ 
    userIdAdd.innerText = '아이디는 영문소문자 또는 숫자 4~16자로 입력해 주세요.';
    userIdAdd.style.color = 'red';
  } else {
    userIdAdd.innerText = `${userId.value}는 사용 가능한 아이디 입니다.`;
    userIdAdd.style.color = 'black';
  }
});

// 비밀번호 확인
const userPassword = document.querySelector('#user-password');
const userPasswordCheck = document.querySelector('#user-password-2');

userPasswordCheck.addEventListener('blur',()=>{
  if( userPassword.value !== userPasswordCheck.value ){
    document.querySelector('#user-password-check').innerText = '비밀번호가 일치하지 않습니다.';
  } else if ( userPassword.value === userPasswordCheck.value ) {
    document.querySelector('#user-password-check').innerText = '';
  }
});


// 전체동의하기
const agreeAll = document.querySelector('#agree');
const agreeFirst = document.querySelector('#agree-1');
const agreeSecond = document.querySelector('#agree-2');

agreeAll.addEventListener('click',()=>{
  if (agreeAll.checked == true) {
    agreeFirst.checked = true;    
    agreeSecond.checked = true;
  } else if (agreeAll.checked == false) {
    agreeFirst.checked = false;    
    agreeSecond.checked = false;
  }
});
agreeFirst.addEventListener('click',()=>{
  if (agreeFirst.checked == false) {
    agreeAll.checked = false;
  } else if ( agreeFirst.checked == true && agreeSecond.checked == true) {
    agreeAll.checked = true;
  }
});
agreeSecond.addEventListener('click',()=>{
  if (agreeSecond.checked == false) {
    agreeAll.checked = false;
  } else if ( agreeFirst.checked == true && agreeSecond.checked == true) {
    agreeAll.checked = true;
  }
});

// 전체 동의 안했을때 알림창 띄우기
const userName = document.querySelector('#user-name');
const userEmail = document.querySelector('#user-email');