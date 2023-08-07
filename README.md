## 대학교 유세인트 클론코딩

### 실제 사이트

https://saint.ssu.ac.kr/irj/portal

### 배포 사이트

https://gorgeous-alfajores-250a00.netlify.app/

---

<br/>
float 속성을 이용하여 요소들을 정렬하고<br/>
line-height나 text-align 등을 이용해서 정렬을 하던 기존 방식에서<br/>
flex를 이용하여 변경했습니다<br/>
<br/>
좌측 영역과 우측 영역을 section 태그로 분리하였습니다. <br/>
좌측은 로그인과 여러 링크들에 관한 내용이고, <br/>
우측은 공지사항이나 뉴스 페이지 링크가 있어 의미적으로 분리가 필요해 보였습니다.<br/>
<br/>
평소 ul li 태그를 사용해 본 적이 많이 없어서<br/>
공지사항 부분은 flex 없이 ul li 태그로 구현했습니다<br/>
<br/>
추가로 display: relative와 top 속성을 통해 요소를 가운데 배치했었는데,<br/>
해당 방법 대신 margin-top 속성을 통해 화면상 가운데에 위치시켰습니다. <br/>
- display:relative를 중복적으로 사용하면 스타일링이 꼬일 수 있다는 리뷰를 보고 수정하였습니다.<br/>
- 다만 기존 div에서 margin을 줄 경우 background-image나 color에 영향이 생겨 하위 div에서 margin-top 속성을 추가했습니다.<br/>
- 의미적으로도 여백이 필요한 요소에 알맞은 속성이 들어간 점이 이전보다 가독성이 높아진 것 같습니다.<br/>
<br/>

---

<br/>
추가적으로 미디어쿼리를 활용하여 화면의 너비 1200px을 기준으로 반응형으로 작동하도록 했습니다.<br />
화면의 너비가 1200px이하로 내려갈 때 기존 요소들의 스타일링이 많이 무너지게 되어 기준점을 1200px로 잡게 되었습니다.<br />
<br />
우선 최상위 div의 flex-direction을 column으로 변경하여 너비가 좁아졌을 때 기존 좌우로 분리되었던 section을 상하로 배치되도록 했습니다.<br />
또한 기존과는 여백이 많이 다른 것 같아 원본 홈페이지와 최대한 유사하게 padding 값과 margin값을 수정했습니다.<br /><br />
그리고 기존 right section에 있던 background image가 좁은 화면에서는 다른 파일이였고 이를 추가하고 위치를 알맞게 지정했습니다.<br />

<br />
이외에도 넓은 화면에서는 left section에 있던 navigator가 좁은 화면에서는 right section 하단에 위치하여<br /> 
navigator 요소를 추가하였고 미디어쿼리 조건에 맞게 각각 display: none 속성과 display: block속성을 통해 다르게 표시되도록 구현했습니다.
