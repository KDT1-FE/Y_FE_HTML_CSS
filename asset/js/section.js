// 스크롤 탑
const stt = document.getElementsByClassName('stt')[0];

stt.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    }
);

// 날짜
const currentDate = new Date();
const month = currentDate.getMonth() + 1; 
const day = currentDate.getDate();

const changeDate = document.getElementsByClassName('calendar')[0];
changeDate.style.backgroundImage = `url(https://www.kakaocorp.com/page/calendar/light/ico_date${day}.gif)`;
changeDate.innerHTML = changeDate.innerHTML.replace('7월 25일', `${month}월 ${day}일`);


