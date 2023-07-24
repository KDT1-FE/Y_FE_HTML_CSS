let i=0;
const HeadMenuEls=document.querySelector('.HeadMenuBtn')
const NaviEl=document.getElementById('HeadNavi')
const HeadLogoEl=document.querySelector('.HeadLogoImg')
const SearchEl=document.querySelector('.material-symbols-outlined')
const HeadLines1=document.querySelector('.HeadLine1')
const HeadLines2=document.querySelector('.HeadLine2')
const HeadLines3=document.querySelector('.HeadLine3')
const HeadLines4=document.querySelector('.HeadLine4')
HeadMenuEls.addEventListener('click', function(e) {
  i++;
  if(i%2!=0){
    NaviEl.style.display="block";
    HeadLogoEl.style.display='none';
    SearchEl.style.display='block';
    // HeadLines1.classList.add("disappear");
    HeadLines1.style.animation='420ms ease 0s 1 normal forwards running disappear';
    HeadLines2.style.animation='240ms ease 180ms 1 normal forwards running leftX';
    HeadLines3.style.animation='240ms ease 180ms 1 normal forwards running rightX';
    HeadLines4.style.animation='420ms ease 0s 1 normal forwards running disappear';
  }
  else{
    NaviEl.style.display='none';
    HeadLogoEl.style.display='block';
    SearchEl.style.display='none';
    HeadLines1.style.animation='420ms ease 0s 1 normal none running disappearback';
    HeadLines2.style.animation='240ms ease 0s 1 normal none running leftbackX';
    HeadLines3.style.animation='240ms ease 0s 1 normal none running rightbackX';
    HeadLines4.style.animation='420ms ease 0s 1 normal none running disappearback';
  }
});