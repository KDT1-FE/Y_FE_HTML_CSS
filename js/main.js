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
const ServiceEl=document.querySelector('.Service')
const SpaceEls=document.querySelectorAll('.Space')
const SnsEl=document.querySelector('.SNS')
const FooterEl=document.querySelector('.Footer')
const menuEl=document.querySelector('.Quickmenu')
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
    ServiceEl.style.display='none';
    SnsEl.style.display='none';
    ADEl.forEach(element => {
      element.style.display = 'none';
    });
    SpaceEls.forEach(element => {
      element.style.display='none';
    });
    FooterEl.style.display='none';
    menuEl.style.display='none';
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
    ServiceEl.style.display='block';
    SnsEl.style.display='block';
    ADEl.forEach(element => {
      element.style.display = 'flex';
    });
    SpaceEls.forEach(element => {
      element.style.display='block';
    });
    FooterEl.style.display='block';
    menuEl.style.display='block';
    if(ModelTypeEl.getAttribute('aria-selected')=='true'){
      CarTypeEl.style.display='block';
    }
    HeadLines1.style.animation='420ms ease 0s 1 normal none running disappearback';
    HeadLines2.style.animation='240ms ease 0s 1 normal none running leftbackX';
    HeadLines3.style.animation='240ms ease 0s 1 normal none running rightbackX';
    HeadLines4.style.animation='420ms ease 0s 1 normal none running disappearback';
  }
});

const DownEl=document.querySelector('.SectionDropdown > .material-symbols-outlined')
const dropdownEl=document.querySelector('.Dropdownlayout')
DownEl.addEventListener('click',function(e){
  j++;
  if(j%2!=0){
    DownEl.style.transform='rotate(180deg)';
    dropdownEl.style.display='block';
  }
  else{
    DownEl.style.transform='none';
    dropdownEl.style.display='none';
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

const UpEl = document.querySelector('.Up')

UpEl.addEventListener('click', function(e){
  window.scrollTo(0,0);
})

const menuEls=document.querySelectorAll('.menucontainer')
const textEls=document.querySelectorAll('.Textmenu')

menuEls.forEach(element => {
  element.addEventListener('mouseover',function(e){
    textEls.forEach(element => {
      element.style.display='flex'
    })
  })
  element.addEventListener('mouseout',function(e){
    textEls.forEach(element => {
      element.style.display='none'
    })
  })
});

const subgrEls=document.querySelectorAll('.subgroup')
subgrEls.forEach(element => {
  element.addEventListener('mouseover',function(e){
    element.style.color='gray';
    element.style.cursor='pointer';
  })
  element.addEventListener('mouseout',function(e){
    element.style.color='black';
  })
});

let previousElement = null;
const Title=document.querySelector('.SectionCarsCategory')

subgrEls.forEach(element => {
  if(element.getAttribute('aria-selected')==='true'){
    previousElement=element;
    element.style.backgroundColor='gray';
    console.log(element)
  }
  else{
    element.style.backgroundColor='#d9d9d9';
  }
})
const newcar = document.querySelector('.SectionNumOfNewcars')
const oldcar = document.querySelector('.SectionNumOfOldcars')
subgrEls.forEach(element => {
  element.addEventListener('click', function(e) {
    if (previousElement !== null) {
      previousElement.style.backgroundColor = '#d9d9d9';
      previousElement.setAttribute('aria-selected',false);
      DownEl.style.transform='none';
      dropdownEl.style.display='none';
    }
    element.style.backgroundColor = '#b6b6b6';
    element.setAttribute('aria-selected',true);
    Title.innerHTML = element.querySelector('.sub').textContent;
    if(Title.innerHTML==="e-tron GT quattro"){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='RS e-tron GT'){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='Audi e-tron'){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '30';
    }
    else if(Title.innerHTML==='Audi e-tron Sportback'){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '10';
    }
    else if(Title.innerHTML==='e-tron S'){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='Audi e-tron S Sportback'){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='A3'){
      newcar.innerHTML = '11';
      oldcar.innerHTML = '11';
    }
    else if(Title.innerHTML==='S3'){
      newcar.innerHTML = '5';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='RS 3'){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='A4'){
      newcar.innerHTML = '24';
      oldcar.innerHTML = '35';
    }
    else if(Title.innerHTML==='S4'){
      newcar.innerHTML = '4';
      oldcar.innerHTML = '6';
    }
    else if(Title.innerHTML==='A5 Coupe'){
      newcar.innerHTML = '5';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='A5 Sportback'){
      newcar.innerHTML = '20';
      oldcar.innerHTML = '15';
    }
    else if(Title.innerHTML==='A5 Cabriolet'){
      newcar.innerHTML = '14';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='S5 Coupe'){
      newcar.innerHTML = '4';
      oldcar.innerHTML = '1';
    }
    else if(Title.innerHTML==='S5 Sportback'){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='RS 5 Sportback'){
      newcar.innerHTML = '4';
      oldcar.innerHTML = '2';
    }
    else if(Title.innerHTML==='A6'){
      newcar.innerHTML = '41';
      oldcar.innerHTML = '22';
    }
    else if(Title.innerHTML==='S6'){
      newcar.innerHTML = '6';
      oldcar.innerHTML = '8';
    }
    else if(Title.innerHTML==='RS 6'){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='A7 Sportback'){
      newcar.innerHTML = '17';
      oldcar.innerHTML = '9';
    }
    else if(Title.innerHTML==='A7 Sportback TFSI e'){
      newcar.innerHTML = '6';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='S7'){
      newcar.innerHTML = '3';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='RS7 Sportback'){
      newcar.innerHTML = '0';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='A8 L'){
      newcar.innerHTML = '17';
      oldcar.innerHTML = '8';
    }
    else if(Title.innerHTML==='S8 L'){
      newcar.innerHTML = '6';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='A8'){
      newcar.innerHTML = '11';
      oldcar.innerHTML = '2';
    }
    else if(Title.innerHTML==='Q2'){
      newcar.innerHTML = '12';
      oldcar.innerHTML = '20';
    }
    else if(Title.innerHTML==='Q3'){
      newcar.innerHTML = '29';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='Q3 Sportback'){
      newcar.innerHTML = '17';
      oldcar.innerHTML = '4';
    }
    else if(Title.innerHTML==='Q4 e-tron'){
      newcar.innerHTML = '15';
      oldcar.innerHTML = '7';
    }
    else if(Title.innerHTML==='Q4 Sportback e-tron'){
      newcar.innerHTML = '15';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='Q5'){
      newcar.innerHTML = '24';
      oldcar.innerHTML = '3';
    }
    else if(Title.innerHTML==='SQ5'){
      newcar.innerHTML = '5';
      oldcar.innerHTML = '3';
    }
    else if(Title.innerHTML==='Q5 Sportback'){
      newcar.innerHTML = '22';
      oldcar.innerHTML = '3';
    }
    else if(Title.innerHTML==='SQ5 Sportback'){
      newcar.innerHTML = '5';
      oldcar.innerHTML = '0';
    }
    else if(Title.innerHTML==='Q7'){
      newcar.innerHTML = '21';
      oldcar.innerHTML = '5';
    }
    else if(Title.innerHTML==='Q8'){
      newcar.innerHTML = '21';
      oldcar.innerHTML = '4';
    }
    else{
      newcar.innerHTML = '0';
      oldcar.innerHTML = '0';
    }
    previousElement = element;
    DownEl.style.transform='none';
    dropdownEl.style.display='none';
    DownEl.click();
  });
});





