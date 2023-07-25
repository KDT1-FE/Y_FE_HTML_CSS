let i=0;
let j=0;
const HeadMenuEls=document.querySelector('.HeadMenuBtn')
const NaviEl=document.getElementById('HeadNavi')
const HeadLogoEl=document.querySelector('.HeadLogoImg')
const SearchEl=document.querySelector('.material-symbols-outlined')
const HeadLines1=document.querySelector('.HeadLine1')
const HeadLines2=document.querySelector('.HeadLine2')
const HeadLines3=document.querySelector('.HeadLine3')
const HeadLines4=document.querySelector('.HeadLine4')
const SectionEls=document.querySelector('.SectionContainer')
const SectionModelEl=document.querySelector('.SectionModelList')
const SectionSearchEls=document.querySelector('.SectionSearchContainer')
const CarListEl=document.querySelector('.CarListModels')
const CarList=document.querySelector('.CarList')
const ADEl=document.querySelectorAll('.AD')
HeadMenuEls.addEventListener('click', function(e) {
  i++;
  if(i%2!=0){
    NaviEl.style.display="block";
    HeadLogoEl.style.display='none';
    SearchEl.style.display='block';
    SectionEls.style.display='none';
    SectionSearchEls.style.display='none';
    SectionModelEl.style.display='none';
    CarListEl.style.display='none';
    CarList.style.display='none';
    CarTypeEl.style.display='none';
    ADEl.forEach(element => {
      element.style.display = 'none';
    });
    HeadLines1.style.animation='420ms ease 0s 1 normal forwards running disappear';
    HeadLines2.style.animation='240ms ease 180ms 1 normal forwards running leftX';
    HeadLines3.style.animation='240ms ease 180ms 1 normal forwards running rightX';
    HeadLines4.style.animation='420ms ease 0s 1 normal forwards running disappear';
  }
  else{
    NaviEl.style.display='none';
    HeadLogoEl.style.display='block';
    SearchEl.style.display='none';
    SectionEls.style.display='block';
    SectionSearchEls.style.display='flex';
    SectionModelEl.style.display='inline-block';
    CarListEl.style.display='flex';
    CarList.style.display='block';
    ADEl.forEach(element => {
      element.style.display = 'flex';
    });
    if(ModelTypeEl.getAttribute('aria-selected')=='true'){
      CarTypeEl.style.display='block';
    }
    HeadLines1.style.animation='420ms ease 0s 1 normal none running disappearback';
    HeadLines2.style.animation='240ms ease 0s 1 normal none running leftbackX';
    HeadLines3.style.animation='240ms ease 0s 1 normal none running rightbackX';
    HeadLines4.style.animation='420ms ease 0s 1 normal none running disappearback';
  }
});

const SectEl=document.querySelector('.SectionDropdown')
const DownEl=document.querySelector('.SectionDropdown > .material-symbols-outlined')
const ListEl=document.querySelector('.SectionCarList')

SectEl.addEventListener('click',function(e){
  j++;
  if(j%2!=0){
    //리스트 열기
    DownEl.style.transform='rotate(180deg)';
    ListEl.style.maxHeight='288px';
  }
  else{
    //리스트 접고 애니메이션 효과
    DownEl.style.transform='none';
    ListEl.style.maxHeight='none';
  }
})

const ModelEl=document.querySelector('.SectionModel')
const ModelTypeEl=document.querySelector('.SectionModelType')
const CarEl=document.querySelector('.CarListSroll')
const CarTypeEl=document.querySelector('.CarType')
const LeftEl=document.querySelector('.Left')
const RightEl=document.querySelector('.Right')

ModelEl.addEventListener('click',function(e){
  ModelEl.setAttribute('aria-selected',true);
  ModelTypeEl.setAttribute('aria-selected',false);
  CarListEl.style.display='flex';
  ModelEl.style.color='black';
  ModelEl.style.textDecoration='underline';
  ModelTypeEl.style.color='#d9d9d9';
  ModelTypeEl.style.textDecoration='none';
  CarEl.style.display='block';
  CarTypeEl.style.display='none';
})

ModelTypeEl.addEventListener('click',function(e){
  ModelTypeEl.setAttribute('aria-selected',true);
  ModelEl.setAttribute('aria-selected',false);
  CarListEl.style.display='none';
  ModelTypeEl.style.color='black';
  ModelTypeEl.style.textDecoration='underline';
  ModelEl.style.color='#d9d9d9';
  ModelEl.style.textDecoration='none';
  CarEl.style.display='none';
  CarTypeEl.style.display='block';
  LeftEl.style.display='none';
})

let initialScrollPos = CarEl.scrollLeft;

CarEl.addEventListener('scroll', function(e) {
  if (CarEl.scrollLeft === initialScrollPos) {
    LeftEl.style.display = 'none';
  } else {
    LeftEl.style.display = 'block';
  }
});

LeftEl.addEventListener('click',function(e){
  CarEl.scrollLeft-=1000;
})

RightEl.addEventListener('click',function(e){
  CarEl.scrollLeft+=1000;
})