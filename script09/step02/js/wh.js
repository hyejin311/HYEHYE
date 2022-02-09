//초기 변수값//
let num =0;
//목적//
let targetX = 0;
//카운트//
let count = 0;
//이미지 전환시간의 간격//
let action = 200;
//li의 너비//
let sWidth =600;
//li개수
let sNum = 5;
//진행 시 논리 값
let go =true;

//기본 셋업하기 onload -> 이벤트//
window.addEventListener('DOMContentLoaded',function(){

//1.복제//
const temp = document.querySelector('.box').cloneNode(true);
document.querySelector('#gall').append(temp);

//2. 스타일 정리 .box는 1배, clone한 #gall은 2배//
document.querySelector('.box').style.width = sWidth * sNum + 'px';
document.querySelector('#gall').style.width = (sWidth * sNum)*2 + 'px';

 //3.타이머 작동//
 setInterval(motion,10);

 //4.이벤트 만들기//
 const Btn = document.querySelectorAll('.box>li');

 //let go 가져와서 forEach 로 mouseover//
 Btn.forEach(function(btn){
   btn.addEventListener('mouseover',function(e){
     go = false;
   });
 });

 //let go 가져와서 forEach 로 mouseout//
Btn.forEach(function(btn){
  btn.addEventListener('mouseout',function(e){
    go= true;
  });
});

//prev next 버튼 만들기//
const Prev = document.querySelector('#prev');
const Next = document.querySelector('#next');

//버튼에 클릭 기능//
Prev.addEventListener('click',prev);
Next.addEventListener('click',next);

//동그라미//
const Circ = document.querySelectorAll('.nav>li');
Circ.forEach(function(circ){
circ.addEventListener('click',function(e){

const data = circ.getAttribute('data-num');
console.log(data);
cir =data;
circle();
targetX = -sWidth * (data-1);
});
});
});

//카운터 만들기//
function motion(){
  if(go){
    ++count;
    document.querySelector('#info').innerHTML= count;
    if(count == action){
      count =0;
      prev();
    }
  }
  num += 0.1 * (targetX - num);
  document.querySelector('#gall').style.left = num + 'px';
}


//circle//
let cir = 1;
function circle(){
for(let i =1; i <= sNum; i++){
document.querySelector('.g'+ i).style.backgroundColor = 'green';
}
document.querySelector('.g' + cir).style.backgroundColor = 'pink';}

//prev 방향 설정하기 -1의 식//
function prev(){
  targetX += 600;
  if(targetX> 0){
    num = -sWidth * (sNum -1);
  }
  cir--;
  if(cir < 1){cir = sNum;}
  circle();
}

//next 방향 (sNum *2 -1)//
function next(){

//기본 움직임//
targetX -= 600;

//조건//
if(targetX < -sWidth * (sNum*2 -1)){

num = -sWidth * (sNum* -1);
targetX = -sWidth *sNum;
}
cir++;
if(cir > sNum){cir = 1;}
circle();
}
