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

const specific = document.querySelector('.specific_cartype')
const carimg = document.querySelectorAll('.CarImg')
const xbtn = document.querySelector('.xbtn')
const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third1 = document.querySelector('.third1')
const fourth1 = document.querySelector('.fourth1')
const third2 = document.querySelector('.third2')
const fourth2 = document.querySelector('.fourth2')
const third3 = document.querySelector('.third3')
const fourth3 = document.querySelector('.fourth3')
const third4 = document.querySelector('.third4')
const fourth4 = document.querySelector('.fourth4')
const third5 = document.querySelector('.third5')
const fourth5 = document.querySelector('.fourth5')
const third6 = document.querySelector('.third6')
const fourth6 = document.querySelector('.fourth6')
const third7 = document.querySelector('.third7')
const fourth7 = document.querySelector('.fourth7')
const third8 = document.querySelector('.third8')
const fourth8 = document.querySelector('.fourth8')
const third9 = document.querySelector('.third9')
const fourth9 = document.querySelector('.fourth9')
const third10 = document.querySelector('.third10')
const fourth10 = document.querySelector('.fourth10')
const third11 = document.querySelector('.third11')
const fourth11 = document.querySelector('.fourth11')
const third12 = document.querySelector('.third12')
const fourth12 = document.querySelector('.fourth12')
const third13 = document.querySelector('.third13')
const fourth13 = document.querySelector('.fourth13')
const third14 = document.querySelector('.third14')
const fourth14 = document.querySelector('.fourth14')
const third15 = document.querySelector('.third15')
const fourth15 = document.querySelector('.fourth15')


function stripSpaces(text) {
  const verticalRegex = /[\r\n\t\v\f ]/g;
  const noVerticalSpaces = text.replace(verticalRegex, "");

  const horizontalRegex = /[ \t]/g;
  const noHorizontalSpaces = noVerticalSpaces.replace(horizontalRegex, "");

  return noHorizontalSpaces;
}

xbtn.addEventListener('click',function(e){
  specific.style.display='none';
})
const listEl=document.querySelector('.list')
carimg.forEach(element => {
    element.addEventListener('click', function(e){
    specific.style.display='block';
    first.innerHTML = element.textContent;
    if (stripSpaces(first.innerHTML)=='Audie-tronGT'){
        third1.setAttribute('src','./image/e1.png')
        fourth1.innerHTML = 'e-tron GT quattro'
        third2.setAttribute('src','./image/e2.png')
        fourth2.innerHTML = 'RS e-tron GT'
        third3.setAttribute('src','')
        fourth3.innerHTML = ''
        third4.setAttribute('src','')
        fourth4.innerHTML = ''
        third5.setAttribute('src','')
        fourth5.innerHTML = ''
        third6.setAttribute('src','')
        fourth6.innerHTML = ''
        third7.setAttribute('src','')
        fourth7.innerHTML = ''
        third8.setAttribute('src','')
        fourth8.innerHTML = ''
        third9.setAttribute('src','')
        fourth9.innerHTML = ''
        third10.setAttribute('src','')
        fourth10.innerHTML = ''
        third11.setAttribute('src','')
        fourth11.innerHTML = ''
        third12.setAttribute('src','')
        fourth12.innerHTML = ''
        third13.setAttribute('src','')
        fourth13.innerHTML = ''
        third14.setAttribute('src','')
        fourth14.innerHTML = ''
        third15.setAttribute('src','')
        fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='Audie-tron'){
      third1.setAttribute('src','./image/etron_1.png')
      fourth1.innerHTML = 'e-tron'
      third2.setAttribute('src','./image/e_tron2.png')
      fourth2.innerHTML = 'e-tron Sportback'
      third3.setAttribute('src','./image/e_tron3.png')
      fourth3.innerHTML = 'e-tron S'
      third4.setAttribute('src','./image/e_tron4.png')
      fourth4.innerHTML = 'e-tron S Sportback'
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiA3'){
      third1.setAttribute('src','./image/a31.png')
      fourth1.innerHTML = 'A3'
      third2.setAttribute('src','./image/s32.png')
      fourth2.innerHTML = 'S3'
      third3.setAttribute('src','./image/rs33.png')
      fourth3.innerHTML = 'RS 3'
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiA4'){
      third1.setAttribute('src','./image/A41.png')
      fourth1.innerHTML = 'A4'
      third2.setAttribute('src','./image/S42.png')
      fourth2.innerHTML = 'S4'
      third3.setAttribute('src','')
      fourth3.innerHTML = ''
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiA5'){
      third1.setAttribute('src','./image/a51.png')
      fourth1.innerHTML = 'A5 Coupe'
      third2.setAttribute('src','./image/a52.png')
      fourth2.innerHTML = 'A5 Sportback'
      third3.setAttribute('src','./image/a53.png')
      fourth3.innerHTML = 'A5 Cabriolet'
      third4.setAttribute('src','./image/a54.png')
      fourth4.innerHTML = 'S5 Coupe'
      third5.setAttribute('src','./image/a55.png')
      fourth5.innerHTML = 'S5 Sportback'
      third6.setAttribute('src','./image/a56.png')
      fourth6.innerHTML = 'RS 5 Sportback'
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiA6'){
      third1.setAttribute('src','./image/a61.png')
      fourth1.innerHTML = 'A6'
      third2.setAttribute('src','./image/s62.png')
      fourth2.innerHTML = 'S6'
      third3.setAttribute('src','./image/rs63.png')
      fourth3.innerHTML = 'RS 6'
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiA7'){
      third1.setAttribute('src','./image/a71.png')
      fourth1.innerHTML = 'A7 Sportback'
      third2.setAttribute('src','./image/a72.png')
      fourth2.innerHTML = 'A7 Sportback TFSI e'
      third3.setAttribute('src','./image/a73.png')
      fourth3.innerHTML = 'S7'
      third4.setAttribute('src','./image/a7.png')
      fourth4.innerHTML = 'RS 7 Sportback'
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiA8'){
      third1.setAttribute('src','./image/a81.png')
      fourth1.innerHTML = 'A68 L'
      third2.setAttribute('src','./image/a82.png')
      fourth2.innerHTML = 'S8 L'
      third3.setAttribute('src','./image/a83.png')
      fourth3.innerHTML = 'A8'
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiQ2'){
      third1.setAttribute('src','./image/q21.png')
      fourth1.innerHTML = 'Q2'
      third2.setAttribute('src','')
      fourth2.innerHTML = ''
      third3.setAttribute('src','')
      fourth3.innerHTML = ''
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiQ3'){
      third1.setAttribute('src','./image/q31.png')
      fourth1.innerHTML = 'Q3'
      third2.setAttribute('src','./image/q32.png')
      fourth2.innerHTML = 'Q3 Sportback'
      third3.setAttribute('src','')
      fourth3.innerHTML = ''
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiQ4'){
      third1.setAttribute('src','./image/q41.png')
      fourth1.innerHTML = 'Q4 e-tron'
      third2.setAttribute('src','./image/q42.png')
      fourth2.innerHTML = 'Q4 Sportback e-tron'
      third3.setAttribute('src','')
      fourth3.innerHTML = ''
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiQ5'){
      third1.setAttribute('src','./image/q51.png')
      fourth1.innerHTML = 'Q5'
      third2.setAttribute('src','./image/q52.png')
      fourth2.innerHTML = 'SQ5'
      third3.setAttribute('src','./image/q53.png')
      fourth3.innerHTML = 'Q5 Sportback'
      third4.setAttribute('src','./image/q54.png')
      fourth4.innerHTML = 'SQ5 Sportback'
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiQ7'){
      third1.setAttribute('src','./image/q71.png')
      fourth1.innerHTML = 'Q7'
      third2.setAttribute('src','')
      fourth2.innerHTML = ''
      third3.setAttribute('src','')
      fourth3.innerHTML = ''
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='AudiQ8'){
      third1.setAttribute('src','./image/q81.png')
      fourth1.innerHTML = 'Q8'
      third2.setAttribute('src','./image/q82.png')
      fourth2.innerHTML = 'RS Q8'
      third3.setAttribute('src','')
      fourth3.innerHTML = ''
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='스포트백'){
      third1.setAttribute('src','./image/S1.png')
      fourth1.innerHTML = 'e-tron GT quattro'
      third2.setAttribute('src','./image/S2.png')
      fourth2.innerHTML = 'RS e-tron GT'
      third3.setAttribute('src','./image/S3.png')
      fourth3.innerHTML = 'e-tron Sportback'
      third4.setAttribute('src','./image/S4.png')
      fourth4.innerHTML = 'e-tron S Sportback'
      third5.setAttribute('src','./image/S5.png')
      fourth5.innerHTML = 'A5 Sportback'
      third6.setAttribute('src','./image/S6.png')
      fourth6.innerHTML = 'S5 Sportback'
      third7.setAttribute('src','./image/S7.png')
      fourth7.innerHTML = 'RS 5 Sportback'
      third8.setAttribute('src','./image/S8.png')
      fourth8.innerHTML = 'A7 Sportback'
      third9.setAttribute('src','./image/S9.png')
      fourth9.innerHTML = 'A7 Sportback TFSI e'
      third10.setAttribute('src','./image/S10.png')
      fourth10.innerHTML = 'S7'
      third11.setAttribute('src','./image/S11.png')
      fourth11.innerHTML = 'RS 7 Sportback'
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='SUV'){
      third1.setAttribute('src','./image/suv1.png')
      fourth1.innerHTML = 'e-tron'
      third2.setAttribute('src','./image/suv2.png')
      fourth2.innerHTML = 'e-tron S'
      third3.setAttribute('src','./image/suv3.png')
      fourth3.innerHTML = 'RS 6'
      third4.setAttribute('src','./image/suv4.png')
      fourth4.innerHTML = 'Q2'
      third5.setAttribute('src','./image/suv5.png')
      fourth5.innerHTML = 'Q3'
      third6.setAttribute('src','./image/suv6.png')
      fourth6.innerHTML = 'Q3 Sportback'
      third7.setAttribute('src','./image/suv7.png')
      fourth7.innerHTML = 'Q4 e-tron'
      third8.setAttribute('src','./image/suv8.png')
      fourth8.innerHTML = 'Q4 Sportback e-tron'
      third9.setAttribute('src','./image/suv9.png')
      fourth9.innerHTML = 'Q5'
      third10.setAttribute('src','./image/suv10.png')
      fourth10.innerHTML = 'SQ5'
      third11.setAttribute('src','./image/suv11.png')
      fourth11.innerHTML = 'Q5 Sportback'
      third12.setAttribute('src','./image/suv12.png')
      fourth12.innerHTML = 'SQ5 Sportback'
      third13.setAttribute('src','./image/suv13.png')
      fourth13.innerHTML = 'Q7'
      third14.setAttribute('src','./image/suv14.png')
      fourth14.innerHTML = 'Q8'
      third15.setAttribute('src','./image/suv16.png')
      fourth15.innerHTML = 'RS Q8'
    }
    else if(stripSpaces(first.innerHTML)==='세단'){
      third1.setAttribute('src','./image/sedan1.png')
      fourth1.innerHTML = 'A3'
      third2.setAttribute('src','./image/sedan2.png')
      fourth2.innerHTML = 'S3'
      third3.setAttribute('src','./image/sedan3.png')
      fourth3.innerHTML = 'RS 3'
      third4.setAttribute('src','./image/sedan4.png')
      fourth4.innerHTML = 'A4'
      third5.setAttribute('src','./image/sedan5.png')
      fourth5.innerHTML = 'S4'
      third6.setAttribute('src','./image/sedan6.png')
      fourth6.innerHTML = 'A6'
      third7.setAttribute('src','./image/sedan7.png')
      fourth7.innerHTML = 'S6'
      third8.setAttribute('src','./image/sedan8.png')
      fourth8.innerHTML = 'A8 L'
      third9.setAttribute('src','./image/sedan9.png')
      fourth9.innerHTML = 'S8 L'
      third10.setAttribute('src','./image/sedan10.png')
      fourth10.innerHTML = 'A8'
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='쿠페'){
      third1.setAttribute('src','./image/coupe1.png')
      fourth1.innerHTML = 'A5 Coupe'
      third2.setAttribute('src','./image/coupe2.png')
      fourth2.innerHTML = 'S5 Coupe'
      third3.setAttribute('src','')
      fourth3.innerHTML = ''
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
    else if(stripSpaces(first.innerHTML)==='카브리올레'){
      third1.setAttribute('src','./image/Cabriolet1.png')
      fourth1.innerHTML = 'A5 Cabriolet'
      third2.setAttribute('src','')
      fourth2.innerHTML = ''
      third3.setAttribute('src','')
      fourth3.innerHTML = ''
      third4.setAttribute('src','')
      fourth4.innerHTML = ''
      third5.setAttribute('src','')
      fourth5.innerHTML = ''
      third6.setAttribute('src','')
      fourth6.innerHTML = ''
      third7.setAttribute('src','')
      fourth7.innerHTML = ''
      third8.setAttribute('src','')
      fourth8.innerHTML = ''
      third9.setAttribute('src','')
      fourth9.innerHTML = ''
      third10.setAttribute('src','')
      fourth10.innerHTML = ''
      third11.setAttribute('src','')
      fourth11.innerHTML = ''
      third12.setAttribute('src','')
      fourth12.innerHTML = ''
      third13.setAttribute('src','')
      fourth13.innerHTML = ''
      third14.setAttribute('src','')
      fourth14.innerHTML = ''
      third15.setAttribute('src','')
      fourth15.innerHTML = ''
    }
  })
});