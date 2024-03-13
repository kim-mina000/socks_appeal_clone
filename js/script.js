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

